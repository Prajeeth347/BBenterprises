import React from 'react';
import KeenSlider from 'keen-slider'

export default ({ children }) => {
  const sliderRef = React.useRef(null);
  React.useEffect(() => {
    const slider = new KeenSlider(sliderRef.current, {touchControl: false, loop:true}) 
    const interval = setInterval(slider.next, 2000)
    return () => {
      slider.destroy() 
      clearInterval(interval)
    };
  })
  return  <div className="slider-wrapper">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__track">
              {children}
              </div>
            </div>
          </div>
};
