import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar(props) {

  return (
    
    <div className="sidebar">
      <img src='https://picsum.photos/seed/picsum/200/300' alt="Avatar" className="imgdp" />
      <span className="fs-4">{localStorage.getItem('logname')}</span>
      <hr />
      <ul className="sidebar-nav nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to='/Dashboard' className={`nav-link " aria-current="page ${props.current === 'dashboard'? "active":''}`}>
            <i className="bi bi-house-door"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/Profile" className={`nav-link link-dark ${props.current === 'profile'? "active":''}`}>
            <i className="bi bi-speedometer2"></i>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/Explore" className={`nav-link link-dark ${props.current === 'explore'? "active":''}`}>
            <i className="bi bi-speedometer2"></i>
            Explore
          </Link>
        </li>
        <li>
          <Link to="/MeetNew" className={`nav-link link-dark ${props.current === 'meetnewpeople'? "active":''}`}>
            <i className="bi bi-speedometer2"></i>
            MeetNewPeople
          </Link>
        </li>
        <li>
          <a href="#" className={`nav-link link-dark ${props.current === 'stat'? "active":''}`}>
            <i className="bi bi-speedometer2"></i>
            Stats
          </a>
        </li>
        <li>
          <Link to="/" className={`nav-link link-dark ${props.current === 'meetnewpeopl'? "active":''}`}>
            <i className="bi bi-speedometer2"></i>
            Signout
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}
