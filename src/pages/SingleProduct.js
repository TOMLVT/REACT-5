import React, { useState } from 'react'
import Meta from '../Components/Meta'
import BreadCrumb from '../Components/BreadCrumb'
import ProductCard from '../Components/ProductCard'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import ReactImageZoom from 'react-image-zoom';
import Color from '../Components/Color';
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from '../Components/Container';
const SingleProduct = () => {
    const props = {width: 400, height: 500, zoomWidth: 600, img: "https://bazaarvietnam.vn/wp-content/uploads/2020/09/dong-ho-rolex-rainbow-daytona-sapphire-bezel.jpg"};
    const [orderedProduct , setOrderedProduct] = useState(true)
  const  copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
  return (
    <>
        <Meta title={'Product Name'} />
        <BreadCrumb title="Product Name" />
        <Container class1='main-product-wrapper py-5 home-wrapper-2'>
           
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div>
                                <ReactImageZoom {...props}/>
                            </div>
                        </div>
                        <div className='other-product-images d-flex flex-wrap gap-15'>
                            <div>
                                <img src='https://bazaarvietnam.vn/wp-content/uploads/2020/09/dong-ho-rolex-rainbow-daytona-sapphire-bezel.jpg' alt='img' className='img-fluid'/>
                            </div>
                            <div>
                                <img src='https://bazaarvietnam.vn/wp-content/uploads/2020/09/dong-ho-rolex-rainbow-daytona-sapphire-bezel.jpg' alt='img' className='img-fluid'/>
                            </div>
                            <div>
                                <img src='https://bazaarvietnam.vn/wp-content/uploads/2020/09/dong-ho-rolex-rainbow-daytona-sapphire-bezel.jpg' alt='img' className='img-fluid'/>
                            </div>
                            <div>
                                <img src='https://bazaarvietnam.vn/wp-content/uploads/2020/09/dong-ho-rolex-rainbow-daytona-sapphire-bezel.jpg' alt='img' className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                         <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>
                                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                                </h3>
                            </div>

                            <div className='border-bottom py-3'>
                                <p className='price'>$ 100</p>
                                <div className='d-flex align-items-center gap-10'>
                                <ReactStars count={5} size={24} value={3} edit={false} activeColor='#ffd700' />
                                <p className='mb-0'>(2 Reviews)</p>
                                </div>
                                <a href='#review' style={{textDecoration: 'none'}} className='review-btn'>Write a Review</a>
                            </div>

                            <div className='border-bottom py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Type</h3>
                                    <p className='product-data'>Headset</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Brand</h3>
                                <p className='product-data'>Havels</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Category</h3>
                                <p className='product-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Tags</h3>
                                <p className='product-data'>GFd</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                <h3 className='product-heading'>Availality</h3>
                                <p className='product-data'>In Stock</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                <h3 className='product-heading'>Size :</h3>
                               <div className='d-flex flex-wrap gap-15'>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                               </div>
                                </div>

                                <div className='d-flex gap-10 flex-column my-2'>
                                <h3 className='product-heading'>Color :</h3>
                                <Color/>
                                </div>
                                <div className='d-flex align-items-center  gap-30 flex-row mt-2'>
                                <h3 className='product-heading'>Quantity :</h3>
                                <div>
                                    <input type='number' name='' min={1} max={10} className='form-control' style={{width: '70px'}} id=''/>
                                </div>
                                <div className='d-flex align-items-center gap-30 ms-5'>
                                <button className='button border-0' type='submit'>Add to Cart</button>
                                <button className='button signup'>Buy It Now</button>
                                </div>
                                </div>
                                <div className='d-flex align-items-center gap-15 mt-2'>
                                  <div>
                                    <a href=''>
                                    <TbGitCompare className='fs-5'/>Add to Compare
                                    </a>
                                  </div>
                                  <div>
                                    <a href=''>
                                    <AiOutlineHeart className='fs-5'/> Add to Wishlist
                                    </a>
                                  </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-2'>
                                    <h3 className='product-heading'>Shipping & Return : </h3>
                                    <p className='product-data'>Free Shipping and return avaible on all orders ! We shipping all US dometric order within
                                     <b>5-10 business days !</b>
                                    </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Copy Product Link:</h3>
                                    <a href='javascript:void(0);' onClick={() => {

                                    copyToClipboard('https://bazaarvietnam.vn/wp-content/uploads/2020/09/dong-ho-rolex-rainbow-daytona-sapphire-bezel.jpg'
                                    )
                                    }}> Copy Product Link</a>
                                </div>
                            </div>

                         </div>
                    </div>
                </div>
           
        </Container>

        <Container class1='description-wrapper py-5 home-wrapper-2'>
           
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description</h4>
                        <div className='bg-white p-3'>
                        <p>
                        It seems there was another issue generating the images. I recommend using tools like Lucidchart, draw.io, or other diagramming software to create the CDM and ERD visuals based on the descriptions provided,It seems there was another issue generating the images. I recommend using tools like Lucidchart, draw.io, or other diagramming software to create the CDM and ERD visuals based on the descriptions provided.
                        </p>
                        </div>
                    </div>
                </div>
          
        </Container>

        <Container class1='reviews-wrapper py-5 home-wrapper-2'>
          
                <div className='row'>
                    <div className='col-12'>
                    <h4> Reviews</h4>
                       <div className='review-inner-wrapper'>
                       <div className='review-head d-flex justify-content-between align-items-end'>
                            <div>
                                <h4 className='mb-2' id='review'>Customer Reviews</h4>
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
                         <div className='reviews mt-3'>
                            <div className='review'>
                            <div className='d-flex align-items-center gap-10'>
                                <h6 className='mb-0'>NavDeep</h6>
                                <ReactStars count={5} size={24} value={4} edit={false} activeColor='#ffd700' />
                            </div>
                          
                            <p className='mt-3'>  It seems there was another issue generating the images. I recommend using tools like Lucidchart, draw.io, or other diagramming software to create the CDM and ERD visuals based on the descriptions provided,It seems there was another issue generating the images. I recommend using tools like Lucidchart, draw.io, or other diagramming software to create the CDM and ERD visuals based on the descriptions provided.</p>
                            </div>
                         </div>
                       </div>
                    </div>
                </div>
           
        </Container>

        <Container class1='popular-wrapper home-wrapper-2 py-5'>
       
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
       
      </Container>

    </>
  )
}

export default SingleProduct
