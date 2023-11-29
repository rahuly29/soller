// import React from 'react'
// import "./hero.css"
// import Navbar from '../../../components/header/Navbar'
// import Button from '../../../components/button/Button'


// const Hero = () => {
//     return (
//         <section id='hero'>
//                 <Navbar />
//             <div className="container-fluid">
//                 <div className='row '>
//                     <div className="col mt-5 pt-4 ms-2 ps-5">
//                         <h2 className='hero-heading mt-5 mb-0 '>Get the Sun to Power Your Home</h2>
//                         <p className='hero-para  py-4'>
//                             Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
//                         </p>
//                         <div className=''>
//                             <Button>
//                                 <span className='hero-btn-heading px-1'> Request a Quote </span>
//                                 <span className='px-1'><img src="/assets/icons/rightArrow.svg" alt="" /></span>
//                             </Button>
//                         </div>
//                         <div className=' pt-5 mt-4'>
//                             <p className='hero-second-para'>
//                                 “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
//                             </p>
//                             <div className='d-flex justify-content-start align-items-center'>
//                                 <img src="/assets/images/User Thumb.svg" alt="" className='d-inline' />
//                                 <div className='ms-3'>
//                                     <p className='user-name pt-3'>Rwanda Melflor <br />
//                                         <span>zerowaste.com</span>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col p-0">
//                         <img src="/assets/images/hero-image.jpg" alt="" className='img-fluid w-100 h-100' />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Hero

import React from 'react';
import "./hero.css";
import Navbar from '../../../components/header/Navbar';
import Button from '../../../components/button/Button';
import { Bounce, Fade, Slide, Zoom } from 'react-awesome-reveal';

const Hero = () => {
  return (
    <section id='hero'>
      <Navbar />
      <div className="container-fluid">
        <div className='row'>
          <div className="col-md-6 col-lg-6 order-md-last p-0">
            <Zoom delay={500}>
              <img src="/assets/images/hero-desktop.png" alt="" className='img-fluid w-100 h-100 d-none d-lg-block' />
              <img src="/assets/images/hero-mobile-bg.png" alt="" className='img-fluid d-block d-lg-none' />
            </Zoom>
          </div>
          <div className="col-md-6 col-lg-6 mt-5 pt-md-4 ps-md-5 order-md-first">
            <Slide>
              <h2 className='hero-heading mt-md-5 mb-0 text-center text-lg-start'>Get the Sun to Power Your Home</h2>
              <p className='hero-para py-4 text-center text-lg-start'>
                Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
              </p>
            </Slide>
            <div className=' text-center text-lg-start'>
              <Button>
                <span className='hero-btn-heading px-1 customColor'> Request a Quote </span>
                <span className='px-1'><img src="/assets/icons/rightArrow.svg" alt="" className='arrow' /></span>
              </Button>
            </div>
            <div className='pt-5 pt-lg-5 mt-4 mt-lg-4'>
              <Slide>
                <p className='hero-second-para'>
                  “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
                </p>
              </Slide>
              <div className='d-flex justify-content-start align-items-center'>
                <Slide>
                  <img src="/assets/images/User Thumb.svg" alt="" className='d-inline' />
                </Slide>
                <div className='ms-3'>
                  <Slide>
                    <p className='user-name pt-3'>Rwanda Melflor <br />
                      <span>zerowaste.com</span>
                    </p>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
