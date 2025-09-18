import React, { useRef, useState, useEffect } from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightToCity,
  faEnvelope,
  faHouseLaptop,
  faLayerGroup,
  faPeopleRoof,
  faPhone,
  faPuzzlePiece,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'framer-motion';
import YogaForm from './YogaForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Carousel from 'react-bootstrap/Carousel';
import RealEstateImage from '../../RealEstateImage';
import Layout from '../A-LAYOUT-NAV/nav';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  p: 3,
  border: 'none',
  outline: 'none',
  borderRadius: '10px',
};

const YogahomeLanding = () => {
  return (
    <>
      <Layout />

      <Homeyoga />

      <Partner />

      <Whatwedo />

      <Projects />

      <Contactus />
    </>
  );
};

export default YogahomeLanding;

const Homeyoga = () => {
  return (
    <>
      <section id="Homeyoga">
        <RealEstateImage
          src={'/IMAGE/landing-banner-yoga.webp'}
          className="img-fluid"
          style={{ width: '100%', height: '100%' }}
        />
      </section>
    </>
  );
};

const Partner = () => {
  return (
    <>
      <section className="container" id="Partner">
        <div className="row align-items-center trust-partr-sec-div">
          {/* Left side text */}
          <div className="col-lg-10 col-md-6">
            <h2>
              Our Trusted <br />
              <span>Partner</span>
            </h2>
          </div>

          {/* Right side image */}
          <div className="col-lg-2 col-md-6 d-flex justify-content-end">
            <RealEstateImage
              src={'/IMAGE/YOGALOGO-1.webp'}
              alt="trust-partner"
              className="img-fluid"
              style={{ width: '120px', height: '120px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      <section>
        {/* Dream House */}
        <div className="container dream-house-heading">
          <h1>DREAM HOUSE</h1>
        </div>
        {/* mobile image Dream house */}
        <div className="dream-home-mob-img">
          <RealEstateImage
            src={'/IMAGE/index-img-yoga.webp'}
            className="img-fluid "
          />
        </div>
        {/* full contents of Dream house */}
        <section className="section-main-dream-house-yoga">
          <div className="container">
            <div class="wrapper dream-house-yoga">
              <div class="box1"></div>
              <div class="box2"></div>
              <div class="box3"></div>

              <div class="box4">
                <div className="fourth-box-contents">
                  <h3>
                    HOME IS WHERE <br />
                    THE HEART IS
                  </h3>
                  <p className="col-lg-8 mt-3 ">
                    <span>“</span>A home is more than a building—it’s a place of
                    comfort, safety, and belonging. At Yoga Property, a trusted
                    real estate company in Coimbatore, we believe that every
                    home should reflect your lifestyle and values. As
                    experienced property builders and developers, we create
                    residential plots and community projects designed for
                    lasting memories and strong connections. Discover premium
                    properties in Coimbatore that bring together modern living,
                    security, and the joy of owning your dream home.
                    <span>”</span>
                  </p>
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
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // update maxHeight dynamically for smooth open/close
    contentRefs.current.forEach((ref, i) => {
      if (ref) {
        if (openIndex === i) {
          ref.style.maxHeight = ref.scrollHeight + 'px';
        } else {
          ref.style.maxHeight = '0px';
        }
      }
    });
  }, [openIndex]);

  const steps = [
    {
      number: '01',
      title: 'Trusted Real Estate Services with Marketing Expertise',
      content:
        'Beyond property development, we provide real estate marketing services that help showcase projects to the right audience. From digital promotions to sales strategies, our expertise ensures maximum visibility and faster property sales in Coimbatore.',
    },
    {
      number: '02',
      title: 'Why Choose Our Property Builders & Developers in Coimbatore?',
      content:
        'Our team of builders and developers focuses on delivering projects that are not only architecturally strong but also environmentally sustainable. With years of experience, we guarantee transparency, timely delivery, and long-term value for every investment.',
    },
    {
      number: '03',
      title: 'End-to-End Property Solutions – From Planning to Marketing',
      content:
        'We handle everything from project planning, construction, and legal compliance to marketing and sales support. This end-to-end approach makes us the ideal partner for buyers, investors, and landowners looking for reliable property development in Coimbatore.',
    },
    {
      number: '04',
      title: 'Premium Real Estate Projects for Residential & Commercial Needs',
      content:
        'Whether you’re looking for residential plots, luxury apartments, or commercial properties, we design projects that match your requirements. Our focus on location, design, and value ensures every property becomes a worthwhile investment.',
    },
    {
      number: '05',
      title: 'Expert Property Marketing Services to Maximize Your Investment',
      content:
        'With tailored real estate marketing services, we help property owners and developers reach more buyers. Our strategies cover SEO, digital campaigns, and offline promotions to increase sales and ROI in the competitive Coimbatore market.',
    },
  ];

  return (
    <>
      <section id="whatwedo">
        <section className="sec-whatwe-about-yoga">
          <div className="container dream-house-heading">
            <h1>ABOUT US</h1>
          </div>

          <div className="container about-yoga-div">
            <div className="text-div-about-yoga">
              <h2>ABOUT US</h2>
              <p>
                With over 10 years of expertise, Yoga Property has established
                itself as a leading real estate agents in Coimbatore,
                successfully completing 6+ housing community projects in
                Coimbatore and building more than 100 quality homes for 500+
                satisfied customers. As trusted property builders and developers
                in Coimbatore, we specialize in creating sustainable living
                spaces in Coimbatore that enhance both lifestyle and community
                well-being.
              </p>
              <p>
                Our dedicated team ensures a smooth journey—from residential
                plot selection to home construction in Coimbatore—with
                transparency and personalized guidance. By combining innovative
                designs, advanced construction techniques, and premium-quality
                materials, we deliver projects that stand the test of time. At
                Yoga Property, we transform your vision into reality with
                excellence, care, and trust.
              </p>
            </div>
          </div>
        </section>

        <section className="process-accordian-yoga">
          <section className="process">
            <div className="process__container">
              <div className="process__intro intro">
                <h2 className="process__title title">Our Working Process</h2>
              </div>

              <div className="process__accordions">
                <ul className="accordions__list">
                  {steps.map((step, index) => (
                    <li
                      className={`accordions__item ${
                        openIndex === index ? 'open' : ''
                      }`}
                      key={index}
                    >
                      <button
                        className="accordions__control"
                        aria-expanded={openIndex === index}
                        onClick={() => toggleAccordion(index)}
                      >
                        <span className="accordions__number">
                          {step.number}
                        </span>
                        <span className="accordions__title">{step.title}</span>
                        <span className="accordions__icon"></span>
                      </button>

                      <div
                        ref={el => (contentRefs.current[index] = el)}
                        className="accordions__content text"
                        aria-hidden={openIndex !== index}
                      >
                        <p>{step.content}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </section>

        <div class=" sec-whatwedo-yoga">
          <div className="container">
            <div class="row  whatwedo-yoga">
              <div class="col-lg-4 col-md-12 whatwe-yoga-div">
                <h2 style={{ color: '#f5f5f5' }}>WHAT WE DO</h2>

                <div className=" text-div-whatwe-yoga">
                  <p>
                    <FontAwesomeIcon icon={faLayerGroup} className="me-3" />{' '}
                    <span className="whatwetext">V</span>isionary Property
                    Development
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPeopleRoof} className="me-3" />
                    <span className="whatwetext">P</span>romoting & Sales
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowRightToCity}
                      className="me-3"
                    />
                    <span className="whatwetext">M</span>astercrafted
                    Construction Solutions
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPuzzlePiece} className="me-4" />
                    <span className="whatwetext">L</span>uxurious Interior
                    Mastery
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faHouseLaptop} className="me-3" />
                    <span className="whatwetext">N</span>ext-Generation Home
                    Automation
                  </p>
                </div>
              </div>
              <div class="col-lg-8 col-md-12 sec-whatwedo-yoga-img">
                <RealEstateImage
                  src={'/IMAGE/whatwedo=about.webp'}
                  alt="whatwedo=about"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="right-image-left-text-yoga mt-5 mb-5">
          <div className="container">
            <div className="right-text-yoga col-lg-6">
              <p>
                <span>Y</span>oga Property provides expertly developed
                residential plots and customizable Home designs, ensuring a
                seamless experience from Consultation to Construction. Our
                Commitment to sustainability enhances both Community and
                Environment.
              </p>
            </div>
          </div>
          <div className="right-img-yoga order-sm-1">
            <RealEstateImage
              src={'/IMAGE/img-right-yoga.webp'}
              className="img-fluid"
            />
          </div>
        </section>
      </section>
    </>
  );
};

