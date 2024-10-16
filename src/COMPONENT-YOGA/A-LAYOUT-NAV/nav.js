import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import './nav.css';
import $ from 'jquery'
import OMSAKTHI from '../IMAGE/OMSAKTHI-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import AnchorLink from "react-anchor-link-smooth-scroll";
import YogahomeLanding from "../B-LAYOUT-HOME/home";

const Layout = () => {

    const [navbarHeight, setNavbarHeight] = useState(100);

    const scrollValue = () => {
        const scroll = window.scrollY;
        const navbar = document.getElementById('navbar');

        if (scroll < 200) {
            navbar.classList.remove('BgColour');
        } else {
            navbar.classList.add('BgColour');
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





    // click to top
    const [pathLength, setPathLength] = useState(0);
    const [offsetActive, setOffsetActive] = useState(false);

    useEffect(() => {
        const progressPath = document.querySelector(".progress-wrap path");
        if (progressPath) {
            const length = progressPath.getTotalLength();
            setPathLength(length);

            progressPath.style.transition = "none";
            progressPath.style.strokeDasharray = `${length} ${length}`;
            progressPath.style.strokeDashoffset = `${length}`;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = "stroke-dashoffset 10ms linear";
        }

        const updateProgress = () => {
            const scroll = window.scrollY || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength) / height;
            if (progressPath) {
                progressPath.style.strokeDashoffset = `${progress}`;
            }
        };

        const handleScroll = () => {
            updateProgress();

            if (window.scrollY > 50) {
                setOffsetActive(true);
            } else {
                setOffsetActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathLength]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    // //////////////
    const [active, setActive] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        subject: 'Help',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const toggleMenu = () => setActive(!active);
    const closeMenu = () => setActive(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const validateForm = () => {
        let errorMessages = {};
        if (!formValues.name) {
            errorMessages.name = 'Please enter your name';
        }
        if (!formValues.email || !formValues.email.includes('@') || formValues.email.length < 6) {
            errorMessages.email = 'Please enter a valid email';
        }
        if (!formValues.message) {
            errorMessages.message = 'Please enter your message';
        }
        setErrors(errorMessages);
        return Object.keys(errorMessages).length === 0;
    };

    const sendToWhatsApp = () => {
        if (!validateForm()) return;

        const { name, email, subject, message } = formValues;
        const postLink = window.location.href;

        const whatsappMessage = `New message from ${name}\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}\n\n=============================\n*Form:* ${postLink}\n=============================`;

        const phoneNumber = '+917708871117'; // Your WhatsApp number
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };


    return (
        <>

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

                                            <p className="drawer-title ms-auto" id="drawer-1-title" style={{ fontSize: "30px", cursor: "pointer" }} onClick={toggleDrawer} aria-label="Close">
                                                &times;&nbsp;  </p>
                                        </div>
                                        <div className="drawer-body">
                                            <div style={{ textAlign: "end" }}>
                                                <p>
                                                    <AnchorLink className="AnchorLink" href="#Homeyoga">
                                                        Home
                                                    </AnchorLink>
                                                </p>
                                                <p>
                                                    <AnchorLink className="AnchorLink" href="#Partner">
                                                        Partner
                                                    </AnchorLink>
                                                </p>
                                                <p>
                                                    <AnchorLink className="AnchorLink" href="#whatwedo">
                                                        ABOUT YOGA
                                                    </AnchorLink>
                                                </p>
                                                <p>
                                                    <AnchorLink className="AnchorLink" href="#projects">
                                                        Projects
                                                    </AnchorLink>
                                                </p>
                                                <p>
                                                    <AnchorLink className="AnchorLink" href="#Contactus">
                                                        Contact Us
                                                    </AnchorLink>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="drawer-footer">
                                            <a
                                                href="mailto:yogaproperty81@gmail.com"
                                                className="col-auto"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                                                yogaproperty@gmail.com
                                            </a>
                                            <button type="button" className="btn btn-outline-success bg-success text-white">
                                                <a
                                                    href="tel:7708871117"
                                                    className="btn btn-outline-success bg-success text-white"
                                                >
                                                    <FontAwesomeIcon icon={faPhone} className="me-3" />7708871117
                                                </a>

                                            </button>
                                            <div className="social-icons row justify-content-center mt-3">
                                                <a
                                                    href="https://www.facebook.com/yogaproperties?mibextid=LQQJ4d"
                                                    className="col-auto"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon icon={faFacebook} />
                                                </a>
                                                <a
                                                    href="https://www.instagram.com/yogaproperty?igsh=dTdwcHcyajdvN3Uy&utm_source=qr"
                                                    className="col-auto"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </a>
                                                <a
                                                    href="https://x.com/yogaproperties?t=9Abub8p_j71w2wfz3nWBZw&s=09"
                                                    className="col-auto"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon icon={faXTwitter} />
                                                </a>
                                                <a
                                                    href="https://www.linkedin.com/in/yoga-property-154718283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                                    className="col-auto"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                </a>
                                                <a
                                                    href="https://youtube.com/@yogaproperty?si=aunGV5pthlI1Kq5V"
                                                    className="col-auto"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon icon={faYoutube} />
                                                </a>
                                                <a
                                                    href="mailto:yogaproperty81@gmail.com"
                                                    className="col-auto"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon icon={faEnvelope} />
                                                </a>
                                                <a
                                                    href="https://wa.me/7708871117"
                                                    className="col-auto"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon icon={faWhatsapp} />
                                                </a>

                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div
                className={`progress-wrap ${offsetActive ? "active-progress" : ""}`}
                id="progress-scroll"
                onClick={scrollToTop}
            >
                <svg
                    className="progress-circle svg-content"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                >
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

            <div className={`nav-whatsapp ${active ? 'active' : ''}`}>
                <div className='wrapperWA'>
                    <div className='wrapperWA-header'>
                        <h2>WhatsApp Live Chat</h2>
                        <div className='closeWA' onClick={closeMenu}>
                            <svg className='h-6 w-6' fill='none' stroke='#f40076' viewBox='0 0 24 24'>
                                <path d='M6 18L18 6M6 6l12 12' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'></path>
                            </svg>
                        </div>
                    </div>
                    <div className='form-container' id='waform-IT'>
                        <div className='formC'>
                            <div className='Fcontrol'>
                                <input
                                    className='cName'
                                    id='cName'
                                    name='name'
                                    required
                                    type='text'
                                    value={formValues.name}
                                    onChange={handleChange}
                                />
                                <span className='nameC'>Name</span>
                                <span className='valid' id='error_name'>{errors.name}</span>
                            </div>
                            <div className='Fcontrol'>
                                <input
                                    className='cEmail'
                                    id='cEmail'
                                    name='email'
                                    required
                                    type='email'
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                                <span className='emailC'>Email</span>
                                <span className='valid' id='error_email'>{errors.email}</span>
                            </div>
                        </div>
                        <div className='formC'>
                            <div className='Fcontrol'>
                                <select
                                    className='cSubject'
                                    id='cSubject'
                                    name='subject'
                                    value={formValues.subject}
                                    onChange={handleChange}
                                >
                                    <option value='Help'>Help</option>
                                    <option value='Question'>Question</option>
                                    <option value='Request'>Request</option>
                                </select>
                                <span className='subjectC'>Select Subject</span>
                            </div>
                            <div className='Fcontrol'>
                                <textarea
                                    className='cMessage'
                                    id='cMessage'
                                    name='message'
                                    required
                                    value={formValues.message}
                                    onChange={handleChange}
                                ></textarea>
                                <span className='messageC'>Message</span>
                                <span className='valid' id='error_message'>{errors.message}</span>
                            </div>
                        </div>
                        <div className='formB'>
                            <a className='whatsapp-send' onClick={sendToWhatsApp}>
                                <FontAwesomeIcon icon={faWhatsapp} /> Send WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
                <div className='whatsapp-float' onClick={toggleMenu}>
                    <div className='whatsapp-icon'>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </div>
                    <span className='whatsapp-text'>Talk to us?</span>
                </div>
            </div>

            <YogahomeLanding />

            <Outlet />
        </>
    );
};

export default Layout;






