import React from 'react';
import Header_main from '../header/header';
import About_content from '../about_content/about_content';
import Contactus_main_shared from '../../contact_us/contactus';
const About = () => {
    return (
        <main>
            <Header_main/>
            <About_content/>
            <Contactus_main_shared/>
        </main>
    );
};

export default About;