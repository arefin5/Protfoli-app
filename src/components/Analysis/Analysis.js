import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";

class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { Technology: "Javascript", Projects: 100 },
        { Technology: "React", Projects: 90 },
        { Technology: "Next ", Projects: 100 },
        { Technology: "Node Js", Projects: 85 },
        { Technology: "Express", Projects: 90 },
        { Technology: "Bootstrap", Projects: 95 },
        { Technology: "Mongo", Projects: 80 },
        { Technology: "Socket-oi", Projects: 75 },
      ],
    };
  }

  render() {
    var blue = "rgba(0,115,230,0.8)";
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">Technology Used</h1>
          <Row>
            <Col
              style={{ width: "100%", height: "300px" }}
              lg={6}
              md={12}
              sm={12}
            >
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="Technology" />
                  <Tooltip />
                  <Bar dataKey="Projects" fill={blue}></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
             
              <p className="text-justify des">
                {" "}
                I always build dynamic application. Admin panel is the heart of
                such kinds of application. I always try to provide sufficient
                features in admin panel to dominate application. According to
                client demand I use  OOP, Mern Stack to build
                admin panel section.{" "}
              </p>
              <p className="text-justify des">
                {" "}
                Application security is a big deal for commercial application. I
                always ensure security portion of my application, moreover i
                build a security alert system, to notify admin when his system
                at risk.{" "}
              </p>
              <p className="text-justify des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                repudiandae voluptatibus aliquid, deserunt error obcaecati eius
                excepturi dolore! Eveniet, omnis cum ipsa cumque expedita
                reiciendis dolorum. Beatae voluptatibus quas recusandae!
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
