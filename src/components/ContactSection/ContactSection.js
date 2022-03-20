import React, {Component,Fragment,useState,useEffect} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import axios from '../../axios'

const  ContactSection=()=>   {
const [name,  setName]=useState("");
const [email,setEmail]=useState("");
const [msg,setMsg]=useState("");
 const [ok,setOk]=useState("");

   const handleSubmite=(event)=>{
    event.preventDefault();
    //    console.log("",name,email,msg)
        const {data } = axios.post('/getstart',{
            name,email,msg
        })
        setName("");
        setEmail("");
        setMsg("");
        alert("i will get in tuch")
}

        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Quick Connect</h1>

                            <Form>
                                <Form.Group>
                                    <Form.Label className="serviceDescription" >Name</Form.Label>
                                    <Form.Control value={name} type="text" onChange={(e)=>setName(e.target.value)} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label className="serviceDescription" >Email Address</Form.Label>
                                    <Form.Control value={email} type="text" onChange={(e)=>setEmail(e.target.value)} />
                                    {/* <Form.Control value={email} type="email" onChange{(e)=>setEmail(e.target.value)} /> */}
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label  className="serviceDescription" >Message</Form.Label>
                                    <Form.Control value={msg}  as="textarea" rows="3" onChange={(e)=>setMsg(e.target.value)} />
                                </Form.Group>


                                <Button onClick={handleSubmite} variant="primary"  type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now</h1>  
                            <h1 className="serviceName">Address</h1>
                            <p className="serviceDescription" >Ibrahimpur, belobo, Narsingdie</p>
                            <p className="serviceDescription" > <FontAwesomeIcon  icon={faEnvelope} />arefintalukder5@gmail.com</p>
                            <p className="serviceDescription" > <FontAwesomeIcon  icon={faPhone} /> +8801740921290</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );

}

export default ContactSection;