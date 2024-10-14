import React, { useRef, useState } from "react";
import './home.css'
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
import rightimg1 from '../IMAGE/img-right-yoga.png'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// images 3bhk
import image3bhk1 from "../IMAGE/3bhk-image.png"
import image3bhk2 from "../IMAGE/3bhk-image-2.png"
// images 2bhk
import image2bhk1 from "../IMAGE/2bhk-image-1.png"
import image2bhk2 from "../IMAGE/2bhk-image-2.png"
import image2bhk3 from "../IMAGE/2bhk-image-3.png"
import image2bhk4 from "../IMAGE/2bhk-image-4.png"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: "none"
};

const YogahomeLanding = () => {

    return (
        <>

            <Homeyoga />

            <Partner />

            <Whatwedo />

            <Projects />

            <Contactus />

        </>
    )
}

export default YogahomeLanding;

const Homeyoga = () => {

    return (
        <>
            <section id="Homeyoga" >
                <img src={banner1} className="img-fluid" style={{ width: "100%", height: "100%" }} />
            </section>
        </>
    )
}

const Partner = () => {
    return (
        <>

            <section className="container-fluid" id="Partner">
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
                                    <p className="col-lg-8 mt-3 "><span>“</span>Home is more than just a physical structure; it embodies comfort, safety, and a sense of belonging. It’s a space filled with memories and relationships, representing the emotional significance that shapes our lives. At Yoga Property, we understand that a home is where individuals feel secure and connected. Explore our residential plots and community projects to find the perfect place that reflects your unique experiences.<span>”</span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </section>

        </>
    );
};

const Whatwedo = () => {
    return (
        <>
            <section id="whatwedo" >
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
                                <h2 style={{ color: "#f5f5f5" }}>WHAT WE DO</h2>

                                <div className=" text-div-whatwe-yoga">
                                    <p>
                                        <FontAwesomeIcon icon={faLayerGroup} className="me-3"/> <span className="whatwetext">D</span>eveloping
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPeopleRoof} className="me-3"/><span className="whatwetext">P</span>romoting & Sales
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faArrowRightToCity} className="me-3"/><span className="whatwetext">C</span>onstruction
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPuzzlePiece} className="me-4" /><span className="whatwetext">I</span>nteriors
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faHouseLaptop} className="me-3"/><span className="whatwetext">H</span>ome Automation
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPersonDigging} className="me-3"/><span className="whatwetext">C</span>ustomized construction
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
            </section>
        </>
    )
}

