import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import './nav.css';
import YOGALOG from '../IMAGE/YOGALOGO-1.png';
import OMSAKTHI from '../IMAGE/OMSAKTHI-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import AnchorLink from "react-anchor-link-smooth-scroll";
import WelcomePage from "../B-LAYOUT-HOME/home";


const Layout = () => {

    const [navbarHeight, setNavbarHeight] = useState(80);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const scrollValue = () => {
        const scroll = window.scrollY;
        const navbar = document.getElementById('navbar');

        if (scroll < 200) {
            navbar.classList.remove('BgColour');
            setNavbarHeight(120);
        } else {
            navbar.classList.add('BgColour');
            setNavbarHeight(100);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollValue);
        return () => {
            window.removeEventListener('scroll', scrollValue);
        };
    }, []);


    const [isOpen, setIsOpen] = useState(false);
    const drawerRef = useRef(null);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>

            <div className="App">
                <h1 align="center">Welcome To Geeksforgeeks</h1>
                <h2 align="center">
                    <AnchorLink href="#course">
                        <button>Courses</button>
                    </AnchorLink>
                    <AnchorLink href="#article">
                        <button>Articles</button>
                    </AnchorLink>
                </h2>
                <WelcomePage />
            </div>


            <div className="nav-yoga-bg-main">
                <div id="navbar" className="navbar-yoga-bg-main" style={{ height: `${navbarHeight}px` }}>
                    <ul className="navbar-yoga-bg-main-ul">
                        <li>
                            <Link to="landing"> <img src={OMSAKTHI} alt="Logo" className="navbar-logo me-4" /></Link>
                        </li>
                        <li className="menu-nav-yoga">
                            <div>
                                <a onClick={toggleDrawer} className="MENU-circle-YOGA"> &#9782;  </a>
                                {isOpen && <div className="backdrop" onClick={toggleDrawer}></div>}
                                <div
                                    ref={drawerRef}
                                    className={`drawer drawer-left ${isOpen ? 'show' : ''}`}
                                    tabIndex="-1"
                                    role="dialog"
                                    aria-labelledby="drawer-1-title"
                                    aria-hidden={!isOpen}
                                    id="drawer-1"
                                >
                                    <div className="drawer-content drawer-content-scrollable" role="document">
                                        <div className="drawer-header">
                                            <p>BUILDER & CONTRACTORS</p>
                                            <p className="drawer-title ms-auto" id="drawer-1-title" style={{ fontSize: "30px", cursor: "pointer" }} onClick={toggleDrawer} aria-label="Close">
                                                &times;&nbsp;  </p>
                                        </div>
                                        <div className="drawer-body">
                                            <div style={{ textAlign: "end" }}>
                                                <p>Home</p>
                                                <p> ABOUT YOGA</p>
                                                <p>Projects</p>
                                                <p>blog</p>
                                                <p>Contact Us</p>
                                            </div>
                                        </div>
                                        <div className="drawer-footer">
                                            <p><FontAwesomeIcon icon={faEnvelope} className="me-3" />yogaproperty@gmail.com</p>
                                            <button type="button" className="btn btn-outline-success bg-success text-white">
                                                <FontAwesomeIcon icon={faPhone} className="me-3" />7708871117
                                            </button>
                                            <div className="social-icons row justify-content-center mt-3">
                                                <p className="col-auto"><FontAwesomeIcon icon={faFacebook} /></p>
                                                <p className="col-auto"><FontAwesomeIcon icon={faInstagram} /></p>
                                                <p className="col-auto"><FontAwesomeIcon icon={faTwitter} /></p>
                                                <p className="col-auto"><FontAwesomeIcon icon={faLinkedin} /></p>
                                                <p className="col-auto"><FontAwesomeIcon icon={faYoutube} /></p>
                                                <p className="col-auto"><FontAwesomeIcon icon={faWhatsapp} /></p>
                                                <p className="col-auto"><FontAwesomeIcon icon={faXTwitter} /></p>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <Outlet />
        </>
    );
};

export default Layout;

// Filename - App.js





