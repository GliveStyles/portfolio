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
            {/* <p>{contactConfig.description}</p> */}
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="Center__Elements">
                  <input
                    className="name__center"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit"> 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}