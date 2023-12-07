import React, { useRef, useEffect, useState } from 'react'
import "./harvester.css"
import Button from '../../../components/button/Button'
import HarvestCard from "../../../components/harvestCard/HarvestCard"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Slide } from 'react-awesome-reveal';






const Harvester = () => {

    const [currentProfile, setCurrentProfile] = useState('Jane Cooper');

    const harvesterData = [
        {
            id: 1,
            imageUrl: "/assets/images/thunderstrome.svg",
            description: " Ratione quod, dolor voluptatem vitae sit iure et? Molestias iusto quaerat iure quisquam quis aliquid et dolorem sequi nemo nihil! Quaerat, pariatur Assumenda provident officiis",
            profileImage: "/assets/images/janeCooper.svg",
            name: "Jane Cooper",
            subtitle: "10KWh"
        },
        {
            id: 2,
            imageUrl: "/assets/images/thunderstrome.svg",
            description: " Ratione quod, dolor voluptatem vitae sit iure et? Molestias iusto quaerat iure quisquam quis aliquid et dolorem sequi nemo nihil! Quaerat, pariatur Assumenda provident officiis",
            profileImage: "/assets/images/RalphEdwards.svg",
            name: "Ralph Edward",
            subtitle: "10KWh"
        },
        {
            id: 3,
            imageUrl: "/assets/images/thunderstrome.svg",
            description: " Ratione quod, dolor voluptatem vitae sit iure et? Molestias iusto quaerat iure quisquam quis aliquid et dolorem sequi nemo nihil! Quaerat, pariatur Assumenda provident officiis",
            profileImage: "/assets/images/CourtneyHenry.svg",
            name: "Courtney Henry",
            subtitle: "10KWh"
        },
        {
            id: 4,
            imageUrl: "/assets/images/thunderstrome.svg",
            description: " Ratione quod, dolor voluptatem vitae sit iure et? Molestias iusto quaerat iure quisquam quis aliquid et dolorem sequi nemo nihil! Quaerat, pariatur Assumenda provident officiis",
            profileImage: "/assets/images/Cameron.svg",
            name: "Cameron",
            subtitle: "10KWh"
        },
        {
            id: 5,
            imageUrl: "/assets/images/thunderstrome.svg",
            description: " Ratione quod, dolor voluptatem vitae sit iure et? Molestias iusto quaerat iure quisquam quis aliquid et dolorem sequi nemo nihil! Quaerat, pariatur Assumenda provident officiis",
            profileImage: "/assets/images/janeCooper.svg",
            name: "Jane Cooper",
            subtitle: "10KWh"
        },
        {
            id: 6,
            imageUrl: "/assets/images/thunderstrome.svg",
            description: " Ratione quod, dolor voluptatem vitae sit iure et? Molestias iusto quaerat iure quisquam quis aliquid et dolorem sequi nemo nihil! Quaerat, pariatur Assumenda provident officiis",
            profileImage: "/assets/images/janeCooper.svg",
            name: "Jane Cooper",
            subtitle: "10KWh"
        },


    ];


    const splideRef = useRef(null);

    useEffect(() => {
        const splideInstance = splideRef.current?.splide;

        if (splideInstance) {
            const handleSlideChange = (splide, newIndex) => {
                console.log('Slide changed to index:', newIndex);
                setCurrentProfile(harvesterData[newIndex]?.name || 'Jane Cooper');
            };

            splideInstance.on('moved', handleSlideChange);
        }

    }, [splideRef, harvesterData]);


    const goToPrevSlide = () => {
        if (splideRef.current && splideRef.current.splide) {
            splideRef.current.splide.go('-');
        }
    };


    const goToNextSlide = () => {
        if (splideRef.current && splideRef.current.splide) {
            splideRef.current.splide.go('+');
        }
    };



    return (
        <section id='harvester' className=' overflow-hidden'>
            <div className='harvester-bg'>
                <div className="row mt-5 pt-5 ms-lg-5">
                    <div className="col mt-5">
                        <div className='m-auto'>
                            <Slide triggerOnce>
                                <h6 className='harvest-caption text-center text-lg-start'>Join other Sun harvester</h6>
                                <h3 className='service-heading mb-4 text-center text-lg-start text-white'>Make something awesome</h3>
                                <p className='service-para text-center text-lg-start text-white'>
                                    Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis<br /> semper id sit ornare maecenas lectus sed.
                                </p>
                            </Slide>
                        </div>
                    </div>
                    <div className='col-lg-4 mt-lg-5 pt-3'>
                        <div className=" d-flex justify-content-center align-items-center ">
                            <Button>
                                <span className='hero-btn-heading px-1 customColor'> Request a Quote </span>
                                <span className='px-1'><img src="/assets/icons/rightArrow.svg" alt="" className='arrow' /></span>
                            </Button>
                        </div>
                    </div>
                </div>


                <img src="/assets/images/Vector.png" alt="" className='img-fluid h-bg position-absolute d-none d-lg-block' />


                <div className="w-100 mt-5 z-1">
                    <div className=' overflow-hidden'>
                        <Splide
                            ref={splideRef}
                            options={
                                {
                                    type: '',
                                    arrows: false,
                                    pagination: false,
                                    perPage: 3.5,
                                    perMove: 1,
                                    gap: '.6rem',
                                    focus: 0,
                                    breakpoints: {
                                        320: {
                                            perPage: 1,
                                            focus: 0,
                                        },
                                        768: {
                                            perPage: 3,
                                            focus: 'center',
                                            gap: '1rem'
                                        },
                                        576: {
                                            perPage: 1,
                                        },
                                    },
                                
                                }
                            }
                        >
                            {harvesterData.map((data, index) => (
                                <SplideSlide key={data.id} className={`ps-2 ps-lg-5 p-4 ${index === splideRef.current?.splide.index ? 'active-slide' : ''}`}>
                                    <div className={index === 1 ? 'active-content' : ''} >
                                        <HarvestCard
                                            imageUrl={data.imageUrl}
                                            description={data.description}
                                            profileImage={data.profileImage}
                                            name={data.name}
                                            subtitle={data.subtitle}
                                        />
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                </div>

                <div className="col ms-lg-4 py-5 py-lg-5 position-relative z-1">
                    <div className='text-center text-lg-start'>
                        <span className='btn z-1' onClick={goToPrevSlide}><img src="/assets/images/Button-left.svg" alt="" /></span>
                        <span className='btn z-1' onClick={goToNextSlide}><img src="/assets/images/Button-right.svg" alt="" /></span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Harvester