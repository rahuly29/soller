import React from 'react';
import "./service.css";
import Card from '../../../components/card/Card';
import { Bounce, Slide } from 'react-awesome-reveal';

const Service = () => {
    return (
        <section id='service'>
            <div className="row m-0 pt-3 position-relative">
                <div className='col-12 col-lg-5 mb-4 mb-lg-0 service-bg ms-auto order-last order-lg-first'>
                    <Slide delay={500}>
                        <img src="/assets/images/Mobile-left.png" alt="" className='img-fluid ms-auto ms-lg-5 pt-5 mt-5' />
                    </Slide>
                </div>
                <div className="col-12 col-lg-7 m-auto ps-lg-5">
                    <div className='d-flex flex-column'>
                        <Slide direction='right' delay={200}>
                            <h6 className='caption text-center text-lg-start'>Services</h6>
                            <h3 className='service-heading mb-4 text-center text-lg-start'>Personalized services</h3>
                            <p className='service-para text-center text-lg-start'>
                                Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis<br /> semper id sit ornare maecenas lectus sed.
                            </p>
                        </Slide>
                    </div>
                    <div className="row mt-3 text-center text-lg-start">
                        {/* First row with two components */}
                        <div className="col-6 col-lg-6 mb-4">
                            <Slide direction='right' delay={200}>
                                <Card
                                    imageUrl="/assets/icons/van.svg"
                                    title="Et mauris"
                                    description="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
                                />
                            </Slide>
                        </div>
                        <div className="col-6 col-lg-6 mb-4">
                            <Slide direction='right' delay={200}>
                                <Card
                                    imageUrl="/assets/icons/cup.svg"
                                    title="Eget sit"
                                    description="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
                                />
                            </Slide>
                        </div>
                    </div>
                    <div className="row text-center text-lg-start">
                        {/* Second row with two components */}
                        <div className="col-6 col-lg-6 mb-4">
                            <Slide direction='right' delay={200}>
                                <Card
                                    imageUrl="/assets/icons/man.svg"
                                    title="Imperdiet pellentesque"
                                    description="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla."
                                />
                            </Slide>
                        </div>
                        <div className="col-6 col-lg-6 mb-4">
                            <Slide direction='right' delay={200}>
                                <Card
                                    imageUrl="/assets/icons/piggybank.svg"
                                    title="Non libero"
                                    description="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."
                                />
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
