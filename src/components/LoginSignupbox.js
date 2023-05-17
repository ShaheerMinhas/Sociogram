import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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

function Signupform() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/adduser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                dob: dob
                
            })
        })
        const res = await response.json();
        if (res.status) {
            alert('User Added Successfully');
        }
        else {
            alert('User Not Added');
        }

    };
    return (



        <div className="left-data mt-5" style={{ width: "100%" }}>
            <h3 className='text-centre col-lg-6'>Sign Up</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicname">

                    <Form.Control type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />

                </Form.Group>
                <Form.Group className="mb-2 col-sm-6" controlId="formBasicEmail">

                    <Form.Control type="email" name='email' placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicdate">

                    <Form.Control type="text" name='date' placeholder="Enter your date of birth" value={dob} onChange={(e) => setDob(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                    <Form.Control type="password" name='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>


                <Button variant="primary" type="submit" id="button-81" role="button" className="mb-3 ml-4 col-lg-5" style={{}}>
                    Submit
                </Button>
                <p>Already Have An Account <span>Sign In</span></p>
            </Form>
        </div>
    )
}





function Signinform() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const Navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/loginuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        });
        const res = await response.json();
        if (res.status) {
            alert('Login Successful');
            setIsLoggedIn(true);
            localStorage.setItem("logid",res.user.id)
            localStorage.setItem("logname",res.user.username)
            Navigate('/Dashboard');
            
        }
        else {
            alert('Login Failed');
        }
        
    };
    const handleForget = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/forgetpassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
            })
        });
        const res = await response.json();
        if (res.status) {
            alert('Login Successful',res.user.password);
            setIsLoggedIn(true);
            setPassword(res.user.password);
        }
        else {
            alert('Enter Email');
        }
        
    };
    return (
        <div className="left-data mt-5" style={{ width: "100%" }}>
            <h3 className='text-centre col-lg-6'>Sign In</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button id="button-81" variant="primary" type="submit" className="mb-3 ml-4 col-lg-5" style={{}}>
                    LogIn
                </Button>
                <br/>
                <Button variant="primary" onClick={handleForget} className="mb-3 ml-4 col-lg-3" style={{}}>
                    Forget Password
                </Button>
            </Form>
        </div>
    )
}


export default LoginSignupBox;
