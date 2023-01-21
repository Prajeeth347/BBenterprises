import React from "react";
import './contactus.css'
import logo from '../../Assets/logo_full.png'
import ModalImage from "react-modal-image";
import storyimg from '../../Assets/ourStoryMain.png'
import ourStory from '../../Assets/OurStory.png'

const Contactus_main_shared = () => {
    return (
        <div id="contactus" className="contactus_main_shared">
                    <div className="contactu_bottom_logo">
                        <img src={logo}/>
                    </div>
                    <div classname="contactus_main_company">
                        <div classname="contactus_main_company_title"><h2>Company</h2></div>
                        <div classname="contactus_main_company_content">
                            <a href="/about">About us</a>
                             <ModalImage
                                large={storyimg}
                                smallSrcSet="Our Story"
                                small={ourStory}
                                >
                                </ModalImage>
                            <a href="">Privacy Policy</a>
                            <a href="/">Home</a>
                            <a href="/services">Services</a>
                        </div>
                    </div>
                    <div className="contactus_main_address">
                    <div classname="contactus_main_address_title"><h2>BB Enterprises</h2></div>
                    <p>
                    11/3 Ganganagar Katakhal,<br/>
                    Madhyamgram, North 24 Pargans<br/>
                    Kolkata, West Bengal-700132
                    </p>
                    </div>
                    <div className="contactus_main_Social">
                    <div classname="contactus_main_social_title"><h2>Social</h2></div>
                    <a href="">Contact Us</a>
                    <a href="">Facebook</a>
                    <a href="">Twitter</a>
                    <a href="">Instagram</a>
                    <a href="">Linkedin</a>
                    </div>
        </div>
    );}

    export default Contactus_main_shared;
