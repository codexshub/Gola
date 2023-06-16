import React from 'react';
import './Footer.css';
import Line from '../Under-Line/Line';
import Socialmedia from './Socialmedia';
import {Link} from 'react-scroll';

const Footer = () => {
    return (
        <>
            <section className='FooterSection'>
                <div className="container">
                    <div id='fifthrow' className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 justify-content-center">
                        
                        <div className="FooterBrand col-3 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2">
                        <Link to="home"> 
                            <h1><span>G</span>ola</h1>
                            <p>Drive Your <span>Dreams</span></p></Link>
                        </div>
                        <div id='PrivacyList-1' className="PrivacyList col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                            <div className="List">
                                <li>Partnership</li>
                                <li>About us</li>
                                <li>Blog</li>
                                <li>Projects</li></div>
                        </div>
                        <div id='PrivacyList-2' className="PrivacyList col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                            <div className="List"><li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Cookie Policy</li>
                                <li>Accessibility options</li></div>
                        </div>
                        <div className="PrivacyList col-2 col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                            <div className="List"><li>Customer Support</li>
                                <li>Docs</li>
                                <li>Careers</li>
                                <li>FAQs</li>
                            </div>
                        </div>
                        <div className="email-input col-3 col-sm-3 col-md-3 col-lg-3 col-xl-4 col-xxl-4">
                            <div className="email-section col-10 col-sm-10 col-md-10 col-lg-8 col-xl-10 col-xxl-10 d-flex justify-content-end">
                                <input type="text" placeholder='Your email' className='' />
                                <div style={{marginRight:'4px'}} className=' d-flex align-items-center justify-content-center'>
                                <div className="email-sendbtn">
                                    <span class="material-symbols-outlined">
                                        keyboard_return
                                    </span>
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Line />
                    <Socialmedia/>
                    <div className=" col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="copyright d-flex justify-content-center">
                    Copyright © 2023, Gola pvt. ltd. All rights reserved.

                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Footer