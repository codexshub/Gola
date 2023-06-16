import React from 'react';
import { Linkedin, behance, insta, facebook, github,  } from '../Image';
import 'aos/dist/aos.css';

const Socialmedia = () => {
  return (
    <>
    <div className="socialMedia col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center ">
                        <div className="MediaLinks col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center">
                            <div data-aos="fade-right" className="mediaIcon col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 d-flex justify-content-center align-items-center">
                                <img src={facebook} alt="Github" style={{ width: '30px', height: 'auto' }} />
                            </div>
                            <div data-aos="fade-right" className="mediaIcon col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 d-flex justify-content-center align-items-center">
                                <img src={insta} alt="Github" style={{ width: '30px', height: 'auto' }} />
                            </div>
                            <div className="mediaIcon col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 d-flex justify-content-center align-items-center">
                                <img src={github} alt="Github" style={{ width: '30px', height: 'auto' }} />
                            </div>
                            <div data-aos="fade-left" className="mediaIcon col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 d-flex justify-content-center align-items-center">
                                <img src={Linkedin} alt="Github" style={{ width: '30px', height: 'auto' }} />
                            </div>
                            <div data-aos="fade-left" className="mediaIcon col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 d-flex justify-content-center align-items-center">
                                <img src={behance} alt="Github" style={{ width: '30px', height: 'auto' }} />
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Socialmedia