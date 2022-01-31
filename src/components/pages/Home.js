import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Home.css';
import HeroSection from '../HeroSection';
import CardItem from '../CardItem';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <section id="new-construction-section">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-sm-10 mx-auto'>
                            <div className='row'>
                                <div className='col-sm-6 col-text'>
                                    <span className='mt-4'>NIEUWBOUW</span>
                                    <br/>
                                    <br/>
                                    <h2>Binnenkort in de verkoop</h2>
                                    <p>
                                        Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. 
                                    </p>
                                    <Link to='/'>Bekijk dit project</Link>
                                </div>
                                <div className='col-sm-6 col-img p-0'>
                                    <img src={'./images/new-construction.png'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='actual-section'>
                <div className='container'>
                    <div className='row display-flex'>
                        <h2 className='mb-4'>Actueel</h2>
                        <div className='col-sm-4'>
                            <CardItem
                                card_img_src='./images/card1.png' 
                                card_img_alt=''
                                date='03-02-2021'
                                card_title='Bouw 55 sociale huurappartementen gestart'
                                card_text='Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, lectus'
                                link_href='/'
                            />
                        </div>
                        <div className='col-sm-4'>
                            <CardItem
                                card_img_src='./images/card2.png' 
                                card_img_alt=''
                                date='15-02-2021'
                                card_title='Cultuurhistorische eisen belemmeren nieuwbouw'
                                card_text='Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis'
                                link_href='/'
                            />
                        </div>
                        <div className='col-sm-4'>
                            <CardItem
                                card_img_src='./images/card3.png' 
                                card_img_alt=''
                                date='20-02-2021'
                                card_title='Bewonersbijeenkomst op donderdag 9 maart'
                                card_text='Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio'
                                link_href='/'
                            />
                        </div>
                        <div className='btn-container'>
                            <button className='custom-btn shallow'>Meer nieuwsberichten</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;