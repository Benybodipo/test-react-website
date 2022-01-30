import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection ()
{
    return (
        <>
            <section id='hero'>
                <div className='container'>
                    <div className='d-flex flex-column h-100 justify-content-center'>
                        <div className='col-sm-8 mx-auto'>
                            <h1>Waarmee kunnen <br/>
                            we je helpen?</h1>
                        </div>
                    </div>
                    <div className='services-block'>
                        <div className='row justify-content-center'>
                            <div className='col-sm-8 mx-auto'>
                                <ul className='services-list clearfix'>
                                    <li className='h-100'>
                                        <div className='service-block'>
                                            <img src={'/images/service1.png'} className='block-img' alt='...'/>
                                            <br/>
                                            <span className='block-text'>Reparatie melden</span>
                                        </div>
                                    </li>
                                    <li className='h-100'>
                                        <div className='service-block'>
                                            <img src={'/images/service2.png'} className='block-img' alt='...'/>
                                            <br/>
                                            <span className='block-text'>Huur betalen</span>
                                        </div>
                                    </li>
                                    <li className='h-100'>
                                        <div className='service-block'>
                                            <img src={'/images/service3.png'} className='block-img' alt='...'/>
                                            <br/>
                                            <span className='block-text'>Woning zoeken</span>
                                        </div>
                                    </li>
                                    <li className='h-100'>
                                        <div className='service-block'>
                                            <img src={'/images/service4.png'} className='block-img' alt='...'/>
                                            <br/>
                                            <span className='block-text'>Overlast melden</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;