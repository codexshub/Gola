import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <section style={{ width: '100%', position: 'fixed', zIndex: '1' }}>
                <div className="mainNav">
                    <div className="container">
                        <div className="row col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 align-items-center d-flex">
                            <div className="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                                <div className="BrandName text-start">
                                    <h1><span>G</span>ola</h1>
                                </div>
                            </div>
                            <div className="col-8 col-sm-10 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                <div className="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="list d-flex">
                                        <div className="aboutus"><li>About us</li>
                                        <div className="hoverNav">
                                                <li className='mt-3'>Company Overview</li>
                                                <li>Team and Expertise</li>
                                                <li>Partnerships</li>
                                                <li>Vehicle Maintenance</li>
                                                <li>Recognition</li>
                                                <li className='mb-3'>Future Vision</li>
                                                
                                                </div></div>
                                        <div className="cabs"><li><span>C</span>abs</li>
                                        <div className="hoverNav">
                                                <li className='mt-3'>Auto</li>
                                                <li>Electric</li>
                                                <li>Outstation</li>
                                                <li>Full size Sedan</li>
                                                
                                                <li className='mb-3'>Toofan</li>
                                                </div>
                                        </div>
                                        <div className="shop"><li>Shop</li></div>
                                        <div className="service"><li>Services</li>
                                            <div className="hoverNav">
                                                <li className='mt-3'>vehicals</li>
                                                <li>Reservation</li>
                                                <li>Insurance Coverage</li>
                                                <li>Vehicle Maintenance</li>
                                                <li>Rental Duration</li>
                                                <li>Additional Services</li>
                                                <li className='mb-3'>Area Coverage</li>
                                                </div>
                                                </div>
                                    </div>
                                </div>
                            </div>
                            <div className="joinus-Container col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 justify-content-end d-flex">
                                <div className="join">Join us</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar