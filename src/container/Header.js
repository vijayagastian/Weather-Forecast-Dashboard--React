import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { useLocation, Link } from 'react-router-dom';
import profileImage from './profile.png';

const Header = ({ toggleTheme, theme }) => {
const location = useLocation();



  return (
    <header className={`navbar navbar-expand-lg ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
    
      <span className="navbar-brand"><h3>Weather Forecast Dashboard</h3></span>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <div className="navbar-nav">
          <span id="location" className="nav-item nav-link">Dharmapuri, TN</span>
          <span id="datetime" className="nav-item nav-link">{new Date().toLocaleString()}</span>
        </div>
      </div>
      <div className="ml-auto d-flex align-items-center ">
        <div >
        <img src={profileImage} alt="Profile" className="profile-image rounded-circle" /></div><div className='p-2'>
        <button className="btn btn-secondary ml-2" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
        </div>
        <div className='p-2'>
        {location.pathname !== '/' && (
          <Link to="/" className='btn btn-primary ml-2 ' ><i className='fa fa-home' style={{ fontSize: '24px', width:'24px', height:'24px'}}></i></Link>
        )}</div>
      </div>
    </header>
  );
}

export default Header;
