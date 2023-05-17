import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar(props) {

  const[mystyle,setmystyle]=useState({
    colour:'white',
    backgroundColor:'dodgerblue',
    position:'fixed',
    top:'0',
    zIndex:"10"
    
  })
  return (
    
    <div className="sidebar">
      <img src='https://picsum.photos/seed/picsum/200/300' alt="Avatar" className="imgdp" />
      <span className="fs-4">{localStorage.getItem('logname')}</span>
      <hr />
      <ul className="sidebar-nav nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to='/Dashboard' className={`nav-link ${props.current === 'dashboard' ? "active" : ''}`}>
            <i className="bi bi-house-door"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/Profile" className={`nav-link ${props.current === 'profile' ? "active" : ''}`}>
            <i className="bi bi-speedometer2"></i>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/Explore" className={`nav-link ${props.current === 'explore' ? "active" : ''}`}>
            <i className="bi bi-speedometer2"></i>
            Explore
          </Link>
        </li>
        <li>
          <Link to="/MeetNew" className={`nav-link ${props.current === 'meetnewpeople' ? "active" : ''}`}>
            <i className="bi bi-speedometer2"></i>
            Meet New People
          </Link>
        </li>
        <li>
          <a href="#" className={`nav-link ${props.current === 'stat' ? "active" : ''}`}>
            <i className="bi bi-speedometer2"></i>
            Stats
          </a>
        </li>
        <li>
          <Link to="/" className={`nav-link ${props.current === 'meetnewpeopl' ? "active" : ''}`}>
            <i className="bi bi-speedometer2"></i>
            Sign out
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}