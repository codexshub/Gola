import React from 'react';
import './Home.css';
import { HomeImg2, GooglePlay, Apple } from '../Image'
import 'aos/dist/aos.css';

const Home = () => {

  return (
    <>
      <div id='home' className="mainHome">
        <div className="container">
          <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 align-items-center">
            <div className="heading col-12 col-sm-12 col-md-12 col-lg-8 col-xl-7 col-xxl-6">
              <div className="Htext">
                <h1><span>G</span>ola</h1>
                <div className="subTitle">
                  {/* Book <span>C</span>ars near<br />
                  you Instantly. */}
                  Drive Your <span>Dreams.</span><br/>
                  Rent. Drive. Explore.
                  
                </div>
              </div>
              <div className="FirstPara mt-4">
                <p>Get Ready for a Memorable Journey with Us, Your Journey, Our Wheels.</p>
              </div>
              <div className="downloadTab mt-5 d-flex">
                <div className="apple">
                 
                  <div className="store col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 align-items-center d-flex">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 justify-content-end d-flex"><img src={Apple} alt="GooglePlay" style={{ width: '30px', height: 'auto' }} /></div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center" style={{ color: '#fff' }}>App Store</div>
                  </div>
                
                </div>
                <div className="google">
                
                  <div className="store col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 align-items-center d-flex">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 justify-content-end d-flex"><img src={GooglePlay} alt="GooglePlay" style={{ width: '30px', height: 'auto' }} /></div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center" style={{ color: '#fff' }}>Google Play</div>
 
                  </div>
                </div>
              </div>
            </div>
            <div className="HomeImage col-6 col-sm-6 col-md-6 col-lg-4 col-xl-5 col-xxl-6 d-flex justify-content-end">
              <div className="MobileImg "><img data-aos="fade-up" className='img-responsive' src={HomeImg2} alt="HomeImage" style={{ width: '350px', height: 'auto' }} /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home