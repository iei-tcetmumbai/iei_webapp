import React, { useState } from 'react';
import styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom'


const navStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  background: '#14121b',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  paddingTop: '1%',
  paddingBottom: '1%',
  zIndex: 100,
  opacity: 0.7,
  // backdropFilter: 'blur(6px)',
};



const ulStyle = {
  width: '70vw',
  display: 'flex',
  justifyContent: 'space-between',
};

const liStyle = {
  listStyleType: 'none',
  
};

const linkStyle = {
  textDecoration: 'none',
  color: 'red',
  fontSize: '1.2em',
  fontFamily: 'Tektur, cursive',
};



export default function Navbar({class1 = "nav"}) {
  const [showMediaIcons, setShowMediaIcons] = useState(false)
  return (
    <div>   
      <center>
      <div style={navStyle} className={`${class1}  nav`}>
        <ul  style={ulStyle}>
          <li className={`${styles.listItem}`} style={liStyle}><a style={linkStyle} href=""><NavLink style={{color: 'red', textDecorationLine: 'none'}} to="/">Home</NavLink> </a></li>
          <li className={`${styles.listItem}`}style={liStyle}><a style={linkStyle} href=""><NavLink style={{color: 'red', textDecorationLine: 'none'}} to="/team">Our Team</NavLink> </a></li>
          <li className={`${styles.listItem}`}style={liStyle}><a style={linkStyle} href=""><NavLink style={{color: 'red', textDecorationLine: 'none'}} to="/about">About Us</NavLink> </a></li>
          {/* <li className={`${styles.listItem}`}style={liStyle}><a style={linkStyle} href=""><NavLink style={{color: 'red', textDecorationLine: 'none'}} to="/events">Events</NavLink> </a></li> */}
          {/* <li className={`${styles.listItem}`}style={liStyle}><a style={linkStyle} href="">Gallery</a></li> */}
          <li className={`${styles.listItem}`}style={liStyle}><a style={linkStyle} href=""><NavLink style={{color: 'red', textDecorationLine: 'none'}} to="/contact">Contact</NavLink> </a></li>
        </ul>
        <div className={`${styles.menu}`}>
          <span onClick={()=> setShowMediaIcons(!showMediaIcons)}><i className="fa-solid fa-bars fa-2xl" style={{color: 'red'}}></i></span>
        </div> 
        {showMediaIcons &&  <DropDown />}
      </div>
      </center>
    </div>
  );
}

function DropDown(){
  return(
    <>
     <div className={`${styles.dropdown} ${styles.animation}`}>
              <ul >
              <li><a style={linkStyle} href=""><NavLink style={{color: 'red', textDecorationLine: 'none'}} to="/">Home</NavLink></a></li>
                <li><a style={linkStyle} href=""><NavLink style={{color: 'red', textDecorationLine: 'none'}} to="/team">Our Team</NavLink></a></li>
                <li><a style={linkStyle} href=""><NavLink style={{color: 'red', textDecorationLine: 'none'}} to="/about">About Us</NavLink></a></li>
                {/* <li ><a style={linkStyle} href=""><NavLink style={{color: 'red', textDecorationLine: 'none'}} to="/events">Events</NavLink></a></li>
                <li><a style={linkStyle} href="">Gallery</a></li> */}
                <li><a style={linkStyle} href=""><NavLink style={{color: 'red', textDecorationLine: 'none'}} to="/contact">Contact</NavLink></a></li>
            </ul>
          </div>
    </>
  )
}

