import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div className={` ${location.pathname === "/ourstore" ? `gr-${grid}` : "col-3"}`}>
                <Link className='product-card position-relative m-1' style={{ textDecoration: 'none' }}>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src='images/wish.svg' alt='' />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src='images/wa.jpg' alt='' className='img-fluid' />
                        <img src='images/watch.jpg' alt='' className='img-fluid' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='product-title'>
                            Kids headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars count={5} size={24} value={3} edit={false} activeColor='#ffd700' />
                        <p className={` description ${grid === 12 ? 'd-block' : 'd-none'}`}>It seems there was another issue generating the images. I recommend using tools like Lucidchart, draw.io, or other diagramming software to create the CDM and ERD visuals based on the descriptions provided.</p>
                        <p className='price'>$100.00</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src='images/prodcompare.svg' alt='' />
                            </Link>
                            <Link>
                                <img src='images/view.svg' alt='' />
                            </Link>
                            <Link>
                                <img src='images/add-cart.svg' alt='' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={` ${location.pathname === "/ourstore" ? `gr-${grid}` : "col-3"}`}>
                <Link className='product-card position-relative m-1' style={{ textDecoration: 'none' }}>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src='images/wish.svg' alt='' />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src='images/wa.jpg' alt='' className='img-fluid' />
                        <img src='images/watch.jpg' alt='' className='img-fluid' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='product-title'>
                            Kids headphone bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars count={5} size={24} value={3} edit={false} activeColor='#ffd700' />
                        <p className={` description ${grid === 12 ? 'd-block' : 'd-none'}`}>It seems there was another issue generating the images. I recommend using tools like Lucidchart, draw.io, or other diagramming software to create the CDM and ERD visuals based on the descriptions provided.</p>
                        <p className='price'>$100.00</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src='images/prodcompare.svg' alt='' />
                            </Link>
                            <Link>
                                <img src='images/view.svg' alt='' />
                            </Link>
                            <Link>
                                <img src='images/add-cart.svg' alt='' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ProductCard;
