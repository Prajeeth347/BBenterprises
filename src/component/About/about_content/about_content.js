import React from 'react';
import about_pc1 from '../../../Assets/about_pic_1.png'
import about_pc2 from '../../../Assets/about_pic_2.png'
import './about_content.css'
import current_operate_1 from '../../../Assets/current_operate_1.png'
import current_operate_2 from '../../../Assets/current_operate_2.png'

const about_content = () => {
    return (
        <div className='about_content'>
            <div className='about_pictures'>
            <img src = {about_pc1}/>
            <img src = {about_pc2}/>
            </div>
            <div className='about_main_content'>
                <h2>OUR MISSION</h2>
                <p>"That doesn’t matter! The difficulties are there for the pleasure of surmounting them. Go forward, keep confidence and all will be well."</p>
                <h2>OUR GOAL</h2>
                <p>Lorem ipsum dolor sit amet, no vis integre malorum. In eirmod rationibus duo, alii minim elitr ne usu. Ea copiosae ocurreret mea, habemus mediocrem dissentias ad qui. Tollit impedit id has, usu velit laudem ea. Nam dolor omnes ad. Eius bonorum ceteros qui ea.
</p>
                <h2>OUR VISION</h2>
                <p>“We should do business at a profit preferably, and at a loss if we must" - Arthashastra-</p>
                <p>This teaching of Arthashastra forms the core principle of business at BB Enterprises. Our business principles revolves around this value system ensuring fairness in business, prompt services, ethically handling of business resulting in joy for our principals, customers and business partners alike.</p>
                <h2>CURRENTLY WE OPERATE IN</h2>
                <img src = {current_operate_1}/>
                <img src = {current_operate_2}/>
            </div>
        </div>
        );
};

export default about_content;