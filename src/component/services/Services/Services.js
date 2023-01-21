import React from 'react';
import Header_main from '../header/header';
import Services_content from '../Services_content/Services_content';
import Contactus_main_shared from '../../contact_us/contactus';

const Services = () => {
    return (
        <main>
            <Header_main/>
            <Services_content/>
            <Contactus_main_shared/>
        </main>
    );
};

export default Services;