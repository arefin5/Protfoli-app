import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/AllCourses/AllCourses";
import AllProjects from "../components/AllProjects/AllProjects";
import Footer from "../components/Footer/Footer";
import cv from '../asset/image/ArefinResume.pdf'
import { Container, Row, Col, Button } from "react-bootstrap";

class Resume extends Component {
   
    render() {
        const ume=  <Button  href={cv} download={cv}  variant="primary">Download Resume
                  
        </Button>
        return (
            <Fragment>
                <TopNavigation title="Resume"/>
                <PageTop pagetitle={ume}/>

                <Footer/>
            </Fragment>
        );
    }
}

export default Resume;
