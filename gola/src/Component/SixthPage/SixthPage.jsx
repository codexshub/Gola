import React from 'react';
import './SixthPage.css';
import { GooglePlay, Apple } from '../Image';
import 'aos/dist/aos.css';

const SixthPage = () => {
  return (
    <>
    <section className='SexthPage'>
        <div className="container">
            <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center">
                 <div className="SethHeading col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8  text-center">
                    <h1>Ready to start cruising your city? Download <span>G</span>ola App</h1>
                    <div className="downloadTab justify-content-center mt-5 d-flex">
                <div className="apple">
                 
                  <div data-aos="fade-right" className="store col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 align-items-center d-flex">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 justify-content-end d-flex"><img src={Apple} alt="GooglePlay" style={{ width: '30px', height: 'auto' }} /></div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center" style={{ color: '#fff' }}>App Store</div>
                  </div>
                
                </div>
                <div className="google">
                
                  <div data-aos="fade-left" className="store col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 align-items-center d-flex">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 justify-content-end d-flex"><img src={GooglePlay} alt="GooglePlay" style={{ width: '30px', height: 'auto' }} /></div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center" style={{ color: '#fff' }}>Google Play</div>
 
                  </div>
                </div>
              </div>
                 </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SixthPage