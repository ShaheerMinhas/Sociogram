import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
const Header = () => {
  const[mystyle,setmystyle]=useState({
    colour:'white',
    backgroundColor:'dodgerblue' 
    
  })
  const togglestyle=()=>
  {
    if(mystyle.backgroundColor=='dodgerblue')
    {
      setmystyle({
        colour:'white',
       backgroundColor:"black"
       })
    }
    else if(mystyle.backgroundColor=='black'){
      
      setmystyle({
        colour:'white',
       backgroundColor:"indigo"
       })

    }
    else if(mystyle.backgroundColor=='indigo'){
      
      setmystyle({
        colour:'white',
       backgroundColor:"orange"
       })

    }
    else if(mystyle.backgroundColor=='orange'){
      
      setmystyle({
        colour:'white',
       backgroundColor:"maroon"
       })

    }
    else {
      
      setmystyle({
        colour:'white',
       backgroundColor:"dodgerblue"
       })

    }
  
   
  }
  return (
 
    <>
     <Navbar id="Navigation" style={mystyle}>
      <Navbar.Brand href="#home" id="navitems">Sociogram</Navbar.Brand>
      <Nav className="mr-auto">

     

        


        <Container  >
          <Form id="searchbar">
            <Form.Control
              type="search"
              placeholder="Search"
              className='searchff'

            />

          </Form>
        </Container>

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
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Give Feedback</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header