import React, { useState } from 'react'
import Meta from '../Components/Meta'
import BreadCrumb from '../Components/BreadCrumb'
import ProductCard from '../Components/ProductCard'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
const SingleProduct = () => {
    const [orderedProduct , setOrderedProduct] = useState(true)
  return (
    <>
        <Meta title={'Product Name'} />
        <BreadCrumb title="Product Name" />
        <div className='main-product-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-6'></div>
                    <div className='col-6'></div>
                </div>
            </div>
        </div>

        <div className='description-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='bg-white p-3'>
                        <h4>Description</h4>
                        <p>
                        It seems there was another issue generating the images. I recommend using tools like Lucidchart, draw.io, or other diagramming software to create the CDM and ERD visuals based on the descriptions provided,It seems there was another issue generating the images. I recommend using tools like Lucidchart, draw.io, or other diagramming software to create the CDM and ERD visuals based on the descriptions provided.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className='reviews-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                       <div className='review-inner-wrapper'>
                       <div className='review-head d-flex justify-content-between align-items-end'>
                            <div>
                                <h4 className='mb-2'>Customer Reviews</h4>
                                <div className='d-flex gap-10 align-items-center'>
                                <ReactStars count={5} size={24} value={3} edit={false} activeColor='#ffd700' />
                                <p className='mb-0'>Based on 2 Reviews</p>
                                </div>
                            </div>
                            {orderedProduct && (
                                <div>
                             
                                <Link  className='text-dark text-decoration-underline'>Write a Reviews</Link>
                                </div>
                            )}
                        </div>
                         <div className='review-form py-4'>
                         <h4>Write a Review</h4>
                            <form action='' className='d-flex flex-column gap-15'>
                            <div>
                            <ReactStars count={5} size={24} value={4} edit={false} activeColor='#ffd700' />
                            </div>
                            <div>
                            <textarea className='form-control w-100' cols='30' rows='4' name='' id='' placeholder='Enter comments...'></textarea>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button className='button border-0'>Submit Review</button>
                            </div>
                            </form>
                         </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='popular-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
          </div>
          <div className='row'>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
           <ProductCard/>
          </div>
        </div>
      </section>

    </>
  )
}

export default SingleProduct
