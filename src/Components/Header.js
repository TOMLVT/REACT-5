import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import '../App.css'
import {BsSearch} from 'react-icons/bs'
const Header = () => {
  return (
     <>
       <header className="header-top-strip py-2">
  <div className="container-xxl">
    <div className="row">
      <div className="col-6">
        <p className='text-white mb-0'>Free Shipping Over $100 % Free Returns</p>
      </div>
      <div className="col-6">
        <p className="text-end text-white mb-0">
          Hotline : <a href="tel:+0384533714" className='text-white' style={{textDecoration:'none'}}>+038 123456789</a>
        </p>
      </div>
    </div>
  </div>
</header>
<header className='header-upper py-2'>
    <div className='container-xxl'>
      <div className='row align-items-center'>
        <div className='col-2'>
          <h2>
            <Link className='text-white' style={{textDecoration: 'none'}}>Tom Dev</Link>
          </h2>
        </div>
        <div className='col-5'>
        <div class="input-group mb-3">
         <input type="text" class="form-control py-2" placeholder="Search Product here..." aria-label="Search Product here..." aria-describedby="basic-addon2"/>
            <span class="input-group-text p-3" id="basic-addon2"><BsSearch/></span>
          </div>
        </div>
        <div className='col-5'>
            <div className='header-upper-links d-flex align-items-center justify-content-between'>
              <div>
                <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white' style={{textDecoration:'none'}}>
                  <img src='images/compare.svg' alt='compare'/>
                  <p className='mb-0'>
                    Compare <br/> Products
                  </p>
                </Link>
              </div>
              <div>
                <Link to='/wish-list' className='d-flex align-items-center gap-10 text-white' style={{textDecoration:'none'}}>
                  <img src='images/wishlist.svg' alt='compare'/>
                  <p className='mb-0'>
                    Favourite <br/> Wishlist
                  </p>
                </Link>
              </div>
              <div>
                <Link to='/login' className='d-flex align-items-center gap-10 text-white' style={{textDecoration:'none'}}>
                  <img src='images/user.svg' alt='compare'/>
                  <p className='mb-0'>
                    Log In <br/> My Account
                  </p>
                </Link>
              </div>
              <div>
                <Link  to='/cart' className='d-flex align-items-center gap-10 text-white' style={{textDecoration:'none'}}>
                  <img src='images/cart.svg' alt='compare'/>
                    <div className='d-flex flex-column gap-10'>
                      <span className='badge bg-white text-dark rounded-pill'>0</span>
                      <p className='mb-0'>$500</p>
                    </div>
                </Link>
              </div>
            </div>
        </div>
      </div>
    </div>
</header>
<header className='header-bottom py-1'>
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <div className='menu-bottom d-flex align-items-center gap-15'>
          <div>
          <div class="dropdown">
           <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
             <img src='images/menu.svg' alt='alt'/>
             <span className='me-5 inline-block'> Shop Categories</span>
             </button>
             <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
               <li><Link class="dropdown-item text-white" href="#">Action</Link></li>
               <li><Link class="dropdown-item text-white" href="#">Another action</Link></li>
              <li><Link class="dropdown-item text-white" href="#">Something else here</Link></li>
              </ul>
             </div>
          </div>
          <div className='menu-links'>
          <div className='d-flex align-items-center gap-15'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/product'>Our Store</NavLink>
              <NavLink to='/blogs'>Blogs</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
     </>
  )
}

export default Header
