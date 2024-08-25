import React from 'react'
import Meta from '../Components/Meta'
import BreadCrumb from '../Components/BreadCrumb'


const Signup = () => {
  return (
    <>
       <Meta title={'Create Account'} />
       <BreadCrumb title="Create Account" />
       <div className='login-wrapper py-5 home-wrapper-2'>
       <div className='container-xxl'>
       <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                   <h3 className='text-center mb-3'>Create Account</h3>
                   <form action='' className='d-flex flex-column gap-15'>
                   <div>
                        <input type='text' name='name' placeholder='Enter First Name...' className='form-control'/>
                    </div>
                    <div>
                        <input type='text' name='name' placeholder='Enter Last Name...' className='form-control'/>
                    </div>
                    <div>
                        <input type='email' name='email' placeholder='Enter your email...' className='form-control'/>
                    </div>
                    <div className='mt-1'>
                        <input type='password' name='password' placeholder='Enter your password...' className='form-control'/>
                    </div>
                    <div>
                      
                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                            <button className='button border-0'>Create</button>
                          
                        </div>
                    </div>
                   </form>  
                </div>
            </div>
        </div>
       </div>
       </div>
    </>
  )
}

export default Signup
