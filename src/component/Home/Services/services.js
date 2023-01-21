import React from 'react';
import './services.css'
import service_1 from '../../../Assets/service_1.png'
import service_2 from '../../../Assets/service_2.png'
const Services_main = () => {
    return (
            <div className='main_wrapper_services_main'>
                <div className='services_main_title'><h1>Our Services</h1></div>
                <div className='services_main_all_wrap'>
                <div className='services_main_odd'>
                    <div className='services_odd_content_main'>
                    <h2>DISTRIBUTION AND SUPER STOCKLIST</h2>
                    <p>With us, you get hassle-free queueing of stocks with complete tracking visibility & cost-saving solutions both physically and systematically
all the way to a seamless & synchronized delivery with assured quality supported by strong back-office operations. Let us take care of all your shipment needs - from start to finish!</p>
                    </div>
                    <div className='services_odd_image_main'>
                        <img src= {service_1}></img>
                    </div>
                </div>

                <div className='services_main_even'>
                <div className='services_even_image_main'>
                        <img src= {service_2}></img>
                    </div>
                    <div className='services_even_content_main'>
                    <h2>CFA Operations (Carrying and Forwarding Agent)</h2>
                    <p>Understanding the complexities of logistics can be daunting. Our professionals deliver an unmatched experience for your warehousing, storage methodology, shipping, end-to-end logistics & forwarding services. With us, you get hassle-free logistic services, complete tracking visibility & cost-saving solutions with assured quality supported by robust back-office operations. Let us take care of all your shipment needs - from start to finish!</p>
                    </div>
                </div>


                <div className='services_main_odd_mobile'>
                <div className='services_odd_image_main'>
                        <img src= {service_1}></img>
                    </div>
                    <div className='services_odd_content_main'>
                    <h2>DISTRIBUTION AND SUPER STOCKLIST</h2>
                    <p>With us, you get hassle-free queueing of stocks with complete tracking visibility & cost-saving solutions both physically and systematically
all the way to a seamless & synchronized delivery with assured quality supported by strong back-office operations. Let us take care of all your shipment needs - from start to finish!</p>
                    </div>
                </div>

                <div className='services_main_odd_mobile'>
                <div className='services_odd_image_main'>
                        <img src= {service_2}></img>
                    </div>
                    <div className='services_odd_content_main'>
                    <h2>CFA Operations (Carrying and Forwarding Agent)</h2>
                    <p>Understanding the complexities of logistics can be daunting. Our professionals deliver an unmatched experience for your warehousing, storage methodology, shipping, end-to-end logistics & forwarding services. With us, you get hassle-free logistic services, complete tracking visibility & cost-saving solutions with assured quality supported by robust back-office operations. Let us take care of all your shipment needs - from start to finish!</p>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default Services_main;