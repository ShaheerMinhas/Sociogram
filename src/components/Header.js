import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import SearchBar from './searchbar'
import { Link } from 'react-router-dom';
const Header = () => {
  const[mystyle,setmystyle]=useState({
    colour:'white',
    backgroundColor:'dodgerblue',
    position:'fixed',
    top:'0',
    zIndex:"10"
    
  })
  const togglestyle=()=>
  {
    if(mystyle.backgroundColor=='dodgerblue')
    {
      setmystyle({...mystyle,backgroundColor:'black'})
    }
    else if(mystyle.backgroundColor=='black'){
      
      setmystyle({...mystyle,backgroundColor:'indigo'})

    }
    else if(mystyle.backgroundColor=='indigo'){
      
      setmystyle({...mystyle,backgroundColor:'orange'})

    }
    else if(mystyle.backgroundColor=='orange'){
      
      setmystyle({...mystyle,backgroundColor:'maroon'})

    }
    else {
      
      setmystyle({...mystyle,backgroundColor:'dodgerblue'})

    }
  
   
  }
  return (
 
    <>
     <Navbar id="Navigation" style={mystyle}>
      <Navbar.Brand href="#home" id="navitems">Sociogram</Navbar.Brand>
      <Nav className="mr-auto">

     

        


        <SearchBar/>

        <FeedBack />
        <Button onClick={togglestyle} variant="primary" id="button-28">Theme</Button>
      </Nav>

    </Navbar>
    </>
  )
}


function FeedBack() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const handleSaveChanges = () => {
    const data = { email: email, feedback: feedback };
  
    fetch('http://localhost:5000/addfeedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        handleClose();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <>

      <Button variant="primary" onClick={handleShow} id="button-28">
        FeedBack
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>FeedBack</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Give Feedback</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            SEND
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header