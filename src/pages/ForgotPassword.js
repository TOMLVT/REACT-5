import React from 'react'
import Meta from '../Components/Meta'
import BreadCrumb from '../Components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../Components/Container'
import CustomInput from '../Components/CustomInput'

const ForgotPassword = () => {
  return (
   <>
     <Meta title={'Forgot Password'} />
     <BreadCrumb title="Forgot Password" />
     <Container class1='login-wrapper py-5 home-wrapper-2'>
       
         <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                   <h3 className='text-center mb-3'>Reset Your Password</h3>
                   <p className='mt-2 mb-3 text-center'>
                    We will send you an email to reset your password
                   </p>
                   <form action='' className='d-flex flex-column gap-15'>
                   <CustomInput type='email' placeholder='Enter your email...' name='email'/>
                  
                   
                    <div>
                        <Link to='/forgot-password' style={{textDecoration:'none'}}>Forgot Password ? </Link>
                        <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                            <button className='button border-0'>Submit</button>
                            <Link to='/login' style={{textDecoration: 'none'}}>Cancel</Link>
                        </div>
                    </div>
                   </form>  
                </div>
            </div>
        </div>
       
       </Container>
   </>
  )
}

export default ForgotPassword
