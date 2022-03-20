import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faSkype,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="text-center footerSection">
          <Row>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h1 className="serviceName">Follow Me</h1>
              
              <a className="socialLink" href="#">
                <FontAwesomeIcon icon={faYoutube} /> YouTube
              </a>
              <br />
              <a
                className="socialLink"
                href="https://www.linkedin.com/in/arefin-talukder-87a1ba1a4//"
              >
                <FontAwesomeIcon icon={faLinkedinIn} /> <span></span> Linkedin
              </a><br/>
              {/* git hub */}
              <a
                className="socialLink"
                href="https://github.com/arefin5/"
              >
                <FontAwesomeIcon icon={faGithub} /> <span></span> Github
              </a><br />
              {/* skype */}
              <a className="socialLink" href="https://skype.com/arefintalukder5@gmail.com">
                <FontAwesomeIcon icon={faSkype} /> Skype
              </a>
              <br />
              {/* tweet */}
            
              {/* facebook */}
            
              <a className="socialLink" href="https://www.facebook.com/arefintalukder1">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
              <br />
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h1 className="serviceName">Address</h1>
              <p className="serviceDescription">
                Ibrahimpur, belobo, Narsingdie
              </p>
              <p className="serviceDescription">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} />
                arefintalukder5@gmail.com
              </p>
              <p className="serviceDescription">
                {" "}
                <FontAwesomeIcon icon={faPhone} /> +8801740921290
              </p>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h1 className="serviceName">Information</h1>
              <Link className="footerLink" to="/about">
                {" "}
                About Me
              </Link>
              <br />
              <Link className="footerLink" to="/contact">
                Contact Me
              </Link>
              <br />
              <Link className="footerLink" to="/resume">
                My Resume
              </Link>
              <br />
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h1 className="serviceName">Legal</h1>
              <a className="footerLink" href="#">
                Refund Policy
              </a>
              <br />
              <a className="footerLink" href="#">
                Terms And Condition
              </a>
              <br />
              <a className="footerLink" href="#">
                Privacy Policy
              </a>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="text-center copyrightSection">
          <a className="copyrightLink" href="#">
            Arefin.com &copy; 2020-2022
          </a>
        </Container>
      </Fragment>
    );
  }
}
export default Footer;
