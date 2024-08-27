/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Meta from '../Components/Meta';
import BreadCrumb from '../Components/BreadCrumb';
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import Container from '../Components/Container';
const Contact = () => {
  return (
    <>
      <Meta title={'Contact'} />
      <BreadCrumb title="Contact" />
      <div className='contact-us'>
        <Container class1='contact-wrapper py-5 home-wrapper-2'>
        
            <div className='col-12'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4672.523170702236!2d105.7198263207131!3d10.007938493764426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08903d92d1d0d%3A0x2c147a40ead97caa!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOYW0gQ-G6p24gVGjGoQ!5e0!3m2!1svi!2s!4v1724503555795!5m2!1svi!2s" 
                width="600" 
                height="450" 
                className='border-0 w-100'
                allowFullScreen="" 
                loading='lazy' 
                referrerPolcy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                    <h3 className='contact-title'>Contact</h3>
                    <form action=''  className='d-flex flex-column gap-15'>
                        <div>
                          <input className='form-control' type='text' placeholder='Enter name...'/>
                        </div>
                        <div>
                          <input className='form-control' type='email' placeholder='Enter email...'/>
                        </div>
                        <div>
                          <input className='form-control' type='tel' placeholder='Enter mobile number...'/>
                        </div>
                        <div>
                         <textarea className='form-control w-100' cols='30' rows='10' name='' id='' placeholder='Enter comments...'></textarea>
                        </div>
                        <div>
                          <button className='button border-0'>Submit</button>
                        </div>
                    </form>
                </div>
                <div>
                    <h3 className='contact-title mb-4'>Get in touch with us</h3>
                    <div>
                      <ul className='ps-0'>
                        <li className='mb-3 d-flex align-items-center gap-15'>
                          <AiOutlineHome className='fs-5'/>
                          <address className='mb-0'>
                            CanTho : Nguyen van cu noi dai street
                          </address>
                        </li>
                        <li className='mb-3 d-flex align-items-center gap-15'>
                          <BiPhoneCall className='fs-5'/>
                          <a href='tel:+84 01112223354'>+84 01112223354</a>
                        </li>
                        <li className='mb-3 d-flex align-items-center gap-15'>
                          <AiOutlineMail className='fs-5'/>
                          <a href='mailto:tomdev@gmail.com'>Tomdev@gmail.com</a>
                        </li>
                        <li className='mb-3 d-flex align-items-center gap-15'>
                          <BiInfoCircle className='fs-5'/>
                          <p className='mb-0'>Monday - Friday 10 AM - 8 PM </p>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
        
        </Container>
      </div>
    </>
  );
}

export default Contact;
