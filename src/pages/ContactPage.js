import React, {Component,Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact"/>
                <PageTop pagetitle="Contact" />
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;