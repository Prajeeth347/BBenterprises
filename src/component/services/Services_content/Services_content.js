import React from 'react';
import service_pic_1 from '../../../Assets/service_service_1.png'
import service_pic_2 from '../../../Assets/service_service_2.png'
import './Services_content.css'
import current_operate_1 from '../../../Assets/current_operate_1.png'
import current_operate_2 from '../../../Assets/current_operate_2.png'
import one from '../../../Assets/gallery/one.png'
import two from '../../../Assets/gallery/two.png'
import three from '../../../Assets/gallery/three.png'
import four from '../../../Assets/gallery/four.png'
import five from '../../../Assets/gallery/five.png'
import six from '../../../Assets/gallery/six.png'
import seven from '../../../Assets/gallery/seven.png'
import eight from '../../../Assets/gallery/eight.png'
import nine from '../../../Assets/gallery/nine.png'
import ten from '../../../Assets/gallery/ten.png'
import ImageSlider, { Slide } from "react-auto-image-slider";

const Services_content = () => {
    return (
        <div className='services_content'>
            
            <div className='services_main_content'>
                <h2>CFA OPERATIONS <br/>(Carrying and Forwarding Agent)</h2>
                <div className='services_pictures'>
                    <img src={service_pic_1}/>
                </div>
                <p>
                Our CFA operations includes handling of stocks, inventory management, warehousing, dispatches, maintaining of statutory compliances for Brostek batteries and Mesha Energy Solutions for their operations in entire Eastern India.
                <br/>
                Battery servicing and complaint handling is coordinated between end customer and parent company with TAT strictly adhered to. Time bound and superior quality services are delivered seamlessly to achieve customer satisfaction in the market.
                <br/>
                All matters related to logistic movement like transportation, warehousing, back office operations and regulatory compliances are delivered with highest standard to our clients for whom we operate as their CFA.
                </p>


                <h2>Distribution and Superstockist </h2>
                <div className='services_pictures'>
                    <img src={service_pic_2}/>
                </div>
                <p>
                We are superstockist of Nissanol - Motoforce brand of all categories of lubricants, viz. Automotive and Industrial sectors in West Bengal and Uno Minda 2W batteries in four districts of Southern Bengal for retail distribution.<br/>
                Primarily handling setting up distribution houses across the state and their channels set up down the line backed by professionals and domain expertise services and thereby make sure the business targets of the companies are met with assured growth.<br/>
                We are also distributors of Daramic separators in Eastern India battery
                manufacturers barring Kolkata location.<br/>
                Attending and addressing customer complaints with time bound SLA and providing resolution upto the satisfaction with involvement of company’s R&D department in case need be, is the key service area and strength to win the trust and satisfaction of the clientele we cater to.
                </p>
            </div>
            <div className='blue_text_services'>
                <p>
                All our operations are taken care by competent professionals having core domain expertise in their respective fields majorly in sales, marketing, operations and logistics. <br/>
                Our strong relationship with our principals and our various business partners like logistics provider, local compliance authorities etc. forms the basis of our operational efficiency resulting in ultimate customer satisfaction, both ways.
                <br/>
                Since the entrepreneurs have ventured into business having stint in professional domain gives them the unique edge of having visualized business and it's requirements from both the ends and qualifies them to deliver the best customer satisfaction.
                <br/>
                Our infrastructure is supported by ERP platform and maintained with detailed accounting, internal control, audit and documentation of all transactions and also all legal statutory compliance are taken care of by our experienced staff and vendor services available.<br/>
                Inventory management at our warehouse is maintained systematically to help the distribution be a hassle-free experience.
                </p>
            </div>
            <div className='services_main_content'>
            <h2>Gallery</h2>
            </div>
            <div className='slider_div'>
            <ImageSlider effectDelay={500} autoPlayDelay={2000}>
            <Slide>
                <img alt="img2" src={one} />
            </Slide>
            <Slide>
                <img alt="img2" src={two} />
            </Slide>
            <Slide>
                <img className='slider_image' alt="img2" src={three} />
            </Slide><Slide>
                <img className='slider_image' alt="img2" src={four} />
            </Slide><Slide>
                <img className='slider_image' alt="img2" src={five} />
            </Slide><Slide>
                <img className='slider_image' alt="img2" src={six} />
            </Slide><Slide>
                <img className='slider_image' alt="img2" src={seven} />
            </Slide><Slide>
                <img className='slider_image' alt="img2" src={eight} />
            </Slide><Slide>
                <img className='slider_image' alt="img2" src={nine} />
            </Slide><Slide>
                <img className='slider_image' alt="img2" src={ten} />
            </Slide>
            </ImageSlider>
            </div>
                </div>
        );
};

export default Services_content;