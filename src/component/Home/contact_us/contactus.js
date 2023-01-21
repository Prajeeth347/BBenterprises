import React from 'react';
import './contactus.css'
import nissanol from '../../../Assets/nissanol.png'
import motoforce from '../../../Assets/motoforce.png'
import brostek from '../../../Assets/BROSTEK.png'
import unomedia from '../../../Assets/unomedia.png'
import daramic from '../../../Assets/daramic.png'
const contactus_main = () => {
    return (
            <div className='main_wrapper_clients_main'>
                <div className='clients_main_title'><h1>Clients</h1></div>
                <div className='clients_content_main'>
                    <div className='first_main_wrap_content'>
                    <div className='clients_first_main'>
                    <img src={nissanol}/>

                    <div class = "vertical"></div>

                        <div className='motoforce'>
                    
                    <p>Government Approved Company</p>
                    <img src={motoforce}/>
                        </div>
                        </div>
                    </div>
                    <div className='clients_second_main'>
                    <img src={brostek}/>
                    <img src={unomedia}/>
                    <img src={daramic}/>
                    </div>
                    
                </div>
                <div className='mob_clients_main'>
                <img src={nissanol}/>
                <p>Government Approved Company</p>
                <img src={motoforce}/>
                <img src={brostek}/>
                <img src={unomedia}/>
                <img src={daramic}/>
                </div>
            </div>
    );
};

export default contactus_main;