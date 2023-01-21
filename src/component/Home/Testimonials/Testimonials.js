import React from 'react';
import './Testimonials.css'
import service_1 from '../../../Assets/service_1.png'
import service_2 from '../../../Assets/service_2.png'
import mesha from '../../../Assets/meesha.png'
const Testimonials_main = () => {
    return (
            <div className='main_wrapper_Testimonials_main'>
                <div className='Testimonials_main_title'><h1>Testimonials</h1></div>
                <div className='testi_content_main'>
                        <img src={mesha}/>
                        <p>B B Enterprises has shown excellent adherence to the laid down expectations with minimal costs.
It’s pleasure to have B B Enterprises as our service provider.
</p>
                </div>
                <div className='mob_testi_main'>
                    <p>Lorem ipsum dolor sit amet, no vis integre malorum. In eirmod rationibus duo, alii minim elitr ne usu. Ea copiosae ocurreret mea, habemus mediocrem dissentias ad qui. Tollit impedit id has, usu velit laudem ea. Nam dolor omnes ad. Eius bonorum ceteros qui ea.</p>
                    <p>Lorem ipsum dolor sit amet, no vis integre malorum. In eirmod rationibus duo, alii minim elitr ne usu. Ea copiosae ocurreret mea, habemus mediocrem dissentias ad qui. Tollit impedit id has, usu velit laudem ea. Nam dolor omnes ad. Eius bonorum ceteros qui ea.</p>
                    <p>Lorem ipsum dolor sit amet, no vis integre malorum. In eirmod rationibus duo, alii minim elitr ne usu. Ea copiosae ocurreret mea, habemus mediocrem dissentias ad qui. Tollit impedit id has, usu velit laudem ea. Nam dolor omnes ad. Eius bonorum ceteros qui ea.</p>
                </div>
            </div>
    );
};

export default Testimonials_main;