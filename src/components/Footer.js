import React from 'react';
import './Footer.css'

function Footer(params) {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h4>Wij zijn Woonplezier.<br/>
                            We hebben verstand van huizen. <br/>
                            En hart voor mensen.
                        </h4>
                        <p>
                            Wij zijn een woningcorporatie met ongeveer 8.000 woningen in Zaandam en omgeving. We zorgen voor goede en betaalbare woningen in een prettige buurt voor huishoudens met een smalle beurs. Kwetsbare mensen kunnen op ons rekenen, net als starters, gezinnen en alleenwonenden.
                        </p>
                        <a>Meer over Woonplezier</a>
                    </div>
                    <div className='col-sm-4'>
                        <h4>Contact</h4>
                        <br/>
                        <strong>Bezoekadres:</strong><br/>
                        <span>Straatnaam 00</span><br/>
                        <span>0000 XX Plaatsnaam</span>
                        <br/>
                        <br/>
                        <strong>Openingstijden:</strong><br/>
                        <span>Maandag t/m vrijdagvan 9.00 tot 17.00 uur</span>
                        <br/>
                        <br/>
                        <strong>Telefoon:</strong><br/>
                        <span>000 -  000 00 00</span>
                        <br/>
                        <br/>
                        <strong>Email:</strong><br/>
                        <span>info@woonplezier.nu</span><br/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;