import React from 'react';
import './Clients.css'
import allclients from '../../../Assets/clients_main_image.png'
const Clients_main = () => {
    return (
            <div className='main_wrapper_clients_main'>
                <div className='clients_main_title'><h1>Clients</h1></div>
                <div className='clients_content_main'>
                    <img src={allclients}/>
                </div>
                <div className='mob_clients_main'>
                <img src={allclients}/>
                </div>
            </div>
    );
};

export default Clients_main;