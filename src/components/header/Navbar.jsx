import React from 'react';
import "./navbar.css";
import Button from '../button/Button';
import { Slide } from 'react-awesome-reveal';

const Navbar = () => {
    return (
        <nav className="navbar position-absolute w-100 navbar-expand-lg bg-transparent ps-lg-5 mt-lg-3 z-1">
            <div className="container-fluid p-lg-0 px-1">
                <Slide>
                    <a className="custom-navbar-brand" href="#">Soller</a>
                </Slide>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse px-5 align-items-center" id="navbarSupportedContent">
                    <Slide>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="custom-link nav-link" href='#'>Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="custom-link nav-link" href='#'>Solution</a>
                            </li>
                            <li className="nav-item">
                                <a className="custom-link nav-link" href='#'>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="custom-link nav-link" href='#'>Configure</a>
                            </li>
                        </ul>
                    </Slide>
                    <div className='d-flex flex-column flex-lg-row align-items-center gap-5'>
                        <a href="#" className='phone-number d-flex gap-3 align-items-center justify-content-center'>
                            <Slide>
                                <img src="/assets/icons/headphone.svg" alt="" className='d-none d-lg-block' />
                                <span>555 818 282</span>
                            </Slide>
                        </a>
                        <Button>
                            <span className='btn-heading customColor'> Request a Quote </span>
                            <span className='px-2'><img src="/assets/icons/rightArrow.svg" alt="" className='arrow' /></span>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
