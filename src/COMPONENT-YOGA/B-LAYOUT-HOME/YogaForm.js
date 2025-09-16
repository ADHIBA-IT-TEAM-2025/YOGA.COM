import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './YogaForm.css'



const YogaForm = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    classType: '',
    level: ''
  });
  const handleSelect = (value) => {
    setFormData({
      ...formData,
      classType: value
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0rwu3kg', 'template_n17ctb9', e.target, 'x4nB4JkgGQeWDbk1z')
      .then((result) => {
        alert('Form sent successfully!');
      }, (error) => {
        alert('Error sending form:', error.text);
      });
  };


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={isMobile ? '/IMAGE/form-yoga.webp' : '/IMAGE/form-yoga.webp'}
              alt="img"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 mt-5">
            <span className="">
              {' '}
              <span style={{ color: '#ED7235', fontSize: '1.25em' }}>
                P&nbsp;
              </span>
              lease, fill in the form and then Click the Send button. <br />
              Marked <span className="required">*</span> are mandatory fields
            </span>
            <form onSubmit={sendEmail} className="d-flex flex-column mt-3 ">
              <div className="form-group col-lg-6 ">
                <label className="mb-2">
                  {' '}
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control mb-3"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Eg: kirshnapradaap"
                  required
                />
              </div>
              <div className="form-group col-lg-6 ">
                <label className="mb-2">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control mb-3"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Eg: yogaproperty@gmail.com"
                />
              </div>
              <div className="form-group col-lg-6  ">
                <label className="mb-2">
                  Phone <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  name="number"
                  className="form-control mb-3"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  placeholder="Eg: 9999999999"
                />
              </div>
              <div className="form-group col-lg-6 mt-3">
                <label className="mb-2">What are you looking for?</label>
                <div className="d-flex justify-content-between mb-3">
                  <label className="custom-radio d-flex align-items-center">
                    <input
                      type="radio"
                      name="level"
                      value="2BHK"
                      checked={formData.level === '2BHK'}
                      onChange={handleChange}
                      required
                    />
                    <span>2BHK</span>
                  </label>

                  <label className="custom-radio d-flex align-items-center">
                    <input
                      type="radio"
                      name="level"
                      value="3BHK"
                      checked={formData.level === '3BHK'}
                      onChange={handleChange}
                      required
                    />
                    <span>3BHK</span>
                  </label>

                  <label className="custom-radio d-flex align-items-center">
                    <input
                      type="radio"
                      name="level"
                      value="Plots"
                      checked={formData.level === 'Plots'}
                      onChange={handleChange}
                      required
                    />
                    <span>Plots</span>
                  </label>
                </div>
              </div>

              <div className="custom-dropdown col-lg-6 mt-3">
                <div className="custom-select">
                  <div
                    className="selected-option"
                    style={{
                      color: formData.classType ? 'black' : '#bbbbbb', // Change "red" to your desired color
                    }}
                  >
                    {formData.classType || 'Location*'}
                  </div>

                  <ul className="options-list">
                    <li onClick={() => handleSelect('Coimbatore')}>
                      Coimbatore
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hidden input field to capture classType */}
              <input
                type="hidden"
                name="classType"
                value={formData.classType}
              />
              <button type="submit" className="button-yoga mt-3">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default YogaForm;
