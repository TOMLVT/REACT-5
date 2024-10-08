import React, { useState } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Meta from '../Components/Meta';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../Components/ProductCard';
import Color from '../Components/Color';
import Container from '../Components/Container';

const OurStore = () => {
    const [grid, setGrid] = useState(4);

    return (
        <>
            <Meta title={'Our Store'} />
            <BreadCrumb title="Our Store" />
            <Container class1='store-wrapper home-wrapper-2 py-5'>
              
                    <div className='row'>
                        <div className='col-3'>
                            {/* Filter Sidebar */}
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
                                    <h5 className='sub-title'>Availability</h5>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value='' id='' />
                                        <label className='form-check-label' htmlFor=''>In Stock (1)</label>
                                    </div>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value='' id='' />
                                        <label className='form-check-label' htmlFor=''>Out of Stock (2)</label>
                                    </div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className='form-floating mb-3'>
                                            <input className='form-control' type='email' id='floatingInput' placeholder='From' />
                                            <label htmlFor='floatingInput'>From</label>
                                        </div>
                                        <div className='form-floating mb-3'>
                                            <input className='form-control' type='email' id='floatingInput1' placeholder='To' />
                                            <label htmlFor='floatingInput1'>To</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Color</h5>
                                    <div>
                                       <Color/>
                                    </div>
                                    <h5 className='sub-title'>Size</h5>
                                    <div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value='' id='' />
                                            <label className='form-check-label' htmlFor=''>M (1)</label>
                                        </div>
                                        <div className='form-check'>
                                            <input className='form-check-input' type='checkbox' value='' id='' />
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
                                            <img src='images/watch.jpg' alt='img' className='img-fluid' />
                                        </div>
                                        <div className='w-50'>
                                            <h5>
                                                Kids headphones bulk 10 pack multi colored for students
                                            </h5>
                                            <ReactStars count={5} size={24} value={3} edit={false} activeColor='#ffd700' />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                    <div className='random-products d-flex'>
                                        <div className='w-50'>
                                            <img src='images/watch.jpg' alt='img' className='img-fluid' />
                                        </div>
                                        <div className='w-50'>
                                            <h5>
                                                Kids headphones bulk 10 pack multi colored for students
                                            </h5>
                                            <ReactStars count={5} size={24} value={3} edit={false} activeColor='#ffd700' />
                                            <b>$ 300</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='filter-sort-grid mb-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center'>
                                        <p className='mb-0 d-block' style={{ width: "100px" }}>Sort By:</p>
                                        <select name='' className='form-control form-select' defaultValue={"manual"}>
                                            <option value='manual'>Featured</option>
                                            <option value='best-selling'>Best Selling</option>
                                            <option value='title-ascending'>Alphabetically, A-Z</option>
                                            <option value='title-descending'>Alphabetically, Z-A</option>
                                            <option value='price-ascending'>Price, low to high</option>
                                            <option value='price-descending'>Price, high to low</option>
                                            <option value='created-ascending'>Date, old to new</option>
                                            <option value='created-descending'>Date, new to old</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='total-products mb-0'>21 Products</p>
                                        <div className='d-flex gap-10 align-items-center grid'>
                                            <img onClick={() => { setGrid(3); }} src='images/gr4.svg' alt='' className='d-block img-fluid' />
                                            <img onClick={() => { setGrid(4); }} src='images/gr3.svg' alt='' className='d-block img-fluid' />
                                            <img onClick={() => { setGrid(6); }} src='images/gr2.svg' alt='' className='d-block img-fluid' />
                                            <img onClick={() => { setGrid(12); }} src='images/gr.svg' alt='' className='d-block img-fluid' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='products-list pb-5'>
                                <div className='d-flex flex-wrap'>
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                </div>
                            </div>
                        </div>
                    </div>
              
            </Container>
        </>
    );
};

export default OurStore;
