import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
            <div className='row align-items-center'>
              <div className='col-5'>
                <div className='footer-top-data d-flex gap-30 align-items-center'>
                  <img src='images/newsletter.png' alt=''/>
                  <h4 className='mb-0 text-white'>Sign Up for Newsletter</h4>
                </div>
              </div>
              <div className='col-7'>
              <div class="input-group">
         <input type="text" class="form-control py-1" placeholder="Your email address..." aria-label="Your email address..." aria-describedby="basic-addon2"/>
            <span class="input-group-text p-2" id="basic-addon2">Subscribe</span>
          </div>
              </div>
            </div>
        </div>
      </footer>
      <footer className='py-4'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-4'>
                <h4 className='text-white mb-4'>Contact Us</h4>
                <div>
                  <address className='text-white fs-6'>
                    CanTho : Nguyen Van Cu Noi Dai - DNC <br/>
                    TP - Can Tho
                  </address>
                  <Link className='mt-4 d-block mb-2 text-white'>
                    0000 - 2222 - 38738234
                  </Link>
                  <Link className='mt-4 d-block mb-2 text-white'>
                    TomDev@gmail.com
                  </Link>
                  <div className='social-icons d-flex gap-15 align-items-center mt-4'>
                     <Link className='text-white'>
                      <FaFacebook className='fs-5'/>
                    </Link>
                    <Link className='text-white'>
                      <FaYoutube className='fs-5'/>
                    </Link>
                    <Link className='text-white'>
                      <FaLinkedin className='fs-5'/>
                    </Link>
                    <Link className='text-white'>
                      <FaInstagram className='fs-5'/>
                    </Link>
                    <Link className='text-white'>
                      <FaGithub className='fs-5'/>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <h4 className='text-white mb-4'>Information</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>Privary Policy</Link>
                  <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                  <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                  <Link className='text-white py-2 mb-1'>Term Of Service</Link>
                  <Link className='text-white py-2 mb-1'>Blogs</Link>
                </div>
              </div>
              <div className='col-3'>
                <h4 className='text-white mb-4'>Account</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>Search</Link>
                  <Link className='text-white py-2 mb-1'>About Us</Link>
                  <Link className='text-white py-2 mb-1'>Faq</Link>
                  <Link className='text-white py-2 mb-1'>Contact</Link>
                  <Link className='text-white py-2 mb-1'>Size Chart</Link>
                </div>
              </div>
              <div className='col-2'>
                <h4 className='text-white mb-4'>Quick Links</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>Laptops</Link>
                  <Link className='text-white py-2 mb-1'>HeadPhones</Link>
                  <Link className='text-white py-2 mb-1'>Tablets</Link>
                  <Link className='text-white py-2 mb-1'>Watch</Link>
                </div>
              </div>
            </div>
          </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>TOM - DEV </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
