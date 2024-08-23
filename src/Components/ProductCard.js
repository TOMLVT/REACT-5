import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
const ProductCard = () => {
  return (
    <div className='col-3'>
        <Link className='product-card position-relative mt-2' style={{textDecoration: 'none'}}>
        <div className='wishlist-icon position-absolute'>
            <Link>
                <img src='images/wish.svg' alt=''/>
            </Link>
        </div>
            <div className='product-image'>
                <img src='images/watch.jpg' alt=''/>
                <img src='images/laptop.jpg' alt=''/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havels</h6>
                <h5 className='product-title'>
                    Kids headphone bulk 10 pack multi colored for studens 
                </h5>
                <ReactStars count={5} size={24} value={3} edit={false} activeColor='#ffd700'/>
                <p className='price'>$100.00</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                        <Link>
                            <img src='images/prodcompare.svg' alt=''/>
                        </Link>
                        <Link>
                            <img src='images/view.svg' alt=''/>
                        </Link>
                        <Link>
                            <img src='images/add-cart.svg' alt=''/>
                        </Link>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard
