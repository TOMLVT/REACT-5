import React from 'react'
import Meta from '../Components/Meta'
import BreadCrumb from '../Components/BreadCrumb'
const TermAndContions = () => {
  return (
    <>
        <Meta title={'Term And Condition'} />
        <BreadCrumb title="Term And Condition" />
        <section className='policy-wrapper py-5 home-wrapper-2'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='policy'></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TermAndContions