const Projects = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <section className=" tab-section-yoga mb-5" id="projects">
                <div className=" dream-house-heading">
                    <h1>SWEET HOME</h1>
                </div>
                <div className="tab-heading-yoga">
                    <h3>PROJECTS</h3>
                </div>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Ongoing</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Upcoming</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Completed</button>
                    </li>
                </ul>
                <div class="tab-content mt-4" id="myTabContent">
                    {/* <!-- Ongoing Tab with Nested Tabs --> */}
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        {/* <!-- Nested tabs for 2BHK, 3BHK, Plot --> */}
                        <ul class="nav nav-pills-2nd-tab-yoga" id="nestedTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link-2nd-tab-yoga active" id="bhk2-tab" data-bs-toggle="tab" data-bs-target="#bhk2" type="button" role="tab" aria-controls="bhk2" aria-selected="true">2BHK</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link-2nd-tab-yoga" id="bhk3-tab" data-bs-toggle="tab" data-bs-target="#bhk3" type="button" role="tab" aria-controls="bhk3" aria-selected="false">3BHK</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link-2nd-tab-yoga" id="plot-tab" data-bs-toggle="tab" data-bs-target="#plot" type="button" role="tab" aria-controls="plot" aria-selected="false">Plot</button>
                            </li>
                        </ul>
                        {/* <!-- Content for nested tabs --> */}
                        <div class="tab-content" id="nestedTabContent">
                            {/* <!-- 2BHK Content --> */}
                            <div class="tab-pane fade show active" id="bhk2" role="tabpanel" aria-labelledby="bhk2-tab">
                                <div class="cards">
                                    <div class="card-item">
                                        <div class="card-body">
                                            <img class="card-img" src={image2bhk1} alt="" />
                                            <span>2BHK Apartment</span>
                                            <p>Details for 2BHK Apartments...</p>
                                            <div class="d-flex align-items-center">
                                                <h5 onClick={handleOpen}>Know More</h5>
                                                <div class="oran-line ms-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-item">
                                        <div class="card-body">
                                            <img class="card-img" src={image2bhk3} alt="" />
                                            <span>2BHK Apartment</span>
                                            <p>Details for 2BHK Apartments...</p>
                                            <div class="d-flex align-items-center">
                                                <h5 onClick={handleOpen}>Know More</h5>
                                                <div class="oran-line ms-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-item">
                                        <div class="card-body">
                                            <img class="card-img" src={image2bhk2} alt="" />
                                            <span>2BHK Apartment</span>
                                            <p>Details for 2BHK Apartments...</p>
                                            <div class="d-flex align-items-center">
                                                <h5 onClick={handleOpen}>Know More</h5>
                                                <div class="oran-line ms-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-item">
                                        <div class="card-body">
                                            <img class="card-img" src={image2bhk4} alt="" />
                                            <span>2BHK Apartment</span>
                                            <p>Details for 2BHK Apartments...</p>
                                            <div class="d-flex align-items-center">
                                                <h5 onClick={handleOpen}>Know More</h5>
                                                <div class="oran-line ms-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3BHK Tab Content */}
                            <div className="tab-pane fade" id="bhk3" role="tabpanel" aria-labelledby="bhk3-tab">
                                <div className="cards">
                                    {/* 3BHK Tab Content 1st card */}
                                    <div className="card-item">
                                        <div class="card-body">
                                            <img class="card-img" src={image3bhk1} alt="" />
                                            <span>3BHK Apartment</span>
                                            <p>Place : Fairland , Thoppampati</p>
                                            <div class="d-flex align-items-center">
                                                <h5 onClick={handleOpen}>Know More</h5>
                                                <div class="oran-line ms-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 3BHK Tab Content 2st card */}
                                    <div class="card-item">
                                        <div class="card-body">
                                            <img class="card-img" src={image3bhk2} alt="" />
                                            <span>3BHK Apartment</span>
                                            <p>Place : Fairland , Thoppampati pirive ,
                                                Coimbatore </p>
                                            <div class="d-flex align-items-center">
                                                <h5 onClick={handleOpen}>Know More</h5>
                                                <div class="oran-line ms-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 3BHK Tab Content 3st card */}
                                    <div class="card-item">
                                        <div class="card-body">
                                            <img class="card-img" src={image3bhk2} alt="" />
                                            <span>3BHK Apartment</span>
                                            <p>Place : Fairland , Thoppampati pirive ,
                                                Coimbatore </p>
                                            <div class="d-flex align-items-center">
                                                <h5 onClick={handleOpen}>Know More</h5>
                                                <div class="oran-line ms-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3BHK Tab Content for Modal */}
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description">
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        <div class="card-item">
                                            <div class="card-body">
                                                <img class="" src={image2bhk1} alt="" />
                                                <span>2BHK Apartment</span>
                                                <p>Details for 2BHK Apartments...</p>
                                                <div class="d-flex align-items-center">
                                                    <h5 onClick={handleOpen}>Know More</h5>
                                                    <div class="oran-line ms-3"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                </Box>
                            </Modal>

                            {/* <!-- Plot Content --> */}
                            <div class="tab-pane fade" id="plot" role="tabpanel" aria-labelledby="plot-tab">
                                <div class="cards">
                                    <div class="card-item">
                                        <div class="card-body">
                                            <img class="card-img" src={image2bhk4} alt="" />
                                            <span>Plot</span>
                                            <p>Details for Plots...</p>
                                            <div class="d-flex align-items-center">
                                                <h5 onClick={handleOpen}>Know More</h5>
                                                <div class="oran-line ms-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Upcoming Tab --> */}
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        {/* <!-- Content for Upcoming Tab --> */}

                        <div class="tab-pane fade show active" id="bhk2" role="tabpanel" aria-labelledby="bhk2-tab">
                            <div class="cards">
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={image2bhk1} alt="" />
                                        <span>2BHK Apartment</span>
                                        <p>Details for 2BHK Apartments...</p>
                                        <div class="d-flex align-items-center">
                                            <h5 onClick={handleOpen}>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={image2bhk3} alt="" />
                                        <span>2BHK Apartment</span>
                                        <p>Details for 2BHK Apartments...</p>
                                        <div class="d-flex align-items-center">
                                            <h5 onClick={handleOpen}>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={image2bhk2} alt="" />
                                        <span>2BHK Apartment</span>
                                        <p>Details for 2BHK Apartments...</p>
                                        <div class="d-flex align-items-center">
                                            <h5 onClick={handleOpen}>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={image2bhk4} alt="" />
                                        <span>2BHK Apartment</span>
                                        <p>Details for 2BHK Apartments...</p>
                                        <div class="d-flex align-items-center">
                                            <h5 onClick={handleOpen}>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* <!-- Completed Tab --> */}
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        {/* <!-- Content for Completed Tab --> */}


                        <div class="tab-pane fade show active" id="bhk2" role="tabpanel" aria-labelledby="bhk2-tab">
                            <div class="cards">
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={image2bhk1} alt="" />
                                        <span>2BHK Apartment</span>
                                        <p>Details for 2BHK Apartments...</p>
                                        <div class="d-flex align-items-center">
                                            <h5 onClick={handleOpen}>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={image2bhk3} alt="" />
                                        <span>2BHK Apartment</span>
                                        <p>Details for 2BHK Apartments...</p>
                                        <div class="d-flex align-items-center">
                                            <h5 onClick={handleOpen}>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={image2bhk2} alt="" />
                                        <span>2BHK Apartment</span>
                                        <p>Details for 2BHK Apartments...</p>
                                        <div class="d-flex align-items-center">
                                            <h5 onClick={handleOpen}>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={image2bhk4} alt="" />
                                        <span>2BHK Apartment</span>
                                        <p>Details for 2BHK Apartments...</p>
                                        <div class="d-flex align-items-center">
                                            <h5 onClick={handleOpen}>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={image2bhk3} alt="" />
                                        <span>2BHK Apartment</span>
                                        <p>Details for 2BHK Apartments...</p>
                                        <div class="d-flex align-items-center">
                                            <h5 onClick={handleOpen}>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={image2bhk1} alt="" />
                                        <span>2BHK Apartment</span>
                                        <p>Details for 2BHK Apartments...</p>
                                        <div class="d-flex align-items-center">
                                            <h5 onClick={handleOpen}>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={image2bhk2} alt="" />
                                        <span>2BHK Apartment</span>
                                        <p>Details for 2BHK Apartments...</p>
                                        <div class="d-flex align-items-center">
                                            <h5 onClick={handleOpen}>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

