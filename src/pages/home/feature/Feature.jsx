import React from 'react'
import "./feature.css"
import Card from '../../../components/card/Card'
import { Flip, Hinge, Slide } from 'react-awesome-reveal'

const Feature = () => {
    return (
        <section id='feature'>
            <div className="row m-0 pt-3">
                <div className="col-12 col-lg-7 m-auto mt-5 pt-4 ms-lg-5">
                    <div className='d-flex flex-column'>
                        <Slide>
                            <h6 className='caption text-center text-lg-start'>System features</h6>
                            <h3 className='service-heading mb-4 text-center text-lg-start'>Powerful features</h3>
                            <p className='service-para text-center text-lg-start'>
                                Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis<br /> semper id sit ornare maecenas lectus sed.
                            </p>
                        </Slide>
                    </div>
                    <div className="row mt-3 text-center text-lg-start">
                        {/* First row with two components */}
                        <div className="col g-4">
                            <Slide>
                                <Card
                                    imageUrl="/assets/icons/connection.svg"
                                    title="Erat sit"
                                    description="Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
                                />
                            </Slide>
                        </div>
                        <div className="col g-4">
                            <Slide>
                                <Card
                                    imageUrl="/assets/icons/like.svg"
                                    title="Ullamcorper arcu"
                                    description="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
                                />
                            </Slide>
                        </div>
                    </div>

                    <div className="row text-center text-lg-start">
                        {/* Second row with two components */}
                        <div className="col g-4">
                            <Slide>
                                <Card
                                    imageUrl="/assets/icons/send.svg"
                                    title="Et pellentesque"
                                    description="Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla."
                                />
                            </Slide>
                        </div>
                        <div className="col g-4">
                            <Slide>
                                <Card
                                    imageUrl="/assets/icons/box.svg"
                                    title="Amet egestas"
                                    description="Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."
                                />
                            </Slide>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-4 feature-bg '>
                    <Slide delay={500} direction="right">
                        <img src="/assets/images/Mobile-right.png" alt="" className='img-fluid ms-auto pt-5' />
                    </Slide>
                </div>
            </div>
        </section>
    )
}

export default Feature