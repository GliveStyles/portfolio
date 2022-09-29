import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css"

export default function ContactUs() {
  

  return (
    <div className="Contact__my" id="contact">
      <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display__Contact">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h1 className="color_sec">Get in touch</h1>
            <address>
              <strong className="color__123">Email:<span>glivegijiness@gamil.com</span> </strong>
            </address>
          </Col>  
        </Row>
      </Container>
    </div>
  );
}