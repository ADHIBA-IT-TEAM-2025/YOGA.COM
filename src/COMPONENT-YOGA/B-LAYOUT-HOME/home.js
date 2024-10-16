import React, { useRef, useState } from "react";
import './home.css'
import whatwedoabout from "../IMAGE/whatwedo=about.png"
import trustpartner from "../IMAGE/YOGALOGO-1.png"
import footerlogo from '../IMAGE/OMSAKTHI-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToCity, faEnvelope, faHouseLaptop, faLayerGroup, faPeopleRoof, faPersonDigging, faPhone, faPuzzlePiece ,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import banner1 from '../IMAGE/landing-banner-yoga.png'
import { motion, useInView } from "framer-motion";
import YogaForm from "./YogaForm";
import mobimg1 from '../IMAGE/index-img-yoga.png';
import rightimg1 from '../IMAGE/img-right-yoga.png'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Carousel from 'react-bootstrap/Carousel';

// thoppampatti
// card
import thopcardimg3bhk2 from "../IMAGE/thoppampatti/3bhk-image-1.png"

// 3bhk modalimages
import thopmodalimg1 from "../IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/2.png"
import thopmodalimg2 from "../IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/3.png"
import thopmodalimg3 from "../IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/4.png"
import thopmodalimg4 from "../IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/5.png"
import thopmodalimg5 from "../IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/6.png"
import thopmodalimg6 from "../IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/7.png"
import thopmodalimg7 from "../IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/8.png"
import thopmodalimg8 from "../IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/9.png"
import thopmodalimg9 from "../IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/10.png"
import thopmodalimg10 from "../IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/11.png"
import thopmodalimg11 from "../IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/12.png"
import thopmodalimg12 from "../IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/13.png"
import thopmodalimg13 from "../IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/14.png"


// kanuvai
// card
import kanucardimg2bhk1 from "../IMAGE/kanuvai/card-image-2bhk-1.png"
import kanucardimg2bhk2 from "../IMAGE/kanuvai/card-image-2bhk-2.png"
import kanucardimg2bhk3 from "../IMAGE/kanuvai/card-image-2bhk-3.png"
import kanucardimg2bhk4 from "../IMAGE/kanuvai/card-image-2bhk-4.png"

// 2bhk modalimages --1
import kanumodal1img1 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai/2.png"
import kanumodal1img2 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai/3.png"
import kanumodal1img3 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai/4.png"
import kanumodal1img4 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai/5.png"
import kanumodal1img5 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai/6.png"
import kanumodal1img6 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai/7.png"
import kanumodal1img7 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai/8.png"

// 2bhk modalimages --2
import kanumodal2img1 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/2.png"
import kanumodal2img2 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/3.png"
import kanumodal2img3 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/4.png"
import kanumodal2img4 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/5.png"
import kanumodal2img5 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/6.png"
import kanumodal2img6 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/7.png"
import kanumodal2img7 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/8.png"
import kanumodal2img8 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/9.png"
import kanumodal2img9 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/10.png"
import kanumodal2img10 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/11.png"

// 2bhk modalimages --3
import kanumodal3img1 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 3/2.png"
import kanumodal3img2 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 3/3.png"
import kanumodal3img3 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 3/4.png"
import kanumodal3img4 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 3/5.png"


// 2bhk modalimages --4
import kanumodal4img1 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 4/2.png"
import kanumodal4img2 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 4/3.png"
import kanumodal4img3 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 4/4.png"
import kanumodal4img4 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 4/5.png"
import kanumodal4img5 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 4/6.png"
import kanumodal4img6 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 4/7.png"
import kanumodal4img7 from "../IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 4/8.png"




// MANIKARANPALAYAM
import MANIcardimg3bhk1 from "../IMAGE/MANIKARANPALAYAM/CARD-FRONT-IMAGE-1-MANI.png"

// 3bhk modalimages --1
import manimodal1img1 from "../IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/2.png"
import manimodal1img2 from "../IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/3.png"
import manimodal1img3 from "../IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/4.png"
import manimodal1img4 from "../IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/5.png"
import manimodal1img5 from "../IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/6.png"
import manimodal1img6 from "../IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/7.png"
import manimodal1img7 from "../IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/8.png"
import manimodal1img8 from "../IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/9.png"
import manimodal1img9 from "../IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/10.png"


