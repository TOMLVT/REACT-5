import React from 'react'
import Meta from '../Components/Meta'
import BreadCrumb from '../Components/BreadCrumb'
import { Link } from 'react-router-dom'
import CustomInput from '../Components/CustomInput'

const Login = () => {
  return (
    <>
       <Meta title={'Login'} />
       <BreadCrumb title="Login" />
       <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                   <h3 className='text-center mb-3'>Login</h3>
                   <form action='' className='d-flex flex-column gap-15'>
                    <CustomInput type='text' placeholder='Enter your email...' name='name'/>
                    <CustomInput type='password' placeholder='Enter your password...' name='password'/>
                    <div>
                        <Link to='/forgot-password' style={{textDecoration:'none'}}>Forgot Password ? </Link>
                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                            <button className='button border-0'>Login</button>
                            <Link to='/signup'  className='button signup'>Sign Up</Link>
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

export default Login
