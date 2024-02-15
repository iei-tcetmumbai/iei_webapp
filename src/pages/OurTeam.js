import React, { useEffect, useRef, useState } from 'react';
import styles from './OurTeam.module.css';
import Navbar from '../components/Navbar';
import { useScroll, motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';


export default function OurTeam() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });


  return (
    <>
      <div className={`${styles['container']} `}>
        <Navbar class1={`${styles['class1']} `} />
        <center>
          <Fade bottom cascade>
          <div className={`${styles['heading-container']}`}>
          <h1 className={`${styles['color-change-2x-2']}  ${styles['OurText']}`} >
              OUR
            </h1>{' '}
            <br />
            
           <h1  className={`${styles['color-change-2x-2']} ${styles['teamText']}`}>
              Team<span className={`${styles['color-change-2x-2-3']}`}></span>
            </h1>
            
          </div>
          </Fade>

          <Fade top>
              <section
              >
                <h1 className={`${styles['core-heading']} ${styles['slide-in-elliptic-top-fwd']}`}>
                  Faculty Advisors
                </h1>
              </section>
              </Fade>

              <Bounce left>
              <motion.div
                 drag 
                 dragConstraints = {{
                   right: 20,
                   left: 20,
                   top: 5,
                   bottom: 5
                 }}
                className={` ${styles['memberOdd']}  ${styles['color-change-2x-4']}`}>
                    <div className={`${styles['member-img']} ${styles['sujatamam']} `}></div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div className={`${styles['heading-content']}`}>
                        <h1 style={{ fontFamily: `'Orbitron', sans-serif`}}>Dr. Sujata Alegavi</h1>
                        <h3 style={{ fontFamily: `'Orbitron', sans-serif`}}>H.O.D. & Branch Counceller</h3>
                    </div>
                    <div style={{marginLeft: '-5%'}}>
                    {/* <a href='#'><i style={{padding: '20px'}} class="fa-brands fa-instagram fa-shake"></i></a> */}
                    {/* <a href='#'> <i class="fa-brands fa-linkedin fa-shake"></i> </a> */}
                    </div>
                    </div>
              </motion.div>
              </Bounce>
              
              <Bounce right>
              <motion.div 
               drag 
               dragConstraints = {{
                 right: 20,
                 left: 20,
                 top: 5,
                 bottom: 5
               }}
              className={`${styles['memberEven']} ${styles['color-change-2x-4']}`}>
                    <div className={`${styles['member-img']} ${styles['sunilSir']}`}></div>
                    <div style={{display: 'flex', flexDirection: 'column', fontFamily: `'Orbitron', sans-serif`}}>
                    <div className={`${styles['heading-content']}`}>
                        <h1 style={{ fontFamily: `'Orbitron', sans-serif`}}>Mr. Sunil Khatri</h1>
                        <h3 style={{ fontFamily: `'Orbitron', sans-serif`}}>Deputy H.O.D.</h3>
                    </div>
                    <div style={{marginLeft: '-5%'}}>
                    {/* <a href='#'><i style={{padding: '20px'}} class="fa-brands fa-instagram fa-shake"></i></a> */}
                    {/* <a href='#'> <i class="fa-brands fa-linkedin fa-shake"></i> </a> */}
                    </div>
                    </div>
              </motion.div>
              </Bounce>

          <div className={`${styles['core-members']} `}>
            <div className={styles.coreHeadingContainer}>
              <Fade bottom>
              <section
              >
                <h1 className={`${styles['core-heading']} ${styles['slide-in-elliptic-top-fwd']}`}>
                  Core Members
                </h1>
              </section>
              </Fade>

              <MemberOdd name={'Anish Shirodkar'} post={'ChairPerson'} />
            
              <Bounce right>
              <motion.div 
              drag 
              dragConstraints = {{
                right: 20,
                left: 20,
                top: 5,
                bottom: 5
              }}
              className={`${styles['memberEven']} ${styles['color-change-2x-4']}`}>
                   <div className={`${styles['member-img']} ${styles['ishaant']}`}></div>
                    <div style={{display: 'flex', flexDirection: 'column', fontFamily: `'Orbitron', sans-serif`}}>
                    <div className={`${styles['heading-content']}`}>
                        <h1 style={{ fontFamily: `'Orbitron', sans-serif`}}>Ishaant Ipar</h1>
                        <h3 style={{ fontFamily: `'Orbitron', sans-serif`}}>Vice Chairperson</h3>
                    </div>
                    <div style={{marginLeft: '-5%'}}>
                    <a href='https://www.instagram.com/ishaant_ipar/'><i style={{padding: '20px'}} class="fa-brands fa-instagram fa-shake"></i></a>
                    <a href='https://in.linkedin.com/in/ishaant-ipar-424b60253'> <i class="fa-brands fa-linkedin fa-shake"></i> </a>
                    </div>
                    </div>
              </motion.div>
              </Bounce>

              <Flip top>
              <motion.div
                 drag 
                 dragConstraints = {{
                   right: 20,
                   left: 20,
                   top: 5,
                   bottom: 5
                 }}
                className={` ${styles['memberOdd']} ${styles['color-change-2x-4']}`}>
                    <div className={`${styles['member-img']} ${styles['gaurav']}`}></div>
                    <div style={{display: 'flex', flexDirection: 'column', fontFamily: `'Orbitron', sans-serif`}}>
                    <div className={`${styles['heading-content']}`}>
                        <h1 style={{ fontFamily: `'Orbitron', sans-serif`}}>Gaurav Singh</h1>
                        <h3 style={{ fontFamily: `'Orbitron', sans-serif`}}>Secretary</h3>
                    </div>
                    <div style={{marginLeft: '-5%'}}>
                    <a href='https://www.linkedin.com/in/gaurav-singh-668584237'><i style={{padding: '20px'}} class="fa-brands fa-instagram fa-shake"></i></a>
                    <a href='https://www.linkedin.com/in/gaurav-singh-668584237'> <i class="fa-brands fa-linkedin fa-shake"></i> </a>
                    </div>
                    </div>
              </motion.div>
              </Flip>

              <Flip bottom>
              <motion.div 
               drag 
               dragConstraints = {{
                 right: 20,
                 left: 20,
                 top: 5,
                 bottom: 5
               }}
              className={`${styles['memberEven']} ${styles['color-change-2x-4']}`}>
                   <div className={`${styles['member-img']} ${styles['samarth']}`}></div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div className={`${styles['heading-content']}`}>
                        <h1 style={{ fontFamily: `'Orbitron', sans-serif`}}>Samarth Bundele</h1>
                        <h3 style={{ fontFamily: `'Orbitron', sans-serif`}}>Treasurer</h3>
                    </div>
                    <div style={{marginLeft: '-5%'}}>
                    <a href='https://instagram.com/bundele_samarth?utm_source=qr&igshid=MThlNWY1MzQwNA=='><i style={{padding: '20px'}} class="fa-brands fa-instagram fa-shake"></i></a>
                    <a href='https://www.linkedin.com/in/samarth-bundele-51a1a622a'> <i class="fa-brands fa-linkedin fa-shake"></i> </a>
                    </div>
                    </div>
              </motion.div>
              </Flip>

              <Fade top>
              <motion.div
               drag 
               dragConstraints = {{
                 right: 20,
                 left: 20,
                 top: 5,
                 bottom: 5
               }}
                className={` ${styles['memberOdd']} ${styles['color-change-2x-4']}`}>
                   <div className={`${styles['member-img']} ${styles['aashi']}`}></div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div className={`${styles['heading-content']}`}>
                        <h1 style={{ fontFamily: `'Orbitron', sans-serif`}}>Aashi Shah</h1>
                        <h3 style={{ fontFamily: `'Orbitron', sans-serif`}}>PR and Marketing Head</h3>
                    </div>
                    <div style={{marginLeft: '-5%'}}>
                    <a href='https://instagram.com/aashi_823?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=='><i style={{padding: '20px'}} class="fa-brands fa-instagram fa-shake"></i></a>
                    {/* <a href='#'> <i class="fa-brands fa-linkedin fa-shake"></i> </a> */}
                    </div>
                    </div>
              </motion.div>
              </Fade>

              <Fade bottom>
              <motion.div 
               drag 
               dragConstraints = {{
                 right: 20,
                 left: 20,
                 top: 5,
                 bottom: 5
               }}
              className={`${styles['memberEven']} ${styles['color-change-2x-4']}`}>
                    <div className={`${styles['member-img']} ${styles['lajit']}`}></div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div className={`${styles['heading-content']}`}>
                        <h1 style={{ fontFamily: `'Orbitron', sans-serif`}}>LajitSingh Rajput</h1>
                        <h3 style={{ fontFamily: `'Orbitron', sans-serif`}}>Event Manager</h3>
                    </div>
                    <div style={{marginLeft: '-5%'}}>
                    <a href='https://instagram.com/lajitsingh16?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'><i style={{padding: '20px'}} class="fa-brands fa-instagram fa-shake"></i></a>
                    {/* <a href='#'> <i class="fa-brands fa-linkedin fa-shake"></i> </a> */}
                    </div>
                    </div>
              </motion.div>
              </Fade>

              

              <Fade bottom>
              <section
              >
                <h1 className={`${styles['core-heading']} ${styles['slide-in-elliptic-top-fwd']}`}>
                  WebSite By
                </h1>
              </section>
              </Fade>

              <div style={{marginBottom: '10%'}}>
                
              <Zoom bottom>
              <motion.div
                 drag 
                 dragConstraints = {{
                   right: 20,
                   left: 20,
                   top: 5,
                   bottom: 5
                 }}
                className={` ${styles['ayush']} ${styles['color-change-2x-4']}`}>
                    <div  className={`${styles['member-img']} ${styles['ayush-img']}`}></div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div className={`${styles['heading-content']}`}>
                        <h1 style={{ fontFamily: `'Orbitron', sans-serif`}}>Ayush Dhawan</h1>
                        <h3></h3>
                    </div>
                    <div style={{marginLeft: '-5%'}}>
                    <a href='https://www.instagram.com/ayush_57_10/'><i style={{padding: '20px'}} class="fa-brands fa-instagram fa-shake"></i></a>
                    <a href='https://www.linkedin.com/in/ayush-dhawan-733b34253/'> <i class="fa-brands fa-linkedin fa-shake"></i> </a>
                    </div>
                    </div>
              </motion.div>
              </Zoom>
             
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

function MemberOdd({name, post, type, direction}){
  return(
    <>
    
    <Bounce left>
              <motion.div  
              drag 
              dragConstraints = {{
                right: 20,
                left: 20,
                top: 5,
                bottom: 5
              }}
              className={` ${styles['memberOdd']} ${styles['color-change-2x-4']}`}>
                    <div className={`${styles['member-img']} ${styles['anish']}`}></div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div className={`${styles['heading-content']}`}>
                        <h1 style={{ fontFamily: `'Orbitron', sans-serif`}}>{name}</h1>
                        <h3 style={{ fontFamily: `'Orbitron', sans-serif`}}>{post}</h3>
                    </div>
                    <div style={{marginLeft: '-5%'}}>
                    <a href='https://instagram.com/aniishhhhh_?igshid=ZDc4ODBmNjlmNQ=='><i style={{padding: '20px'}} class="fa-brands fa-instagram fa-shake"></i></a>
                    {/* <a href='https://in.linkedin.com/in/ishaant-ipar-424b60253'> <i class="fa-brands fa-linkedin fa-shake"></i> </a> */}
                    </div>
                    </div>
                    {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" shake size="sm" /> */}
                   
              </motion.div>
              </Bounce>
            
    </>
  )
}
