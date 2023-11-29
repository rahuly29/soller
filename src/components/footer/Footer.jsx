import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='d-flex justify-content-center align-items-center bg-white'>
      <div className="container py-2">
        <div className='row align-items-center py-3'>
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <div className='d-flex flex-column flex-sm-row align-items-center gap-3'>
              <div>
                <span>
                  <img className='footer-logo' src="/assets/icons/footer-logo.svg" alt="footer logo" />
                </span>
              </div>
              <div>
                <p className='footer-copyright mb-0'>@ 2023 Soller, Inc. All rights reserved.</p>
              </div>
            </div>
          </div>
          <div className='col-11 col-md-6 '>
            <ul className='list-unstyled d-flex justify-content-end gap-5 mb-0'>
              <li>
                <a className='footer-link' href="#">Term</a>
              </li>
              <li>
                <a className='footer-link' href="#">Privacy</a>
              </li>
              <li>
                <a className='footer-link' href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

