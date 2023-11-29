import React from 'react';
import "./waste.css"
import { Bounce } from 'react-awesome-reveal';

const Waste = () => {
  return (
    <section id='waste' className='mt-5'>
      <div className='waste-bg'>
        <div className='d-flex flex-column  justify-content-center align-items-center'>
          <div className='d-flex flex-column justify-content-center align-items-center text-center text-lg-center'>
            <Slide fraction={1}>
            <h6 className='caption'>No more waste</h6>
            <h3 className='waste-heading'>Pick the sun</h3>
            <p className='waste-para'>
              Et pulvinar nec interdum integer id urna molestie porta nullam.
              A, donec ornare sed turpis pulvinar<br/> purus maecenas quam a.
              Erat porttitor pharetra sed in mauris elementum sollicitudin.
            </p>
            </Slide>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
            <Bounce>
            <img src="/assets/images/Desktop.png" alt="" className='img-fluid d-none d-lg-block'/>
            <img src="/assets/images/Mobile.png" alt="" className='img-fluid d-block d-lg-none mobileWaste '/>
            </Bounce>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Waste