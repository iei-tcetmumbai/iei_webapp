import React from 'react'
import styles from './Contact.module.css';
import Navbar from '../components/Navbar';
import Bounce from 'react-reveal/Bounce';
import { useState } from 'react';
import ModalContact from '../components/contactModal';


export default function Contact() {
   
  return (
   <>
<Navbar class1= {`${styles['color-change-2x-2']}`} />
    <div className={`${styles[`container`]} ${styles['color-change-2x-2']}`}>

<div className={`${styles[`contact-info`]} ${styles['color-change-2x-2']}`}>  
    <Bounce top left><center><h1>Our Contacts</h1></center></Bounce>
    <Bounce bottom left>
    <div style={{marginLeft: "11%"}} className= {`${styles['icons']} container-fluid`}>
       <div>
       <div className='styles.individualIcon'>
        {/* <Icon><a href="https://instagram.com/iei_tcet?igshid=MzRlODBiNWFlZA=="> <i className={`fa-brands fa-instagram  fa-2xl  ${styles['color-change-2x-2-text']}  ${styles['icon']}`} style={{color: "rgb(249, 70, 70)", fontSize: '7em '}} ></i></a></Icon> */}
        <ModalContact heading="Instagram" text={<a href="https://instagram.com/iei_tcet?igshid=MzRlODBiNWFlZA==">Click to visit our Instagram</a>}iconType=" fa-brands fa-instagram"/></div>
        <ModalContact heading="Linkedin" text={<a href="https://www.linkedin.com/in/iei-tcet-03287928b">Click to visit our Linkedin</a>}iconType=" fa-brands fa-linkedin"/>
        {/* <Icon> <i className={`fa-brands fa-linkedin fa-2xl  ${styles['color-change-2x-2-text']} ${styles['icon']}`} style={{color: "rgb(249, 70, 70)", fontSize: '7em '}}><a href="https://www.linkedin.com/in/iei-tcet-03287928b"></a></i></Icon> */}
        
       </div>
       <div>
       {/* <Icon><i className={`fa-solid fa-envelope fa-2xl  ${styles['color-change-2x-2-text']} ${styles['icon']}`} style={{color: "rgb(249, 70, 70)", fontSize: '7em '}}></i></Icon> */}
       {/* <Icon><i className={`fa-solid fa-phone fa-2xl  ${styles['color-change-2x-2-text']} ${styles['icon']}`} style={{color: "rgb(249, 70, 70)", fontSize: '7em '}}></i></Icon> */}
       <ModalContact heading="Contact Email" text="dhawanayush416@gmail.com" iconType="fa-envelope"/>
       <ModalContact heading="Contact Number" text="+867389883" iconType="fa-phone"/>
       </div>
    </div>
    </Bounce>
  </div>
  <Bounce top right><div className={`${styles[`gif`]} img-responsive`}> </div></Bounce>
</div>
   </>
  )
}

function Icon({children}){
    return(
        <>
        <div  style={{margin: '4em'}} className={`${styles[`icons`]}`}>
            {children}
        </div>
        </>
    )
    }

