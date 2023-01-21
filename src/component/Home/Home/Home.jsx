import React from 'react';
import Header_main from '../header/header';
import Services_main from '../Services/services';
import Journey_main_page from '../journey/journey';
import Testimonials_main from '../Testimonials/Testimonials'
import Clients_main from '../Clients/Clients';
import Contactus_main_shared from '../../contact_us/contactus';
const Home = () => {
    return (
        <main>
            <Header_main/>
            <Services_main/>
            <Journey_main_page/>
            <Testimonials_main/>
            <Clients_main/>
            <Contactus_main_shared/>
        </main>
    );
};

export default Home;