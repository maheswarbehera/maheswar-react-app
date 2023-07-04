import React from 'react';
import contact from '../images/contact.png';
import email from '../images/email.png';
import contactbanner from '../images/contactbanner.png';

function Contact() {
  return (
    <>     
      <div className="contact-page pb-5">
        <div className='py-4'>
        <h2>Contact Us</h2>
        <p class="fs-6">Get In Touch</p>
        </div>
        <div className="row align-items-center ">
            <div className="col-lg-6">
                <img src={contactbanner} alt="" />
            </div>
            <div className="col-lg-6">
                <div className="contact-info">
                    <div className="email d-flex gap-20 align-items-center justify-content-evenly">
                        <div className="icon w-25">
                        <img src={contact} alt="" />
                        </div>
                        <div className="info pt-3">
                            <h5>Email Address:</h5>
                            <p className='fs-6'>maheswar@gmail.com</p>
                        </div>
                    </div>
                    <div className="phone d-flex gap-20 align-items-center justify-content-evenly">
                        <div className="icon w-25">
                            <img src={email} alt="" />
                        </div>
                        <div className="info pt-3">
                            <h5>Phone Number:</h5>
                            <p className='fs-6'>8658279269</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
               
      </div>
    </>
  );
}

export default Contact;
