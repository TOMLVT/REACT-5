import React from 'react'
import Meta from '../Components/Meta'
import BreadCrumb from '../Components/BreadCrumb'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from "react-icons/hi";
const SingleBlog = () => {
  return (
    <>
         <Meta title={'Dynamic Single Blog Name'} />
         <BreadCrumb title='Dynamic Single Blog Name'/>
         <div className='blog-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>
                        <Link to='/blogs' className='d-flex align-items-center gap-10'>
                        <HiOutlineArrowLeft />Go back to blogs</Link>
                            <h3 className='title'>
                                A beautiful sunday morning renaissance
                            </h3>
                            <img src='images/blog-3.webp' alt='blogs' className='img-fluid w-100 my-4'/>
                            <p>  Lorem ipsum dolor sit amet consecture adipisiting elit , Atque quaerat accusamus officia,
                              Lorem ipsum dolor sit amet consecture adipisiting elit , Atque quaerat accusamus officia,  
                              Lorem ipsum dolor sit amet consecture adipisiting elit , Atque quaerat accusamus officia</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </>
  )
}

export default SingleBlog
