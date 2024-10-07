import React, { useRef } from "react";
import '../A-LAYOUT-NAV/nav.css'
import whatwedoabout from "../IMAGE/whatwedo=about.png"
import trustpartner from "../IMAGE/YOGALOGO-1.png"
import footerlogo from '../IMAGE/OMSAKTHI-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToCity, faEnvelope, faHouseLaptop, faLayerGroup, faPeopleRoof, faPersonDigging, faPhone, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import banner1 from '../IMAGE/landing-banner-yoga.png'
import { motion, useInView } from "framer-motion";
import YogaForm from "./YogaForm";
import mobimg1 from '../IMAGE/index-img-yoga.png';
import cardimg1 from "../IMAGE/tab-card-image.png"
import rightimg1 from '../IMAGE/img-right-yoga.png'

// Filename - WelcomePage.js

const WelcomePage = () => {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);


    const isInView1 = useInView(ref1, { triggerOnce: false });
    const isInView2 = useInView(ref2, { triggerOnce: false });
    const isInView3 = useInView(ref3, { triggerOnce: false });
    const isInView4 = useInView(ref4, { triggerOnce: false });



    return (
        <>

            <Course />
            <Article />

            <section >
                <img src={banner1} className="img-fluid" style={{ width: "100%" }} />
            </section>

            <section className="container-fluid ">
                <div className="row trust-partr-sec-div">
                    <h2 className="col-lg-6 col-md-6">Our Trusted <br />
                        <span>Partner</span></h2>
                    <img src={trustpartner} alt="trust-partner" className="img-fluid col-lg-6 col-md-6 " style={{ width: "fit-content", height: "150px" }} />
                </div>
            </section>

            <section>
                {/* Dream House */}
                <div className="container dream-house-heading">
                    <h1>DREAM HOUSE</h1>
                </div>
                {/* mobile image Dream house */}
                <div className="dream-home-mob-img">
                    <img src={mobimg1} className="img-fluid " />
                </div>
                {/* full contents of Dream house */}
                <section className="section-main-dream-house-yoga" >
                    <div className="container">
                        <div class="wrapper dream-house-yoga">
                            <div class="box1"></div>
                            <div class="box2"></div>
                            <div class="box3"></div>

                            <div class="box4">
                                <div className="fourth-box-contents">
                                    <h3>HOME IS WHERE <br />THE HEART IS</h3>
                                    <p className="col-lg-8 mt-3 "><span>“</span>Home is a place of comfort, safety, and belonging, where individuals feel a sense of security and connection. It can be a physical structure or a space filled with memories and relationships, embodying emotional significance beyond just a location. Ultimately, it represents the people and experiences that shape our lives.<span>”</span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </section>

            <section className="sec-whatwe-about-yoga">

                <div className="container dream-house-heading">
                    <h1>ABOUT US</h1>
                </div>

                <div className="container about-yoga-div">
                    <div className="text-div-about-yoga">
                        <h2>ABOUT US</h2>
                        <p>
                            With over 10 years of experience, Yoga Property has completed 6+ housing community projects and constructed over 100 homes, serving 500+ satisfied customers. We specialize in creating sustainable living spaces that prioritize community well-being. Our dedicated team guides clients from plot selection to construction, ensuring a seamless process. We take pride in our unique designs, advanced construction techniques, and quality materials. At Yoga Property, we turn your vision into reality with care and excellence.
                        </p>
                    </div>
                </div>
            </section>

            <div class=" sec-whatwedo-yoga">
                <div className="container">
                    <div class="row  whatwedo-yoga">
                        <div class="col-lg-3 col-md-12 whatwe-yoga-div">
                            <h2>WHAT WE DO</h2>

                            <div className=" text-div-whatwe-yoga">
                                <p>
                                    <FontAwesomeIcon icon={faLayerGroup} className="me-3" />Developing
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faPeopleRoof} className="me-3" />Promoting & Sales
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faArrowRightToCity} className="me-3" />Construction
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faPuzzlePiece} className="me-3" />Interiors
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faHouseLaptop} className="me-3" />Home Automation
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faPersonDigging} className="me-3" />Customized construction
                                </p>
                            </div>

                        </div>
                        <div class="col-lg-9 col-md-12 sec-whatwedo-yoga-img">
                            <img src={whatwedoabout} alt="whatwedo=about" className="img-fluid" />
                        </div>
                    </div>
                </div>

            </div>

            <section className="right-image-left-text-yoga mt-5 mb-5">
                <div className="container">
                    <div className="right-text-yoga col-lg-6">
                        <p><span>Y</span>oga Property provides expertly developed residential plots and customizable Home designs, ensuring a seamless experience from Consultation to Construction. Our Commitment to sustainability enhances both Community and Environment.</p>
                    </div>
                </div>
                <div className="right-img-yoga order-sm-1" >
                    <img src={rightimg1} className="img-fluid" />
                </div>
            </section>

            <section className="container mt-5 mb-5 dream-house-yoga-sec" >
                <div className=" dream-house-heading">
                    <h1>SWEET HOME</h1>
                </div>
                <div className="tab-heading-yoga">
                    <h3>OUR PROJECTS</h3>
                </div>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">ONGOING</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">UPCOMING</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">COMPLETED</button>
                    </div>
                </nav>

                <div class=" tab-content row mt-5" id="nav-tabContent">


                    {/* tab1 */}
                    <div class="tab-pane fade show active " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="row">
                            <div class="card col-lg-4" style={{ outline: "none", border: "none" }}>
                                <img class="card-img-top" src={cardimg1} alt="Card image cap" />
                                <div class="card-body">
                                    <h2 class="title title--h5">ST. MARY'S ROAD</h2>
                                    <p class="content-grid__description">
                                        <strong>1,92,000 sq. ft.</strong> of ultra luxury<br />
                                        17 spectacular levels<br />
                                        38 signature residences
                                    </p>
                                    <a href="#" class="btn-link bookNow">KNOW MORE</a>
                                </div>
                            </div>
                            <div class="card col-lg-4" style={{ outline: "none", border: "none" }}>
                                <img class="card-img-top" src={cardimg1} alt="Card image cap" />
                                <div class="card-body">
                                    <h2 class="title title--h5">ST. MARY'S ROAD</h2>
                                    <p class="content-grid__description">
                                        <strong>1,92,000 sq. ft.</strong> of ultra luxury<br />
                                        17 spectacular levels<br />
                                        38 signature residences
                                    </p>
                                    <a href="#" class="btn-link bookNow">KNOW MORE</a>
                                </div>
                            </div>
                            <div class="card col-lg-4" style={{ outline: "none", border: "none" }}>
                                <img class="card-img-top" src={cardimg1} alt="Card image cap" />
                                <div class="card-body">
                                    <h2 class="title title--h5">ST. MARY'S ROAD</h2>
                                    <p class="content-grid__description">
                                        <strong>1,92,000 sq. ft.</strong> of ultra luxury<br />
                                        17 spectacular levels<br />
                                        38 signature residences
                                    </p>
                                    <a href="#" class="btn-link bookNow">KNOW MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* tab2 */}
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div class="tab-pane fade show active " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div class="card col-lg-4" style={{ outline: "none", border: "none" }}>
                                <img class="card-img-top" src={cardimg1} alt="Card image cap" />
                                <div class="card-body">
                                    <p class="card-text "></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* tab3 */}
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <div class="tab-pane fade show active " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div class="card col-lg-4" style={{ outline: "none", border: "none" }}>
                                <img class="card-img-top" src={cardimg1} alt="Card image cap" />
                                <div class="card-body">
                                    <p class="card-text "></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section >
                <div className="container text-div-about-yoga " style={{ width: "70%" }}>
                    <div className="container dream-house-heading">
                        <h1>CONTACT US</h1>
                    </div>
                    <p>
                        Please contact us for any question or request you may have, through this form. Your request will be processed by our staff and we will get back to you as soon as possible.
                    </p>
                </div>

                <div className="d-flex justfy-content-center align-items-center">
                    <YogaForm />
                </div>
            </section>

            <section className="container-fluid footer-yoga" style={{ background: "rgba(237, 114, 53, 0.15)" }}>
                <div className="col-12" style={{ padding: "6% 0px 7% 0px" }}>
                    <div className="row">
                        <motion.div
                            ref={ref1}
                            className="col-lg-3 footer-logo-yoga"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <img src={footerlogo} className="img-fluid" style={{ height: "170px" }} />
                        </motion.div>

                        <motion.div
                            ref={ref2}
                            className="col-lg-3 footer-corp-yoga"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <h3>CORPORATE ADDRESS</h3>
                            <p className="mt-3">
                                #7/7 Mettupalayam main road,<br />
                                Opposite vinayagar temple,<br />
                                Nsn Palayam,<br />
                                Coimbatore Pin 641031.
                            </p>
                            <p><FontAwesomeIcon icon={faEnvelope} className="me-3" />yogaproperty@gmail.com</p>
                            <button type="button" className="btn btn-outline-warning yoga-footer-call-btn mt-3">
                                <FontAwesomeIcon icon={faPhone} className="me-3" />7708871117
                            </button>
                        </motion.div>

                        <motion.div
                            ref={ref3}
                            className="col-lg-2 footer-navi-yoga"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            <h3>NAVIGATION</h3>
                            <p className="mt-3">ABOUT US</p>
                            <p>PROJECTS</p>
                            <p>TERMS & CONDITIONS</p>
                            <p>CONTACT US</p>
                        </motion.div>

                        <motion.div
                            ref={ref4}
                            className="col-lg-4 footer-followus-yoga"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            <h3>FOLLOW US</h3>
                            <div className="d-flex">
                                <p className="me-4 mt-3"><FontAwesomeIcon icon={faFacebook} /></p>
                                <p className="me-4 mt-3"><FontAwesomeIcon icon={faInstagram} /></p>
                                <p className="me-4 mt-3"><FontAwesomeIcon icon={faTwitter} /></p>
                                <p className="me-4 mt-3"><FontAwesomeIcon icon={faLinkedin} /></p>
                                <p className="me-4 mt-3"><FontAwesomeIcon icon={faYoutube} /></p>
                                <p className="me-4 mt-3"><FontAwesomeIcon icon={faWhatsapp} /></p>
                                <p className="me-4 mt-3"><FontAwesomeIcon icon={faXTwitter} /></p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default WelcomePage;

const Course = () => {
    return (
        <div id="course">Let's Look at some courses</div>
    );
};

const Article = () => {
    return <div id="article">Let's Read some Articles</div>;
}