import React from 'react'
import Meta from '../Components/Meta'
import BreadCrumb from '../Components/BreadCrumb'
import CustomInput from '../Components/CustomInput'
import Container from '../Components/Container'
const ResetPassword = () => {
  return (
    <>
       <Meta title={'Reset Password'} />
       <BreadCrumb title="Reset Password" />
       <Container class1='login-wrapper py-5 home-wrapper-2'>
       
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                   <h3 className='text-center mb-3'>Reset Password</h3>
                   <form action='' className='d-flex flex-column gap-15'>
                   <CustomInput type='password' placeholder='Enter your password...' name='password'/>
                   <CustomInput type='password' placeholder='Confirm your password...' name='password'/>
                   
                    <div>
                      
                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                            <button className='button border-0'>OK</button>
                          
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

export default ResetPassword
