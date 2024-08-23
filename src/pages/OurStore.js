import React, { useState } from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Meta from '../Components/Meta'
import ReactStars from 'react-rating-stars-component'
import ProductCard from '../Components/ProductCard'
const OurStore = () => {
    const [grid , setGrid] = useState(4)
 
  return (
    <>
        <Meta title={'Our Store'}/>
        <BreadCrumb title="Our Store"/>
        <div className='store-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                    <div className='filter-card mb-3'>                      
                            <h3 className='filter-title'>Shop By Categories</h3>     
                            <div>
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>              
                    </div>
                    <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Filter By</h3>  
                    <div>
                        <h5 className='sub-title'>Availablity</h5>
                        <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id=''/>
                        <label className='form-check-label' htmlFor=''>In Stock (1)</label>
                        </div>
                        <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id=''/>
                        <label className='form-check-label' htmlFor=''>Out of Stock (2)</label>
                        </div>
                        <h5 className='sub-title'>Price</h5>
                        <div className='d-flex align-items-center gap-10'>
                            <div className='form-floating mb-3'>
                                <input className='form-control' type='email' id='floatingInput' placeholder='From'/>
                                <label htmlFor='floatingInput'>From</label>
                            </div>
                            <div className='form-floating mb-3'>
                                <input className='form-control' type='email' id='floatingInput1' placeholder='To'/>
                                <label htmlFor='floatingInput1'>To</label>
                            </div>
                        </div>
                        <h5 className='sub-title'>Color</h5>
                        <div>
                            <div>
                                <ul className='colors ps-0'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <h5 className='sub-title'>Size</h5>
                        <div>
                        <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id=''/>
                        <label className='form-check-label' htmlFor=''>M (1)</label>
                        </div>
                        <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' id=''/>
                        <label className='form-check-label' htmlFor=''>S (2)</label>
                        </div>
                        </div>
                    </div>    
                    </div>

                    <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Product Tags</h3>    
                    <div>
                        <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphone</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Mobile</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Wire</span>
                        </div>
                    </div>  
                    </div>

                    <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Random Products</h3>      
                    <div>
                        <div className='random-products mb-3 d-flex'>
                        <div className='w-50'>
                            <img src='images/watch.jpg' alt='img' className='img-fluid'/>
                        </div>
                        <div className='w-50'>
                            <h5>
                                Kids headphones bulk 10 pack multi colored for students
                            </h5>
                            <ReactStars count={5} size={24} value={3} edit={false} activeColor='#ffd700'/>
                            <b>$ 300</b>
                        </div>
                        </div>
                        <div className='random-products d-flex'>
                        <div className='w-50'>
                            <img src='images/watch.jpg' alt='img' className='img-fluid'/>
                        </div>
                        <div className='w-50'>
                            <h5>
                                Kids headphones bulk 10 pack multi colored for students
                            </h5>
                            <ReactStars count={5} size={24} value={3} edit={false} activeColor='#ffd700'/>
                            <b>$ 300</b>
                        </div>
                        </div>
                    </div>
                    </div>

                    </div>
                    <div className='col-9'>
                        <div className='filter-sort-grid'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center gap-10'>
                                <p className='mb-0' style={{width : '100px'}}>Sort By:</p>
                                <select className='form-control form-select' id='' name=''>
                                    <option value='manual'>Featured</option>
                                    <option value='best-selling'>Best Selling</option>
                                    <option value='title-asscending'>Alphabetically A - Z</option>
                                    <option value='title-asscending'>Alphabetically Z - A</option>
                                    <option value='price-asscending'>Price , low to high</option>
                                </select>
                            </div>
                            <div className='d-flex align-items-center gap-10'>
                                <p className='totalproducts mb-0'>21 Products</p>
                                <div className='d-flex align-items-center gap-10 grid'>
                                    <img src='images/gr.svg' className='d-block img-fluid' alt='' onClick={() => {setGrid(1)}}/>
                                    <img src='images/gr2.svg' className='d-block img-fluid' alt='' onClick={() => {setGrid(2)}}/>
                                    <img src='images/gr3.svg' className='d-block img-fluid' alt='' onClick={() => {setGrid(3)}}/>
                                    <img src='images/gr4.svg' className='d-block img-fluid' alt='' onClick={() => {setGrid(4)}}/>
                                </div>
                            </div>  
                        </div>
                        </div>
                        <div className='products-list pb-5'>
                            <ProductCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurStore
