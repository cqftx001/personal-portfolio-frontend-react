import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('Submit');
  const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    if (email && email.indexOf("@") > -1) {
      try {
        console.log("Sending request...");  // 调试输出
        const response = await fetch("http://127.0.0.1:5000/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ EMAIL: email }),
        });

        const result = await response.json();

        if (response.ok) {
          setStatus({ success: true, message: 'Subscription successful' });
          clearFields();  // 清空输入框
        } else {
          setStatus({ success: false, message: result.message });
          console.error(result.message);
        }
      } catch (error) {
        setStatus({ success: false, message: "Failed to submit subscription, please try again later." });
        console.error("Failed to submit subscription:", error);
      }
    } else {
      setStatus({ success: false, message: 'Please enter a valid email address.' });
      console.log("Invalid email address");  // 调试输出
    }
    setButtonText("Submit");
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
            {status.message && (
              <Alert variant={status.success === false ? "danger" : "success"}>
                {status.message}
              </Alert>
            )}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input 
                  value={email} 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email Address" 
                />
                <button type="submit"><span>{buttonText}</span></button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