const Contactus = () => {

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

            <section id="Contactus">
                <div className="container text-div-about-yoga " >
                    <div className="container dream-house-heading">
                        <h1>CONTACT US</h1>
                    </div>
                    <p className="text-center">
                        Please contact us for any question or request you may have, through this form.<br /> Your request will be processed by our staff and we will get back to you as soon as possible.
                    </p>
                </div>

                <div className="d-flex justfy-content-center align-items-center">
                    <YogaForm />
                </div>
            </section>

            <section className="container-fluid footer-yoga" style={{ background: "rgba(237, 114, 53, 0.15)" }}>
                <div className="col-12" style={{ padding: "60px 0px" }}>
                    <div className="row">
                        <motion.div
                            ref={ref1}
                            className="col-lg-3 footer-logo-yoga mb-3"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <img src={footerlogo} className="img-fluid" style={{ height: "170px" }} />
                        </motion.div>

                        <motion.div
                            ref={ref2}
                            className="col-lg-2 footer-corp-yoga mb-3"
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
                            <p><FontAwesomeIcon icon={faEnvelope} className="me-3"/>yogaproperty@gmail.com</p>
                            <button type="button" className="btn btn-outline-warning yoga-footer-call-btn mt-3">
                                <FontAwesomeIcon icon={faPhone} className="me-3"/>7708871117
                            </button>
                        </motion.div>

                        <motion.div
                            ref={ref3}
                            className="col-lg-2 footer-navi-yoga mb-3"
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
                            className="col-lg-2 footer-followus-yoga mb-3"
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

                        <motion.div
                            ref={ref1}
                            className="col-lg-3 footer-logo-yoga mb-3"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <img src={trustpartner} className="img-fluid" style={{ height: "170px" }} />
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    )
}