const Projects = () => {
  // modal images onclick function
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
  const [open13, setOpen13] = useState(false);
  const [open14, setOpen14] = useState(false);

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
  const handleOpen7 = () => setOpen7(true);
  const handleClose7 = () => setOpen7(false);
  const handleOpen9 = () => setOpen9(true);
  const handleClose9 = () => setOpen9(false);
  const handleOpen10 = () => setOpen10(true);
  const handleClose10 = () => setOpen10(false);
  const handleOpen11 = () => setOpen11(true);
  const handleClose11 = () => setOpen11(false);
  const handleOpen12 = () => setOpen12(true);
  const handleClose12 = () => setOpen12(false);
  const handleOpen13 = () => setOpen13(true);
  const handleClose13 = () => setOpen13(false);
  const handleOpen14 = () => setOpen14(true);
  const handleClose14 = () => setOpen14(false);

  return (
    <>
      <section className=" tab-section-yoga " id="projects">
        <div className=" dream-house-heading">
          <h1>SWEET HOME</h1>
        </div>
        <div className="tab-heading-yoga">
          <h3>PROJECTS</h3>
        </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              ONGOING
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              UPCOMING
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              COMPLETED
            </button>
          </li>
        </ul>

        <div class="tab-content p-2 mt-4" id="myTabContent">
          {/* <!-- Ongoing Tab with Nested Tabs --> */}

          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            {/* <!-- Nested tabs for 3 LOCATIONS --> */}
            <ul
              class="nav nav-pills-2nd-tab-yoga"
              id="nestedTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link-2nd-tab-yoga active"
                  id="THOPPAMPATTI-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#THOPPAMPATTI"
                  type="button"
                  role="tab"
                  aria-controls="THOPPAMPATTI"
                  aria-selected="false"
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="me-3"
                    style={{ fontSize: '20px' }}
                  />
                  THOPPAMPATTI
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link-2nd-tab-yoga"
                  id="KANUVAI-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#KANUVAI"
                  type="button"
                  role="tab"
                  aria-controls="KANUVAI"
                  aria-selected="false"
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="me-3"
                    style={{ fontSize: '20px' }}
                  />
                  KANUVAI
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link-2nd-tab-yoga"
                  id="MANIYAKARAMPALAYAM-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#MANIYAKARAMPALAYAM"
                  type="button"
                  role="tab"
                  aria-controls="MANIYAKARAMPALAYAM"
                  aria-selected="false"
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="me-3"
                    style={{ fontSize: '20px' }}
                  />
                  MANIYAKARAMPALAYAM
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link-2nd-tab-yoga"
                  id="KATHIRNAIKENPALAYAM-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#KATHIRNAIKENPALAYAM"
                  type="button"
                  role="tab"
                  aria-controls="KATHIRNAIKENPALAYAM"
                  aria-selected="false"
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="me-3"
                    style={{ fontSize: '20px' }}
                  />
                  KATHIRNAIKENPALAYAM
                </button>
              </li>
            </ul>

            {/* <!-- Tab content for 3 LOCATIONS --> */}
            <div class="tab-content mt-4" id="nestedTabContent">
              {/* <!-- THOPPAMPATTI content --> */}
              <div
                class="tab-pane fade show active"
                id="THOPPAMPATTI"
                role="tabpanel"
                aria-labelledby="THOPPAMPATTI-tab"
              >
                {/* <!-- Nested Tabs for 2BHK, 3BHK, and Plot --> */}
                <ul
                  class="nav nav-pills-3rd-tab-yoga"
                  id="thoppamTab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link-2nd-tab-yoga active"
                      id="3bhk-thoppam-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#3bhk-thoppam"
                      type="button"
                      role="tab"
                      aria-controls="3bhk-thoppam"
                      aria-selected="false"
                    >
                      3BHK
                    </button>
                  </li>
                </ul>

                {/* <!-- Content for 2BHK, 3BHK, and Plot under THOPPAMPATTI --> */}
                <div class="tab-content" id="thoppamTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="3bhk-thoppam"
                    role="tabpanel"
                    aria-labelledby="3bhk-thoppam-tab"
                  >
                    {/* Content for 3BHK under THOPPAMPATTI */}
                    <div class="cards">
                      <div
                        class="card-item"
                        onClick={handleOpen1}
                        style={{ cursor: 'pointer' }}
                      >
                        <div class="card-body">
                          <RealEstateImage
                            class="card-img"
                            src={'/IMAGE/thoppampatti/3bhk-image-1.webp'}
                            alt=""
                          />
                          <span>Phase - 2</span>
                          <p>Details for Plots...</p>
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

              {/* <!-- KANUVAI content --> */}
              <div
                class="tab-pane fade"
                id="KANUVAI"
                role="tabpanel"
                aria-labelledby="KANUVAI-tab"
              >
                {/* <!-- Nested Tabs for 2BHK, 3BHK, and Plot --> */}
                <ul
                  class="nav nav-pills-3rd-tab-yoga"
                  id="kanuvaiTab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link-2nd-tab-yoga active"
                      id="2bhk-kanuvai-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#2bhk-kanuvai"
                      type="button"
                      role="tab"
                      aria-controls="2bhk-kanuvai"
                      aria-selected="true"
                    >
                      2BHK
                    </button>
                  </li>
                </ul>

                {/* <!-- Content for 2BHK, 3BHK, and Plot under KANUVAI --> */}
                <div class="tab-content" id="kanuvaiTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="2bhk-kanuvai"
                    role="tabpanel"
                    aria-labelledby="2bhk-kanuvai-tab"
                  >
                    {/* Content for 2BHK under KANUVAI */}
                    <div class="cards">
                      <div
                        class="card-item"
                        onClick={handleOpen2}
                        style={{ cursor: 'pointer' }}
                      >
                        <div class="card-body">
                          <RealEstateImage
                            class="card-img"
                            src={'/IMAGE/kanuvai/card-image-2bhk-1.webp'}
                            alt=""
                          />
                          <span>2BHK</span>
                          <p>2 portions 1000 x 2 sqft</p>
                          <div class="d-flex align-items-center">
                            <h5>Know More</h5>
                            <div class="oran-line ms-3"></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="card-item"
                        onClick={handleOpen3}
                        style={{ cursor: 'pointer' }}
                      >
                        <div class="card-body">
                          <RealEstateImage
                            class="card-img"
                            src={'/IMAGE/kanuvai/card-image-2bhk-4.webp'}
                            alt=""
                          />
                          <span>2BHK</span>
                          <p>2 portions 1000 x 2 sqft</p>
                          <div class="d-flex align-items-center">
                            <h5>Know More</h5>
                            <div class="oran-line ms-3"></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="card-item"
                        onClick={handleOpen4}
                        style={{ cursor: 'pointer' }}
                      >
                        <div class="card-body">
                          <RealEstateImage
                            class="card-img"
                            src={'/IMAGE/kanuvai/card-image-2bhk-3.webp'}
                            alt=""
                          />
                          <span>2BHK</span>
                          <p>2 portions 1000 x 2 sqft</p>
                          <div class="d-flex align-items-center">
                            <h5>Know More</h5>
                            <div class="oran-line ms-3"></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="card-item"
                        onClick={handleOpen5}
                        style={{ cursor: 'pointer' }}
                      >
                        <div class="card-body">
                          <RealEstateImage
                            class="card-img"
                            src={'/IMAGE/kanuvai/card-image-2bhk-2.webp'}
                            alt=""
                          />
                          <span>2BHK</span>
                          <p>2 portions 1000 x 2 sqft</p>
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

              {/* <!-- Maniyakarampalayam content --> */}
              <div
                class="tab-pane fade"
                id="MANIYAKARAMPALAYAM"
                role="tabpanel"
                aria-labelledby="MANIYAKARAMPALAYAM-tab"
              >
                {/* <!-- Nested Tabs for 2BHK, 3BHK, and Plot --> */}
                <ul
                  class="nav nav-pills-3rd-tab-yoga"
                  id="MANIYAKARAMPALAYAMTab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link-2nd-tab-yoga active"
                      id="3bhk-MANIYAKARAMPALAYAM-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#3bhk-MANIYAKARAMPALAYAM"
                      type="button"
                      role="tab"
                      aria-controls="3bhk-MANIYAKARAMPALAYAM"
                      aria-selected="false"
                    >
                      3BHK
                    </button>
                  </li>
                </ul>

                {/* <!-- Content for 2BHK, 3BHK, and Plot under KANUVAI --> */}
                <div class="tab-content" id="MANIYAKARAMPALAYAMTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="3bhk-MANIYAKARAMPALAYAM"
                    role="tabpanel"
                    aria-labelledby="3bhk-MANIYAKARAMPALAYAM-tab"
                  >
                    {/* <p>Content for 3BHK under KANUVAI</p> */}
                    <div class="cards">
                      <div
                        class="card-item"
                        onClick={handleOpen6}
                        style={{ cursor: 'pointer' }}
                      >
                        <div class="card-body">
                          <RealEstateImage
                            class="card-img"
                            src={
                              '/IMAGE/MANIKARANPALAYAM/CARD-FRONT-IMAGE-1-MANI.webp'
                            }
                            alt=""
                          />
                          <span>2BHK</span>
                          <p>2 portions 1000 x 2 sqft</p>
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

              {/* <!-- Kathirnaikenpalayam content --> */}
              <div
                class="tab-pane fade"
                id="KATHIRNAIKENPALAYAM"
                role="tabpanel"
                aria-labelledby="KATHIRNAIKENPALAYAM-tab"
              >
                {/* <!-- Nested Tabs for 2BHK, 3BHK, and Plot --> */}
                <ul
                  class="nav nav-pills-3rd-tab-yoga"
                  id="kathirnaikenpalayamTab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link-2nd-tab-yoga active"
                      id="3bhk-kathirnaikenpalayam-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#3bhk-kathirnaikenpalayam"
                      type="button"
                      role="tab"
                      aria-controls="3bhk-kathirnaikenpalayam"
                      aria-selected="false"
                    >
                      3BHK
                    </button>
                  </li>
                </ul>

                {/* <!-- Content for 2BHK, 3BHK, and Plot under KATHIRNAIKENPALAYAM --> */}
                <div class="tab-content" id="kathirnaikenpalayamTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="2bhk-kathirnaikenpalayam"
                    role="tabpanel"
                    aria-labelledby="2bhk-kathirnaikenpalayam-tab"
                  >
                    {/* Content for 2BHK under KATHIRNAIKENPALAYAM */}
                    <div class="cards">
                      <div
                        class="card-item"
                        onClick={handleOpen7}
                        style={{ cursor: 'pointer' }}
                      >
                        <div class="card-body">
                          <RealEstateImage
                            class="card-img"
                            src={
                              '/IMAGE/kathirnaikenpalayam/card-img-kahtir-3bhk-1.webp'
                            }
                            alt=""
                          />
                          <span>3BHK</span>
                          <p>2 portions 1000 x 2 sqft</p>
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
            </div>
          </div>

          {/* <!-- Upcoming Tab --> */}
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            {/* <!-- Content for Upcoming Tab --> */}
            <ul
              class="nav nav-pills-2nd-tab-yoga"
              id="nestedTab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link-2nd-tab-yoga active"
                  id="KANUVAI-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#KANUVAI"
                  type="button"
                  role="tab"
                  aria-controls="KANUVAI"
                  aria-selected="false"
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="me-3"
                    style={{ fontSize: '20px' }}
                  />
                  IDIKARAI
                </button>
              </li>
            </ul>

            <div
              class="tab-pane fade show active"
              id="bhk2"
              role="tabpanel"
              aria-labelledby="bhk2-tab"
            >
              <div class="cards">
                <div class="card-item" style={{ cursor: 'pointer' }}>
                  <div class="card-body">
                    <RealEstateImage
                      class="card-img"
                      src={'/IMAGE/upcoming/Upcoming Plot Idigarai.webp'}
                      alt=""
                    />
                    <span>PLOTS</span>
                    <p>Details for 2BHK Apartments...</p>
                  </div>
                </div>
                <div class="card-item" style={{ cursor: 'pointer' }}>
                  <div class="card-body">
                    <RealEstateImage
                      class="card-img"
                      src={'/IMAGE/upcoming/Upcoming Plot Idigarai-2.webp'}
                      alt=""
                    />
                    <span>VILLAS - 2BHK</span>
                    <p>Details for 2BHK Apartments...</p>
                  </div>
                </div>
                <div class="card-item" style={{ cursor: 'pointer' }}>
                  <div class="card-body">
                    <RealEstateImage
                      class="card-img"
                      src={'/IMAGE/upcoming/Upcoming Plot Idigarai-3.webp'}
                      alt=""
                    />
                    <span>VILLAS - 3BHK</span>
                    <p>Details for 3BHK Apartments...</p>
                  </div>
                </div>
                <div class="card-item" style={{ cursor: 'pointer' }}>
                  <div class="card-body">
                    <RealEstateImage
                      class="card-img"
                      src={'/IMAGE/upcoming/Upcoming Plot Idigarai-4.webp'}
                      alt=""
                    />
                    <span>VILLAS - 4BHK</span>
                    <p>Details for 4BHK Apartments...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Completed Tab --> */}
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            {/* <!-- Content for Completed Tab --> */}

            <div
              class="tab-pane fade show active"
              id="bhk2"
              role="tabpanel"
              aria-labelledby="bhk2-tab"
            >
              <div class="cards">
                <div class="card-item" onClick={handleOpen9}>
                  <div class="card-body">
                    <RealEstateImage
                      class="card-img"
                      style={{ cursor: 'pointer' }}
                      src={'/IMAGE/completed/card-img-1-thoppampatti.webp'}
                      alt=""
                    />
                    <span>3BHK</span>
                    <p>THOPPAMPATTI</p>
                    <div class="d-flex align-items-center">
                      <h5>Know More</h5>
                      <div class="oran-line ms-3"></div>
                    </div>
                  </div>
                </div>
                <div class="card-item" onClick={handleOpen10}>
                  <div class="card-body">
                    <RealEstateImage
                      class="card-img"
                      style={{ cursor: 'pointer' }}
                      src={'/IMAGE/completed/card-img-2-PNP.webp'}
                      alt=""
                    />
                    <span>4BHK</span>
                    <p>GAS COMPANY PERIYANAIKENPALAYAM</p>
                    <div class="d-flex align-items-center">
                      <h5>Know More</h5>
                      <div class="oran-line ms-3"></div>
                    </div>
                  </div>
                </div>
                <div class="card-item" onClick={handleOpen11}>
                  <div class="card-body">
                    <RealEstateImage
                      class="card-img"
                      style={{ cursor: 'pointer' }}
                      src={'/IMAGE/completed/card-img-3-kathir.webp'}
                      alt=""
                    />
                    <span>3BHK</span>
                    <p>KATHIRNAIKENPALAYAM</p>
                    <div class="d-flex align-items-center">
                      <h5>Know More</h5>
                      <div class="oran-line ms-3"></div>
                    </div>
                  </div>
                </div>
                <div class="card-item" onClick={handleOpen12}>
                  <div class="card-body">
                    <RealEstateImage
                      class="card-img"
                      style={{ cursor: 'pointer' }}
                      src={'/IMAGE/completed/card-img-4-nsnpalaym.webp'}
                      alt=""
                    />
                    <span>4BHK</span>
                    <p>NARASIMHANAIKENPALAYAM</p>
                    <div class="d-flex align-items-center">
                      <h5>Know More</h5>
                      <div class="oran-line ms-3"></div>
                    </div>
                  </div>
                </div>
                <div class="card-item" onClick={handleOpen13}>
                  <div class="card-body">
                    <RealEstateImage
                      class="card-img"
                      style={{ cursor: 'pointer' }}
                      src={'/IMAGE/completed/card-img-5-apppalaym.webp'}
                      alt=""
                    />
                    <span>3BHK</span>
                    <p>APPNAIKENPALAYAM</p>
                    <div class="d-flex align-items-center">
                      <h5>Know More</h5>
                      <div class="oran-line ms-3"></div>
                    </div>
                  </div>
                </div>
                <div class="card-item" onClick={handleOpen14}>
                  <div class="card-body">
                    <RealEstateImage
                      class="card-img"
                      style={{ cursor: 'pointer' }}
                      src={'/IMAGE/completed/card-img-6-thudiyalur.webp'}
                      alt=""
                    />
                    <span>5BHK</span>
                    <p>THUDIYALUR</p>
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
      </section>

      {/* LOCATIONS Tab Content for Modal */}

      {/* ongoing */}
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
            <Carousel>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/2.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/3.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/4.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/5.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/6.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/7.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/8.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/9.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/10.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/11.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/12.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/13.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/thoppampatti/Ongoing 3bhk   Thoppamppati/14.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
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
            <Carousel>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai/2.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai/3.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai/4.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai/5.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai/6.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai/7.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai/8.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
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
            <Carousel>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/2.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/3.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/4.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/5.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/6.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/7.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/8.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/9.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/10.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 2/11.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
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
            <Carousel>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 3/2.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 3/3.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 3/4.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 3/5.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
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
            <Carousel>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 4/2.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 4/3.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 4/4.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 4/5.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 4/6.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 4/7.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={'/IMAGE/kanuvai/Ongoing 2bhk   Kanuvai - 4/8.webp'}
                  alt="First slide"
                />
              </Carousel.Item>
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
            <Carousel>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/2.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/3.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/4.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/5.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/6.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/7.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/8.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/9.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/MANIKARANPALAYAM/Ongoing 3bhk   Maniyakarampalayam -1/10.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
            <h1 className="text-center mt-3">OUR WORKS</h1>
          </Typography>
        </Box>
      </Modal>

      {/* modal 1 for kathirnaikenpalayam */}
      <Modal
        open={open7}
        onClose={handleClose7}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-main-yoga"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Carousel>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/kathirnaikenpalayam/Ongoing 3bhk   Kathirnaikenpalayam - 1/2.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/kathirnaikenpalayam/Ongoing 3bhk   Kathirnaikenpalayam - 1/3.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/kathirnaikenpalayam/Ongoing 3bhk   Kathirnaikenpalayam - 1/4.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/kathirnaikenpalayam/Ongoing 3bhk   Kathirnaikenpalayam - 1/5.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/kathirnaikenpalayam/Ongoing 3bhk   Kathirnaikenpalayam - 1/6.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/kathirnaikenpalayam/Ongoing 3bhk   Kathirnaikenpalayam - 1/7.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/kathirnaikenpalayam/Ongoing 3bhk   Kathirnaikenpalayam - 1/8.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/kathirnaikenpalayam/Ongoing 3bhk   Kathirnaikenpalayam - 1/9.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/kathirnaikenpalayam/Ongoing 3bhk   Kathirnaikenpalayam - 1/10.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/kathirnaikenpalayam/Ongoing 3bhk   Kathirnaikenpalayam - 1/11.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
            <h1 className="text-center mt-3">OUR WORKS</h1>
          </Typography>
        </Box>
      </Modal>

      {/* UPCOMING */}
      {/* modal 1 for IDIKARAI */}

      {/* COMPLETED */}
      {/* MODAL 1 FOR THOPPAMPATTI */}
      <Modal
        open={open9}
        onClose={handleClose9}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-main-yoga"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Carousel>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk   Thoppamppatti -1/2.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk   Thoppamppatti -1/3.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk   Thoppamppatti -1/4.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk   Thoppamppatti -1/5.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk   Thoppamppatti -1/6.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk   Thoppamppatti -1/7.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk   Thoppamppatti -1/8.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk   Thoppamppatti -1/9.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk   Thoppamppatti -1/10.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
            <h1 className="text-center mt-3">OUR WORKS</h1>
          </Typography>
        </Box>
      </Modal>

      {/* MODAL 2 FOR periyanaickenpalayam */}
      <Modal
        open={open10}
        onClose={handleClose10}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-main-yoga"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Carousel>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/2.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/3.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/4.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/5.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/6.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/7.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/8.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/9.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/10.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/11.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/12.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/13.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/14.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/15.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/16.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk gas  Company  Periyanaikenpalayam -2/17.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
            <h1 className="text-center mt-3">OUR WORKS</h1>
          </Typography>
        </Box>
      </Modal>

      {/* MODAL 3 FOR KATHIRNAIKENPALYAM */}
      <Modal
        open={open11}
        onClose={handleClose11}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-main-yoga"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Carousel>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk   Kathirnaikenpalayam - 3/2.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk   Kathirnaikenpalayam - 3/3.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk   Kathirnaikenpalayam - 3/4.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk   Kathirnaikenpalayam - 3/5.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk   Kathirnaikenpalayam - 3/6.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
            <h1 className="text-center mt-3">OUR WORKS</h1>
          </Typography>
        </Box>
      </Modal>

      {/* MODAL 4 FOR Narasimhanaikenpalayam */}
      <Modal
        open={open12}
        onClose={handleClose12}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-main-yoga"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Carousel>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk   Narasimhanaikenpalayam - 4/2.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk   Narasimhanaikenpalayam - 4/3.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk   Narasimhanaikenpalayam - 4/4.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk   Narasimhanaikenpalayam - 4/5.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk   Narasimhanaikenpalayam - 4/6.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk   Narasimhanaikenpalayam - 4/7.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk   Narasimhanaikenpalayam - 4/8.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk   Narasimhanaikenpalayam - 4/9.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 4bhk   Narasimhanaikenpalayam - 4/10.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
            <h1 className="text-center mt-3">OUR WORKS</h1>
          </Typography>
        </Box>
      </Modal>

      {/* MODAL 5 FOR APPNAIKENPALAYAM */}
      <Modal
        open={open13}
        onClose={handleClose13}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-main-yoga"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Carousel>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk Appnaikenpalayam - 5/2.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk Appnaikenpalayam - 5/3.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk Appnaikenpalayam - 5/4.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 3bhk Appnaikenpalayam - 5/5.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
            <h1 className="text-center mt-3">OUR WORKS</h1>
          </Typography>
        </Box>
      </Modal>

      {/* MODAL 5 FOR APPNAIKENPALAYAM */}
      <Modal
        open={open14}
        onClose={handleClose14}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-main-yoga"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Carousel>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 5bhk Thudiyalur,Karvy Garden - 6/2.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 5bhk Thudiyalur,Karvy Garden - 6/3.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 5bhk Thudiyalur,Karvy Garden - 6/4.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 5bhk Thudiyalur,Karvy Garden - 6/5.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 5bhk Thudiyalur,Karvy Garden - 6/6.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 5bhk Thudiyalur,Karvy Garden - 6/7.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 5bhk Thudiyalur,Karvy Garden - 6/8.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <RealEstateImage
                  className="d-block"
                  src={
                    '/IMAGE/completed/Completed 5bhk Thudiyalur,Karvy Garden - 6/9.webp'
                  }
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
            <h1 className="text-center mt-3">OUR WORKS</h1>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

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
        <div className="container text-div-about-yoga ">
          <div className="container dream-house-heading text-center mt-3">
            <h1>CONTACT US</h1>
          </div>
          <p className="text-center">
            Please contact us for any question or request you may have, through
            this form.
            <br /> Your request will be processed by our staff and we will get
            back to you as soon as possible.
          </p>
        </div>

        <div className="d-flex justfy-content-center align-items-center">
          <YogaForm />
        </div>
      </section>

      <section
        className="container-fluid footer-yoga"
        style={{ background: 'rgba(237, 114, 53, 0.15)' }}
      >
        <div className="col-12" style={{ padding: '60px 0px 10px 0px' }}>
          <div className="row">
            <div
              ref={ref1}
              className="col-lg-3 footer-logo-yoga mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <RealEstateImage
                src={'/IMAGE/OMSAKTHI-2.webp'}
                className="img-fluid"
                style={{ height: '170px' }}
              />
            </div>

            <div
              ref={ref2}
              className="col-lg-2 footer-corp-yoga mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h3> ADDRESS</h3>
              <p className="mt-3">
                #7/7 Mettupalayam main road,
                <br />
                Opposite vinayagar temple,
                <br />
                Narasimhanaickenpalayam,
                <br />
                Coimbatore - 641031.
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                yogaproperty@gmail.com
              </p>
              <button
                type="button"
                className="btn btn-outline-warning yoga-footer-call-btn mt-3"
              >
                <FontAwesomeIcon icon={faPhone} className="me-3" />
                7708871117
              </button>
            </div>

            <div
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
            </div>

            <div
              ref={ref4}
              className="col-lg-2 footer-followus-yoga mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <h3>FOLLOW US</h3>
              <div className="d-flex mt-3">
                <a
                  href="https://www.facebook.com/yogaproperties?mibextid=LQQJ4d"
                  className="me-3 col-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#838382' }}
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.instagram.com/yogaproperty?igsh=dTdwcHcyajdvN3Uy&utm_source=qr"
                  className="me-3 col-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#838382' }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://x.com/yogaproperties?t=9Abub8p_j71w2wfz3nWBZw&s=09"
                  className="me-3 col-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#838382' }}
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yoga-property-154718283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="me-3 col-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#838382' }}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://youtube.com/@yogaproperty?si=aunGV5pthlI1Kq5V"
                  className="me-3 col-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#838382' }}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  href="mailto:yogaproperty81@gmail.com"
                  className="me-3 col-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#838382' }}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                  href="https://wa.me/7708871117"
                  className="me-3 col-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#838382' }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>

            <div
              ref={ref1}
              className="col-lg-3 footer-logo-yoga mb-3"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <RealEstateImage
                src={'/IMAGE/YOGALOGO-1.webp'}
                className="img-fluid"
                style={{ height: '170px' }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
