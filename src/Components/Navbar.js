import React , {useState}from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import {navicon,closeicon,notFound} from "../img";


function Navbar () {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  return (
    <>
      <nav className="navbar" >
        {!isMobile ? 
        <div className={isMobile? "navbar-container-mobile":"navbar-container"}>
          <Link to="/" className='navbar-components'>Overview</Link>
          <Link to="/" className='navbar-components'>All-pages</Link>
          <Link to="/" className='navbar-components'>Dashboard</Link>
          <Link to="/" className='navbar-components'>Support</Link>
        </div>
        : 
        <button className="mobile-menu-icon"
          onClick={() =>setIsSideBarVisible(!isSideBarVisible)}
          >
            {isSideBarVisible? (<img src={closeicon} alt="closeicon"/>) : (<img src={navicon} alt="navicon"/>)}
          </button>
          
        }
          <div className='boxing'>
          <button className="customButton" type='button' >Buy now</button>
          <button className="classicButton" type='button'>Docs v2.0</button>
          </div>
          

          {isSideBarVisible && (
            <div className="topnav">
              <div className="top">
              <img src={notFound} alt="notFound" />
                <h3>Overview</h3>
                <h3>All-pages</h3>
                <h3>Dashboard</h3>
                <h3>Support</h3>
              </div>
            </div>
          )}
      </nav>
    </>
  )
}
export default Navbar;