// MANIKARANPALAYAM
import cardimg1kathir3bhk from "../IMAGE/kathirnaikenpalayam/card-img-kahtir-3bhk-1.png"

// upcoming
import upcomimg1 from "../IMAGE/upcoming/Upcoming Plot Idigarai.png"



// completed
import cardimg1thop from "../IMAGE/completed/card-img-1-thoppampatti.png"
import cardimg2PNP from "../IMAGE/completed/card-img-2-PNP.png"
import cardimg3kathir from "../IMAGE/completed/card-img-3-kathir.png"
import cardimg4nsnp from "../IMAGE/completed/card-img-4-nsnpalaym.png"
import cardimg5app from "../IMAGE/completed/card-img-5-apppalaym.png"
import cardimg6thud from "../IMAGE/completed/card-img-6-thudiyalur.png"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    p: 4,
    border: "none",
    outline: "none",
    borderRadius: "10px"
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


    const videos = document.querySelectorAll(".video");

    for (const video of videos) {
        video.addEventListener('mouseover', function () { video.play() }, false);
        video.addEventListener('mouseout', function () { video.pause() }, false);
    }



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

                    <section class="HoverVideo container mt-5">
                        <div class="HoverVideo__wrapper mb-5">
                            <div class="HoverVideo__videoBox">
                                <video class="video" loop preload="yes" muted>
                                    <source src="https://assets.mixkit.co/videos/1704/1704-720.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div class="HoverVideo__videoBox">
                                <video class="video" loop preload="yes" muted>
                                    <source src="https://assets.mixkit.co/videos/1704/1704-720.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div class="HoverVideo__videoBox">
                                <video class="video" loop preload="yes" muted>
                                    <source src="https://assets.mixkit.co/videos/1704/1704-720.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </section>

                </section>

                <div class=" sec-whatwedo-yoga">
                    <div className="container">
                        <div class="row  whatwedo-yoga">
                            <div class="col-lg-4 col-md-12 whatwe-yoga-div">
                                <h2 style={{ color: "#f5f5f5" }}>WHAT WE DO</h2>

                                <div className=" text-div-whatwe-yoga">
                                    <p>
                                        <FontAwesomeIcon icon={faLayerGroup} className="me-3" /> <span className="whatwetext">V</span>isionary Property Development
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPeopleRoof} className="me-3" /><span className="whatwetext">P</span>romoting & Sales
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faArrowRightToCity} className="me-3" /><span className="whatwetext">M</span>astercrafted Construction Solutions
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faPuzzlePiece} className="me-4" /><span className="whatwetext">L</span>uxurious Interior Mastery
                                    </p>
                                    <p>
                                        <FontAwesomeIcon icon={faHouseLaptop} className="me-3" /><span className="whatwetext">N</span>ext-Generation Home Automation
                                    </p>

                                </div>

                            </div>
                            <div class="col-lg-8 col-md-12 sec-whatwedo-yoga-img">
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

   // modal images onclick function
   const [open1, setOpen1] = useState(false);
   const [open2, setOpen2] = useState(false);
   const [open3, setOpen3] = useState(false);
   const [open4, setOpen4] = useState(false);
   const [open5, setOpen5] = useState(false);
   const [open6, setOpen6] = useState(false);

   const handleOpen1 = () => setOpen1(true);
   const handleClose1 = () => setOpen1(false);
   const handleOpen2 = () => setOpen2(true);
   const handleClose2 = () => setOpen2(false);
   const handleOpen3 = () => setOpen3(true);
   const handleClose3 = () => setOpen3(false);
   const handleOpen4 = () => setOpen4(true);
   const handleClose4 = () => setOpen4(false);
   const handleOpen5 = () => setOpen5(true);
   const handleClose5 = () => setOpen5(false);
   const handleOpen6 = () => setOpen6(true);
   const handleClose6 = () => setOpen6(false);

    return (
        <>
           <section className=" tab-section-yoga">
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
                        {/* <!-- Nested tabs for 3 LOCATIONS --> */}
                        <ul class="nav nav-pills-2nd-tab-yoga" id="nestedTab" role="tablist">

                            <li class="nav-item" role="presentation">
                                <button class="nav-link-2nd-tab-yoga active" id="THOPPAMPATTI-tab" data-bs-toggle="tab" data-bs-target="#THOPPAMPATTI" type="button" role="tab" aria-controls="THOPPAMPATTI" aria-selected="false"><FontAwesomeIcon icon={faLocationDot} className='me-3' style={{ fontSize: "20px" }} />THOPPAMPATTI</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link-2nd-tab-yoga" id="KANUVAI-tab" data-bs-toggle="tab" data-bs-target="#KANUVAI" type="button" role="tab" aria-controls="KANUVAI" aria-selected="false"><FontAwesomeIcon icon={faLocationDot} className='me-3' style={{ fontSize: "20px" }} />KANUVAI</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link-2nd-tab-yoga" id="MANIYAKARAMPALAYAM-tab" data-bs-toggle="tab" data-bs-target="#MANIYAKARAMPALAYAM" type="button" role="tab" aria-controls="MANIYAKARAMPALAYAM" aria-selected="false"><FontAwesomeIcon icon={faLocationDot} className='me-3' style={{ fontSize: "20px" }} />MANIYAKARAMPALAYAM</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link-2nd-tab-yoga" id="KATHIRNAIKENPALAYAM-tab" data-bs-toggle="tab" data-bs-target="#KATHIRNAIKENPALAYAM" type="button" role="tab" aria-controls="KATHIRNAIKENPALAYAM" aria-selected="false"><FontAwesomeIcon icon={faLocationDot} className='me-3' style={{ fontSize: "20px" }} />KATHIRNAIKENPALAYAM</button>
                            </li>

                        </ul>

                        {/* <!-- Tab content for 3 LOCATIONS --> */}
                        <div class="tab-content mt-4" id="nestedTabContent">

                            {/* <!-- THOPPAMPATTI content --> */}
                            <div class="tab-pane fade show active" id="THOPPAMPATTI" role="tabpanel" aria-labelledby="THOPPAMPATTI-tab">
                                {/* <!-- Nested Tabs for 2BHK, 3BHK, and Plot --> */}
                                <ul class="nav nav-pills-3rd-tab-yoga" id="thoppamTab" role="tablist">
                                    {/* <li class="nav-item" role="presentation">
                                        <button class="nav-link-2nd-tab-yoga active" id="2bhk-thoppam-tab" data-bs-toggle="tab" data-bs-target="#2bhk-thoppam" type="button" role="tab" aria-controls="2bhk-thoppam" aria-selected="true">2BHK</button>
                                    </li> */}
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link-2nd-tab-yoga active" id="3bhk-thoppam-tab" data-bs-toggle="tab" data-bs-target="#3bhk-thoppam" type="button" role="tab" aria-controls="3bhk-thoppam" aria-selected="false">3BHK</button>
                                    </li>
                                    {/* <li class="nav-item" role="presentation">
                                        <button class="nav-link-2nd-tab-yoga" id="plot-thoppam-tab" data-bs-toggle="tab" data-bs-target="#plot-thoppam" type="button" role="tab" aria-controls="plot-thoppam" aria-selected="false">Plot</button>
                                    </li> */}
                                </ul>

                                {/* <!-- Content for 2BHK, 3BHK, and Plot under THOPPAMPATTI --> */}
                                <div class="tab-content" id="thoppamTabContent">
                                    {/* <div class="tab-pane fade show active" id="2bhk-thoppam" role="tabpanel" aria-labelledby="2bhk-thoppam-tab">
                                        <p>Content for 2BHK under THOPPAMPATTI</p>
                                    </div> */}
                                    <div class="tab-pane fade show active" id="3bhk-thoppam" role="tabpanel" aria-labelledby="3bhk-thoppam-tab">
                                        {/* Content for 3BHK under THOPPAMPATTI */}
                                        <div class="cards">

                                            <div class="card-item" onClick={handleOpen1} style={{ cursor: "pointer" }}  >
                                                <div class="card-body">
                                                    <img class="card-img" src={thopcardimg3bhk2} alt="" />
                                                    <span>Phase - 2</span>
                                                    <p>Details for Plots...</p>
                                                    <div class="d-flex align-items-center">
                                                        <h5 >Know More</h5>
                                                        <div class="oran-line ms-3"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <div class="tab-pane fade" id="plot-thoppam" role="tabpanel" aria-labelledby="plot-thoppam-tab">
                                        <p>Content for Plot under THOPPAMPATTI</p>
                                    </div> */}
                                </div>
                            </div>

                            {/* <!-- KANUVAI content --> */}
                            <div class="tab-pane fade" id="KANUVAI" role="tabpanel" aria-labelledby="KANUVAI-tab">
                                {/* <!-- Nested Tabs for 2BHK, 3BHK, and Plot --> */}
                                <ul class="nav nav-pills-3rd-tab-yoga" id="kanuvaiTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link-2nd-tab-yoga active" id="2bhk-kanuvai-tab" data-bs-toggle="tab" data-bs-target="#2bhk-kanuvai" type="button" role="tab" aria-controls="2bhk-kanuvai" aria-selected="true">2BHK</button>
                                    </li>
                                    {/* <li class="nav-item" role="presentation">
                                        <button class="nav-link-2nd-tab-yoga" id="3bhk-kanuvai-tab" data-bs-toggle="tab" data-bs-target="#3bhk-kanuvai" type="button" role="tab" aria-controls="3bhk-kanuvai" aria-selected="false">3BHK</button>
                                    </li> */}
                                    {/* <li class="nav-item" role="presentation">
                                        <button class="nav-link-2nd-tab-yoga" id="plot-kanuvai-tab" data-bs-toggle="tab" data-bs-target="#plot-kanuvai" type="button" role="tab" aria-controls="plot-kanuvai" aria-selected="false">Plot</button>
                                    </li> */}
                                </ul>

                                {/* <!-- Content for 2BHK, 3BHK, and Plot under KANUVAI --> */}
                                <div class="tab-content" id="kanuvaiTabContent">
                                    <div class="tab-pane fade show active" id="2bhk-kanuvai" role="tabpanel" aria-labelledby="2bhk-kanuvai-tab">
                                        {/* Content for 2BHK under KANUVAI */}
                                        <div class="cards">
                                            <div class="card-item" onClick={handleOpen2} style={{ cursor: "pointer" }}  >
                                                <div class="card-body">
                                                    <img class="card-img" src={kanucardimg2bhk1} alt="" />
                                                    <span>2BHK</span>
                                                    <p>2 portions
                                                        1000 x 2 sqft</p>
                                                    <div class="d-flex align-items-center">
                                                        <h5 >Know More</h5>
                                                        <div class="oran-line ms-3"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-item"  onClick={handleOpen3} style={{ cursor: "pointer" }}  >
                                                <div class="card-body">
                                                    <img class="card-img" src={kanucardimg2bhk4} alt="" />
                                                    <span>2BHK</span>
                                                    <p>2 portions
                                                        1000 x 2 sqft</p>
                                                    <div class="d-flex align-items-center">
                                                        <h5 >Know More</h5>
                                                        <div class="oran-line ms-3"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-item" onClick={handleOpen4} style={{ cursor: "pointer" }}  >
                                                <div class="card-body">
                                                    <img class="card-img" src={kanucardimg2bhk3} alt="" />
                                                    <span>2BHK</span>
                                                    <p>2 portions
                                                        1000 x 2 sqft</p>
                                                    <div class="d-flex align-items-center">
                                                        <h5 >Know More</h5>
                                                        <div class="oran-line ms-3"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-item" onClick={handleOpen5} style={{ cursor: "pointer" }}  >
                                                <div class="card-body">
                                                    <img class="card-img" src={kanucardimg2bhk2} alt="" />
                                                    <span>2BHK</span>
                                                    <p>2 portions
                                                        1000 x 2 sqft</p>
                                                    <div class="d-flex align-items-center">
                                                        <h5 >Know More</h5>
                                                        <div class="oran-line ms-3"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="tab-pane fade" id="3bhk-kanuvai" role="tabpanel" aria-labelledby="3bhk-kanuvai-tab">
                                        <p>Content for 3BHK under KANUVAI</p>
                                    </div> */}
                                    {/* <div class="tab-pane fade" id="plot-kanuvai" role="tabpanel" aria-labelledby="plot-kanuvai-tab">
                                        <p>Content for Plot under KANUVAI</p>
                                    </div> */}
                                </div>
                            </div>

                            {/* <!-- Maniyakarampalayam content --> */}
                            <div class="tab-pane fade" id="MANIYAKARAMPALAYAM" role="tabpanel" aria-labelledby="MANIYAKARAMPALAYAM-tab">
                                {/* <!-- Nested Tabs for 2BHK, 3BHK, and Plot --> */}
                                <ul class="nav nav-pills-3rd-tab-yoga" id="MANIYAKARAMPALAYAMTab" role="tablist">
                                    {/* <li class="nav-item" role="presentation">
                                        <button class="nav-link-2nd-tab-yoga active" id="2bhk-MANIYAKARAMPALAYAM-tab" data-bs-toggle="tab" data-bs-target="#2bhk-MANIYAKARAMPALAYAM" type="button" role="tab" aria-controls="2bhk-MANIYAKARAMPALAYAM" aria-selected="true">2BHK</button>
                                    </li> */}
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link-2nd-tab-yoga active" id="3bhk-MANIYAKARAMPALAYAM-tab" data-bs-toggle="tab" data-bs-target="#3bhk-MANIYAKARAMPALAYAM" type="button" role="tab" aria-controls="3bhk-MANIYAKARAMPALAYAM" aria-selected="false">3BHK</button>
                                    </li>
                                    {/* <li class="nav-item" role="presentation">
                                        <button class="nav-link-2nd-tab-yoga" id="plot-MANIYAKARAMPALAYAM-tab" data-bs-toggle="tab" data-bs-target="#plot-MANIYAKARAMPALAYAM" type="button" role="tab" aria-controls="plot-MANIYAKARAMPALAYAM" aria-selected="false">Plot</button>
                                    </li> */}
                                </ul>

                                {/* <!-- Content for 2BHK, 3BHK, and Plot under KANUVAI --> */}
                                <div class="tab-content" id="MANIYAKARAMPALAYAMTabContent">
                                    {/* <div class="tab-pane fade show active" id="2bhk-MANIYAKARAMPALAYAM" role="tabpanel" aria-labelledby="2bhk-MANIYAKARAMPALAYAM-tab">
                                        Content for 2BHK under KANUVAI
                                        
                                    </div> */}
                                    <div class="tab-pane fade show active" id="3bhk-MANIYAKARAMPALAYAM" role="tabpanel" aria-labelledby="3bhk-MANIYAKARAMPALAYAM-tab">
                                        {/* <p>Content for 3BHK under KANUVAI</p> */}
                                        <div class="cards">
                                            <div class="card-item" onClick={handleOpen6} style={{ cursor: "pointer" }}  >
                                                <div class="card-body">
                                                    <img class="card-img" src={MANIcardimg3bhk1} alt="" />
                                                    <span>2BHK</span>
                                                    <p>2 portions
                                                        1000 x 2 sqft</p>
                                                    <div class="d-flex align-items-center">
                                                        <h5 >Know More</h5>
                                                        <div class="oran-line ms-3"></div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <div class="tab-pane fade" id="plot-MANIYAKARAMPALAYAM" role="tabpanel" aria-labelledby="plot-MANIYAKARAMPALAYAM-tab">
                                        <p>Content for Plot under KANUVAI</p>
                                    </div> */}
                                </div>
                            </div>

                            {/* <!-- Kathirnaikenpalayam content --> */}
                            <div class="tab-pane fade" id="KATHIRNAIKENPALAYAM" role="tabpanel" aria-labelledby="KATHIRNAIKENPALAYAM-tab">
                                {/* <!-- Nested Tabs for 2BHK, 3BHK, and Plot --> */}
                                <ul class="nav nav-pills-3rd-tab-yoga" id="kathirnaikenpalayamTab" role="tablist">
                                    {/* <li class="nav-item" role="presentation">
                                        <button class="nav-link-2nd-tab-yoga active" id="2bhk-kathirnaikenpalayam-tab" data-bs-toggle="tab" data-bs-target="#2bhk-kathirnaikenpalayam" type="button" role="tab" aria-controls="2bhk-kathirnaikenpalayam" aria-selected="true">2BHK</button>
                                    </li> */}
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link-2nd-tab-yoga active" id="3bhk-kathirnaikenpalayam-tab" data-bs-toggle="tab" data-bs-target="#3bhk-kathirnaikenpalayam" type="button" role="tab" aria-controls="3bhk-kathirnaikenpalayam" aria-selected="false">3BHK</button>
                                    </li>
                                    {/* <li class="nav-item" role="presentation">
                                        <button class="nav-link-2nd-tab-yoga" id="plot-kathirnaikenpalayam-tab" data-bs-toggle="tab" data-bs-target="#plot-kathirnaikenpalayam" type="button" role="tab" aria-controls="plot-kathirnaikenpalayam" aria-selected="false">Plot</button>
                                    </li> */}
                                </ul>

                                {/* <!-- Content for 2BHK, 3BHK, and Plot under KATHIRNAIKENPALAYAM --> */}
                                <div class="tab-content" id="kathirnaikenpalayamTabContent">
                                    <div class="tab-pane fade show active" id="2bhk-kathirnaikenpalayam" role="tabpanel" aria-labelledby="2bhk-kathirnaikenpalayam-tab">
                                        {/* Content for 2BHK under KATHIRNAIKENPALAYAM */}
                                        <div class="cards">
                                            <div class="card-item" style={{ cursor: "pointer" }}  >
                                                <div class="card-body">
                                                    <img class="card-img" src={cardimg1kathir3bhk} alt="" />
                                                    <span>3BHK</span>
                                                    <p>2 portions
                                                        1000 x 2 sqft</p>
                                                    <div class="d-flex align-items-center">
                                                        <h5 >Know More</h5>
                                                        <div class="oran-line ms-3"></div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <div class="tab-pane fade" id="3bhk-kathirnaikenpalayam" role="tabpanel" aria-labelledby="3bhk-kathirnaikenpalayam-tab">
                                        <p>Content for 3BHK under KATHIRNAIKENPALAYAM</p>
                                    </div> */}
                                    {/* <div class="tab-pane fade" id="plot-kathirnaikenpalayam" role="tabpanel" aria-labelledby="plot-kathirnaikenpalayam-tab">
                                        <p>Content for Plot under KATHIRNAIKENPALAYAM</p>
                                    </div> */}
                                </div>
                            </div>

                        </div>






                        {/* LOCATIONS Tab Content for Modal */}

                        {/* modal 1 for thoppampatti */}
                        <Modal
                            open={open1}
                            onClose={handleClose1}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className="modal-main-yoga"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    <Carousel style={{ height: "500px", width: "500px" }}>

                                        <Carousel.Item ><img className="d-block" src={thopmodalimg1} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={thopmodalimg2} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={thopmodalimg3} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={thopmodalimg4} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={thopmodalimg5} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={thopmodalimg6} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={thopmodalimg7} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={thopmodalimg8} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={thopmodalimg9} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={thopmodalimg10} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={thopmodalimg11} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={thopmodalimg12} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={thopmodalimg13} alt="First slide" /></Carousel.Item>

                                    </Carousel>
                                    <h1 className="text-center mt-3">OUR WORKS</h1>
                                </Typography>
                            </Box>
                        </Modal>
                        
                        {/* modal 1 for kanuvai */}
                        <Modal
                            open={open2}
                            onClose={handleClose2}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className="modal-main-yoga"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    <Carousel style={{ height: "500px", width: "500px" }}>

                                        <Carousel.Item ><img className="d-block" src={kanumodal1img1} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal1img2} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal1img3} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal1img4} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal1img5} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal1img6} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal1img7} alt="First slide" /></Carousel.Item>

                                    </Carousel>
                                    <h1 className="text-center mt-3">OUR WORKS</h1>
                                </Typography>
                            </Box>
                        </Modal>

                        {/* modal 2 for kanuvai */}
                        <Modal
                            open={open3}
                            onClose={handleClose3}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className="modal-main-yoga"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    <Carousel style={{ height: "500px", width: "500px" }}>

                                        <Carousel.Item ><img className="d-block" src={kanumodal2img1} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal2img2} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal2img3} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal2img4} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal2img5} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal2img6} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal2img7} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal2img8} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal2img9} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal2img10} alt="First slide" /></Carousel.Item>

                                    </Carousel>
                                    <h1 className="text-center mt-3">OUR WORKS</h1>
                                </Typography>
                            </Box>
                        </Modal>

                        {/* modal 3 for kanuvai */}
                        <Modal
                            open={open4}
                            onClose={handleClose4}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className="modal-main-yoga"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    <Carousel style={{ height: "500px", width: "500px" }}>

                                        <Carousel.Item ><img className="d-block" src={kanumodal3img1} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal3img2} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal3img3} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal3img4} alt="First slide" /></Carousel.Item>
                                     

                                    </Carousel>
                                    <h1 className="text-center mt-3">OUR WORKS</h1>
                                </Typography>
                            </Box>
                        </Modal>

                        {/* modal 4 for kanuvai */}
                        <Modal
                            open={open5}
                            onClose={handleClose5}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className="modal-main-yoga"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    <Carousel style={{ height: "500px", width: "500px" }}>

                                        <Carousel.Item ><img className="d-block" src={kanumodal4img1} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal4img2} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal4img3} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal4img4} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal4img5} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal4img6} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={kanumodal4img7} alt="First slide" /></Carousel.Item>
                                     

                                    </Carousel>
                                    <h1 className="text-center mt-3">OUR WORKS</h1>
                                </Typography>
                            </Box>
                        </Modal>

                        {/* modal 1 for manikaranpalayam */}
                        <Modal
                            open={open6}
                            onClose={handleClose6}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className="modal-main-yoga"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    <Carousel style={{ height: "500px", width: "500px" }}>

                                        <Carousel.Item ><img className="d-block" src={manimodal1img1} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={manimodal1img2} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={manimodal1img3} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={manimodal1img4} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={manimodal1img5} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={manimodal1img6} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={manimodal1img7} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={manimodal1img8} alt="First slide" /></Carousel.Item>
                                        <Carousel.Item ><img className="d-block" src={manimodal1img9} alt="First slide" /></Carousel.Item>
                                     

                                    </Carousel>
                                    <h1 className="text-center mt-3">OUR WORKS</h1>
                                </Typography>
                            </Box>
                        </Modal>

                    </div>





                    {/* <!-- Upcoming Tab --> */}
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        {/* <!-- Content for Upcoming Tab --> */}

                        <div class="tab-pane fade show active" id="bhk2" role="tabpanel" aria-labelledby="bhk2-tab">
                            <div class="cards">
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={upcomimg1} alt="" />
                                        <span>2BHK Apartment</span>
                                        <p>Details for 2BHK Apartments...</p>
                                        <div class="d-flex align-items-center">
                                            <h5>Know More</h5>
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
                                        <img class="card-img" src={cardimg1thop} alt="" />
                                        <span>3BHK</span>
                                        <p>THOPPAMPATTI</p>
                                        <div class="d-flex align-items-center">
                                            <h5>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={cardimg2PNP} alt="" />
                                        <span>4BHK</span>
                                        <p>GAS  COMPANY  PERIYANAIKENPALAYAM</p>
                                        <div class="d-flex align-items-center">
                                            <h5>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={cardimg3kathir} alt="" />
                                        <span>4BHK</span>
                                        <p>GAS  COMPANY  PERIYANAIKENPALAYAM</p>
                                        <div class="d-flex align-items-center">
                                            <h5>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={cardimg4nsnp} alt="" />
                                        <span>4BHK</span>
                                        <p>GAS  COMPANY  PERIYANAIKENPALAYAM</p>
                                        <div class="d-flex align-items-center">
                                            <h5>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={cardimg5app} alt="" />
                                        <span>4BHK</span>
                                        <p>GAS  COMPANY  PERIYANAIKENPALAYAM</p>
                                        <div class="d-flex align-items-center">
                                            <h5>Know More</h5>
                                            <div class="oran-line ms-3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-body">
                                        <img class="card-img" src={cardimg6thud} alt="" />
                                        <span>4BHK</span>
                                        <p>GAS  COMPANY  PERIYANAIKENPALAYAM</p>
                                        <div class="d-flex align-items-center">
                                            <h5>Know More</h5>
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
                <div className="col-12" style={{ padding: "60px 0px 10px 0px" }}>
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
                            <h3> ADDRESS</h3>
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
                                <a
                                    href="https://www.facebook.com/yogaproperties?mibextid=LQQJ4d"
                                    className="me-3 col-auto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#838382" }}
                                >
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a
                                    href="https://www.instagram.com/yogaproperty?igsh=dTdwcHcyajdvN3Uy&utm_source=qr"
                                    className="me-3 col-auto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#838382" }}
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a
                                    href="https://x.com/yogaproperties?t=9Abub8p_j71w2wfz3nWBZw&s=09"
                                    className="me-3 col-auto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#838382" }}
                                >
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/yoga-property-154718283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    className="me-3 col-auto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#838382" }}
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a
                                    href="https://youtube.com/@yogaproperty?si=aunGV5pthlI1Kq5V"
                                    className="me-3 col-auto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#838382" }}
                                >
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                                <a
                                    href="mailto:yogaproperty81@gmail.com"
                                    className="me-3 col-auto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#838382" }}
                                >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                                <a
                                    href="https://wa.me/7708871117"
                                    className="me-3 col-auto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: "#838382" }}
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </a>
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
