import React from 'react';
import './SecondPage.css';
import {PlayBtn} from '../Image'
import 'aos/dist/aos.css'

const SecondPage = () => {
  return (
    <>
      <section className='Secondpage'>
        <div className="container">
          <div className="whyUs col-12 col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <p>WHY <span>G</span>ola ?</p>
          </div>
          <div className="answer col-12 col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            Learn more about our car sharing platform in the light demo version or get in the driver's seat and get paid.
          </div>
          <div className="video col-12 col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mt-4">
              <div data-aos="fade-right" className=" videoSection col-4 col-sm-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 align-items-center d-flex">
                <div className="col-4 col-sm-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 ">
                  <div className="PlayBtn">
                    <img src={PlayBtn} alt="Play Button"  style={{width:'20px', height:'auto'}}/>
                  </div></div>
                  <div className="vid-text col-7 col-sm-7 col-sm-7 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                      video - click to play
                  </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SecondPage