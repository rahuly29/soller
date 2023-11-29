import React from 'react'
import "./casestudy.css"
import { Slide } from 'react-awesome-reveal'

const CaseStudy = () => {
    return (
        <section id='caseStudy' className=' position-relative overflow-visible'>
            <div className='case-bg '>
                <div className="container m-auto ">
                    <div className="row ">
                        <div className="col-12 col-lg-5">
                            <Slide>
                                <img src="/assets/images/case-container.svg" alt="" className='img-fluid py-5' />
                            </Slide>
                        </div>
                        <div className='col-12 col-lg-5 m-lg-5 pt-lg-5'>
                            <div className=''>
                                <Slide direction='right'>
                                    <h6 className='caption text-center text-lg-start'>Case Studies</h6>
                                    <h3 className='service-heading text-center text-lg-start'>Check how our systems have helped others</h3>
                                    <p className='service-para text-center text-lg-start'>
                                        Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis<br /> semper id sit ornare maecenas lectus sed.
                                    </p>
                                    <a href='#' className=' text-decoration-none d-none d-lg-inline-block'>
                                        <span className='btn-heading px-1'> Request a Quote </span>
                                        <span className='px-1'><img src="/assets/icons/rightArrow.svg" alt="" className='case-arrow' /></span>
                                    </a>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudy