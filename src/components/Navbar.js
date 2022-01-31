import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar()
{
    return (
        <nav className="navbar fixed-top navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="#">
                    <img src={'/images/logo.png'} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="#">Ik huur</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Ik zoek</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Projecten</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Contact</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div className='search-container'>
                            <input className="form-control me-2" type="search" placeholder="Wat zoekt u..." aria-label="Search"/>
                            <img src={'/images/search-icon.png'} />
                        </div>
                        <button className="custom-btn login-btn" type="submit">
                            <img src={'/images/user-icon.png'}  alt='...'/>
                            <span>Inloggen</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        
    );
}

export default Navbar;