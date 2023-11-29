import React from 'react'
import "./power.css"
import Button from '../../../components/button/Button'
import { Slide,JackInTheBox } from 'react-awesome-reveal'


const Power = () => {


    return (
        <section id='power' className='overflow-hidden'>
            <div className='power-bg'>
                <div className="row ms-lg-5 position-relative">
                    <div className="col-lg-8 mt-5 mb-3">
                        <Slide>
                            <h6 className='power-caption text-center text-lg-start'>
                                Get the Sun to power your home
                            </h6>
                            <h3 className='power-heading text-white text-center text-lg-start'>
                                All the power that you need for your house is now available
                            </h3>
                        </Slide>
                    </div>
                    <div className="col mt-lg-5 pt-lg-5 text-center">
                        <Button>
                            <span className='hero-btn-heading px-1 customColor'> Request a Quote </span>
                            <span className='px-1'><img src="/assets/icons/rightArrow.svg" alt="" className='arrow' /></span>
                        </Button>
                        <Slide>
                            <p className="power-subtitle mt-3 text-center text-white">
                                Egestas fringilla aliquam leo
                            </p>
                        </Slide>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className=" p-3 ms-auto ">
                                    <JackInTheBox >
                                        <img src="/assets/images/Macbook.svg" alt="" className='img-fluid  w-100' />
                                    </JackInTheBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Power