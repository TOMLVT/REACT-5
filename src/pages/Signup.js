import React from 'react'
import Meta from '../Components/Meta'
import BreadCrumb from '../Components/BreadCrumb'
import CustomInput from '../Components/CustomInput'
import Container from '../Components/Container'


const Signup = () => {
  return (
    <>
       <Meta title={'Create Account'} />
       <BreadCrumb title="Create Account" />
       <Container class1='login-wrapper py-5 home-wrapper-2'>
     
       <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                   <h3 className='text-center mb-3'>Create Account</h3>
                   <form action='' className='d-flex flex-column gap-15'>
                   <CustomInput type='text' placeholder='Enter First Name...' name='name'/>
                   <CustomInput type='text' placeholder='Enter Last Name...' name='name'/>
                   <CustomInput type='email' placeholder='Enter your email...' name='email'/>
                   <CustomInput type='password' placeholder='Enter your password...' name='password'/>
                    <div>
                      
                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                            <button className='button border-0'>Create</button>
                          
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

export default Signup
