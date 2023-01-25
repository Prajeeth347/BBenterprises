import React from 'react';
import './Services_content.css'

export default ({ color, text }) => {

  return   <div className="keen-slider__slide">
                <div  className="slide">
                  <div>
                      <img src={color}/>
                    </div>
                </div>
              </div>
};
