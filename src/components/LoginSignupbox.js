import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginSignupBox() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3" >
      <Tab eventKey="home" title="SIGN UP">
        <Signupform />
      </Tab>
      <Tab eventKey="profile" title="SIGN IN">
      <Signinform />
      </Tab>
      
    </Tabs>
  );
}

function Signupform  (){

    return(
  


        <div className="left-data mt-5" style={{width:"100%"}}>
        <h3 className='text-centre col-lg-6'>Sign Up</h3>
        <Form>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicname">

                <Form.Control type="text" name='name' placeholder="Enter Your Name" />

            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                <Form.Control type="email" name='email'  placeholder="Enter your email" />

            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicdate">

                <Form.Control type="date" name ='date' placeholder="Enter your email" />

            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
           

            <Button variant="primary" type="submit" id="button-81" role="button" className="mb-3 ml-4 col-lg-5" style ={{                  }}>
                Submit
            </Button>
            <p>Already Have An Account <span>Sign In</span></p>
        </Form>
    </div>
    )
}





function Signinform  (){
   
       
    return(
  
   

        <div className="left-data mt-5" style={{width:"100%"}}>
        <h3 className='text-centre col-lg-6'>Sign In</h3>
        <Form action="">
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicname">

                <Form.Control type="text" name='name' placeholder="Enter Your Name" />
               
            </Form.Group>
           

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                <Form.Control type="password" name='password' placeholder="Password" />
         
            </Form.Group>
           

            <Button id="button-81" variant="primary" type="submit" className="mb-3 ml-4 col-lg-5" style ={{}}>
                LogIn
            </Button>
        </Form>
    </div>
    )
}
export default LoginSignupBox;
