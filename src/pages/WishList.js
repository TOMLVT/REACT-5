import React from 'react'
import Meta from '../Components/Meta'
import BreadCrumb from '../Components/BreadCrumb'
import Container from '../Components/Container'

const WishList = () => {
  return (
    <>
         <Meta title={'Wish List'} />
         <BreadCrumb title="Wish List" />
         <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
           
                <div className='row'>
                    <div className='col-3'>
                       <div className='wishlist-card position-relative'>
                       <img src='images/cross.svg' alt='' className='img-fluid cross position-absolute'/>
                       <div className='wishlist-card-image'>
                        <img src='images/watch.jpg' alt='' className='img-fluid w-100'/>
                       </div>
                        <div className='py-3 px-3'>
                            <h5 className='title'> Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                            <h6 className='price'>$ 100</h6>
                        </div>
                       </div>
                    </div>
                    <div className='col-3'>
                       <div className='wishlist-card position-relative'>
                       <img src='images/cross.svg' alt='' className='img-fluid cross position-absolute'/>
                       <div className='wishlist-card-image'>
                        <img src='images/watch.jpg' alt='' className='img-fluid w-100'/>
                       </div>
                        <div className='py-3 px-3'>
                            <h5 className='title'> Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                            <h6 className='price'>$ 100</h6>
                        </div>
                       </div>
                    </div>
                    <div className='col-3'>
                       <div className='wishlist-card position-relative'>
                       <img src='images/cross.svg' alt='' className='img-fluid cross position-absolute'/>
                       <div className='wishlist-card-image'>
                        <img src='images/watch.jpg' alt='' className='img-fluid w-100'/>
                       </div>
                        <div className='py-3 px-3'>
                            <h5 className='title'> Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                            <h6 className='price'>$ 100</h6>
                        </div>
                       </div>
                    </div>
                </div>
          
         </Container>
    </>
  )
}

export default WishList
