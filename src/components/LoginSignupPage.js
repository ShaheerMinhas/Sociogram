import React, { useState } from 'react'
import MAinimage from './MainImage'
import LoginSignupBox from './LoginSignupbox'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import Header from './Header'
const LoginSignupPage = () => {
  
     
    return (

    <>
    <div className="container mt-3">
        <section className='d-flex justify-content-between'>
                  <div className="left-data mt-5" style={{width:"100%"}}>
                     <LoginSignupBox />
                  </div>
                  <div className="mt-5">
                    
            <MAinimage/>
                  </div>
        </section>
    </div>
    
    </>
  )
}

export default LoginSignupPage