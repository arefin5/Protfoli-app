import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import cv from '../../asset/image/ArefinResume.pdf'
class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                  <h1 className="topTitle">MERN Stack Developer</h1>
                  <h4 className="topSubTitle"> Web Application</h4>
                  <Button  href={cv} download={cv}  variant="primary">Download Resume
                  
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}
export default TopBanner;




// link:   https://drive.google.com/file/d/1z90IoLH28-ob8LbKjhzSCQkEqjYN89Oz/view?usp=sharing

