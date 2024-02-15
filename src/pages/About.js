

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import { useMediaQueries } from '@react-hook/media-query'; 
import Fade from 'react-reveal/Fade';

export default function About() {
const [isAnimating, setIsAnimating] = useState(false);
const [showMessage, setShowMessage] = useState(false);

const [isAnimating2, setIsAnimating2] = useState(false);
const [showMessage2, setShowMessage2] = useState(false);

const [showHOD, setShowHOD] = useState(true)
const [showDHOD, setShowDHOD] = useState(true)

// const mediaQueryMatches = useMediaQueries({
//     '(max-width: 1072px)': 'smallScreen', // Define the media query and identifier
//   });

//   const isSmallScreen = mediaQueryMatches.smallScreen;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Create a function to update the screenWidth state
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Attach the updateScreenWidth function as an event listener for the "resize" event
    window.addEventListener('resize', updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const onAnimationComplete = () => {
        if (!isAnimating) {
            setIsAnimating(false); // Animation ended, set isAnimating to false
          }
  };

const onAnimation = () =>{
    setIsAnimating(!isAnimating);
    setShowHOD(false);
    setTimeout(() => {
        setShowMessage(!showMessage);
        setShowHOD(true);
    },500);
}
const onAnimation2 = () =>{
    setIsAnimating2(!isAnimating2);
    setShowDHOD(false);
    setTimeout(() => {
        setShowMessage2(!showMessage2);
        setShowDHOD(true);
    },500);
}

const fontFam = {
    fontFamily: `'Orbitron', sans-serif`
}

return (
    <div className={`${styles['color-change-2x']}`}>
    <div className={`${styles['color-change-2x']} ${styles['container']}`}>
        <center>
        <Navbar class1= {`${styles['color-change-2x']}`} />
       
        <Fade bottom cascade>
        <div className={`${styles['summary']} ${styles['slide-in-fwd-center']} ${styles['color-change-2x-2']}`}>
            <h1 style={{fontFamily: `'Tektur',  cursive`}} >Our Vision...</h1>
        <center>  <p>Empowering Minds, Igniting Futures: Our vision is to be the catalyst for holistic growth within our college community. We envision a vibrant committee that nurtures both technical brilliance and versatile skills, fostering a culture of innovation and camaraderie that extends beyond classroom boundaries. Our mission is to curate a spectrum of events that encompass the full spectrum of talents and interests. Through technical challenges, workshops, and creative endeavors, we aim to empower students with the tools and experiences needed to thrive in a rapidly evolving world. By fostering an environment that values inclusivity, collaboration, and skill enhancement, we are committed to shaping well-rounded individuals who are poised to make a meaningful impact in their fields and beyond.
</p></center>
        
            <div className= {styles.galleria}>
                <div  className={`${styles['galleriaImg']} ${styles['img1']} ${styles['odd-img']}`}></div>
                <div  className={`${styles['galleriaImg']} ${styles['img2']} ${styles['even-img']}`}></div>
                <div  className={`${styles['galleriaImg']} ${styles['img3']} ${styles['odd-img']}`}></div>
                <div  className={`${styles['galleriaImg']} ${styles['img4']} ${styles['even-img']}`}></div>
            </div>
        </div>
        </Fade>
        
       <div>
       <Fade bottom>
       <HeadContent isAnimating={isAnimating} setIsAnimating={setIsAnimating} showMessage={showMessage} setShowMessage={setShowMessage}>
           {screenWidth < 1072 ? <>
        <div className={`${styles['head-message-block-1']}`}>
<div className={`${styles['head-img']} ${styles['sujata-mam-img']}`}></div>
            <p className={styles.headName}>Dr. Sujata Alegavi</p>
</div>
 <div className={`${styles['head-message-block-2']}`}>
                <div className={`${styles['head-message-content']}`}>
                <h1>H.O.D's message</h1>
                <center>
                    <p>
                    <center>  <p>It gives me immense pleasure to witness the establishment of the Innovation and Entrepreneurship Initiative at TCET. This initiative reflects our commitment to fostering a culture of innovation, creativity, and entrepreneurship among our students. As we embark on this journey together, I am confident that the IEI-TCET committee will play a pivotal role in shaping the future of our students and the institution. By nurturing a supportive environment, where ideas can flourish and transform into tangible realities, we are nurturing the leaders and pioneers of tomorrow. I encourage all committee members to collaborate, think outside the box, and inspire one another to achieve greatness. Let's work together to create an ecosystem where innovation and entrepreneurship thrive, and where our students are empowered to push the boundaries of knowledge and contribute positively to society. I extend my wholehearted support to the IEI-TCET committee and eagerly anticipate the remarkable achievements that will undoubtedly emerge from this endeavor.</p></center>
                    </p>
                </center>
                {/* <button
                onClick={onAnimation}
                style={{marginLeft: "-35rem"}}
                className={`${styles['view-content-btn']} ${styles['color-change-2x']}`}
                >
                <span>→→→→</span>
                </button> */}
                </div>
            </div>
       </> : <>
            <motion.div
            animate={{
                x: isAnimating ? "227%" : 0,
                opacity: isAnimating ? 1 : 0.5,
                rotate: isAnimating ? 360 : 0,
            }}
            initial={{
                opacity: 0.5,
            }}
            transition={{
                type: 'spring',
                stiffness: 60,
            }
        }  
        
            onAnimationComplete={onAnimationComplete}
            className={`${styles['head-message-block-1']}`}
            >
            <div className={`${styles['head-img']} ${!showHOD && styles['head-img-initial']} ${showHOD && styles['sujata-mam-img']}`} onAnimationEnd={()=>setIsAnimating(false)}></div>
            <p className={styles.headName}>Dr. Sujata Alegavi</p>
            </motion.div>
            {showMessage ? (
            <div className={`${styles['head-message-block-2']}`}>
                <div className={`${styles['head-message-content']}`}>
                <h1>H.O.D's message</h1>
                <center>
                    <p style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <center>  <p>It gives me immense pleasure to witness the establishment of the Innovation and Entrepreneurship Initiative at TCET. This initiative reflects our commitment to fostering a culture of innovation, creativity, and entrepreneurship among our students. As we embark on this journey together, I am confident that the IEI-TCET committee will play a pivotal role in shaping the future of our students and the institution. By nurturing a supportive environment, where ideas can flourish and transform into tangible realities, we are nurturing the leaders and pioneers of tomorrow. I encourage all committee members to collaborate, think outside the box, and inspire one another to achieve greatness. Let's work together to create an ecosystem where innovation and entrepreneurship thrive, and where our students are empowered to push the boundaries of knowledge and contribute positively to society. I extend my wholehearted support to the IEI-TCET committee and eagerly anticipate the remarkable achievements that will undoubtedly emerge from this endeavor.</p></center>
                    </p>
                </center>
                {/* <button
                onClick={onAnimation}
                style={{marginLeft: "-35rem"}}
                className={`${styles['view-content-btn']} ${styles['color-change-2x']}`}
                >
                <span>→→→→</span>
                </button> */}
                </div>
            </div>
            ) : (
            <div className={`${styles['initial-head-message']} ${isAnimating ? styles['hidden'] : ''}`}>
                <h1 style={fontFam}>H.O.D's Message</h1>
                <button
                onClick={onAnimation}
                className={`${styles['view-content-btn']} ${styles['color-change-2x']}`}
                >
                <span>→→→→</span>
                </button>
            </div>
            )}
            </>}
        </HeadContent>
       </Fade>

       </div>
        <Fade bottom>
            
        <HeadContent isAnimating2={isAnimating2} setIsAnimating={setIsAnimating2} showMessage2={showMessage2} setShowMessage={setShowMessage2}>
        {screenWidth < 1072 ? <>
        <div className={`${styles['head-message-block-1']}`}>
<div className={`${styles['head-img']} ${!showDHOD && styles['head-img-initial']} ${showDHOD && styles['sunilSirImg']}`}></div>
            <p className={styles.headName}>Mr. Sunil Khatri</p>
</div>
 <div className={`${styles['head-message-block-2']}`}>
                <div className={`${styles['head-message-content']}`}>
                <h1>Deputy H.O.D's message</h1>
                <center>
                    <p>
                    <center>  <p>As Deputy Head of the Department/ Faculty Incharge , I am truly excited about the potential that the Innovation and Entrepreneurship Initiative holds for our college community. This initiative not only aligns with the dynamic nature of today's educational landscape but also underscores our commitment to fostering holistic development among our students.
The IEI-TCET committee serves as a platform for synergistic interactions, idea exchanges, and collaborative projects that will undoubtedly contribute to the growth of our students and the college as a whole. Let's work together to ignite the spark of innovation and entrepreneurship in every student, guiding them to become not just job seekers, but job creators and leaders in their respective fields.
I am excited to witness the remarkable journey ahead and the transformative impact that the IEI-TCET committee will have on our college community
</p></center>
                    </p>
                </center>
                {/* <button
                onClick={onAnimation}
                style={{marginLeft: "-35rem"}}
                className={`${styles['view-content-btn']} ${styles['color-change-2x']}`}
                >
                <span>→→→→</span>
                </button> */}
                </div>
            </div>
       </> : <>
            <motion.div
            animate={{
                x: isAnimating2 ? "227%" : 0,
                opacity: isAnimating2 ? 1 : 0.5,
                rotate: isAnimating2 ? 360 : 0,
            }}
            initial={{
                opacity: 0.5,
            }}
            transition={{
                type: 'spring',
                stiffness: 60,
            }}
            //   onAnimationComplete={onAnimationComplete}
            className={`${styles['head-message-block-1']}`}
            >
            <div className={`${styles['head-img']}  ${!showDHOD && styles['head-img-initial']} ${showDHOD && styles['sunilSirImg']}`}></div>
            <p className={styles.headName}>Mr. Sunil Khatri</p>
            </motion.div>
            {showMessage2 ? (
            <div className={`${styles['head-message-block-2']}`}>
                <div className={`${styles['head-message-content']}`}>
                <h1>Deputy H.O.D's message</h1>
                <center>
                    <p>
                    <center>  <p>As Deputy Head of the Department/ Faculty Incharge , I am truly excited about the potential that the Innovation and Entrepreneurship Initiative holds for our college community. This initiative not only aligns with the dynamic nature of today's educational landscape but also underscores our commitment to fostering holistic development among our students.
The IEI-TCET committee serves as a platform for synergistic interactions, idea exchanges, and collaborative projects that will undoubtedly contribute to the growth of our students and the college as a whole. Let's work together to ignite the spark of innovation and entrepreneurship in every student, guiding them to become not just job seekers, but job creators and leaders in their respective fields.
I am excited to witness the remarkable journey ahead and the transformative impact that the IEI-TCET committee will have on our college community
</p></center>
                    </p>
                </center>
                {/* <button
                onClick={onAnimation}
                style={{marginLeft: "-35rem"}}
                className={`${styles['view-content-btn']} ${styles['color-change-2x']}`}
                >
                <span>→→→→</span>
                </button> */}
                </div>
            </div>
            ) : (
            <div className={`${styles['initial-head-message']} ${isAnimating2 ? styles['hidden'] : ''}`}>
                <h1 style={fontFam}>Deputy H.O.D's Message</h1>
                <button
                onClick={onAnimation2}
                className={`${styles['view-content-btn']} ${styles['color-change-2x']}`}
                >
                <span>→→→→</span>
                </button>
            </div>
            )}
            </>}
        </HeadContent>
        </Fade>

        <Fade bottom>
        <HeadContent >   
            <div  className={`${styles['head-message-block-2 ']} ${styles['faculty-message']}`}>
                <div className={`${styles['faculty-message-content']}`}>
                <h1 style={{fontFamily: `'Tektur', cursive`}}>Faculty's message</h1>
                <center>
                      <p>The IEI-TCET Student chapter of IOT Department, established in the academic year 2023 at Thakur College of Engineering and Technology (TCET) in Mumbai, India, is a beacon of inspiration. This student-led organization, affiliated with the Institute of IoT Engineers, is dedicated to empowering its members in the emerging technologies not only that help the students for peer networking and skill enhancement
The core mission of the IEI-TCET Student Forum is to create a vibrant platform for students to enrich their technical and professional skills, fostering an environment that nurtures innovation and encourages entrepreneurial thinking. With unwavering commitment, this organization envisions a future actively engaged in organizing a diverse array of events, workshops, and seminars aimed at the holistic development of TCET students.
The IEI-TCET Student Forum's portfolio of activities is truly  will be covering  From hosting technical talks delivered by industry experts to orchestrating project and coding competitions, they provide students with hands-on training sessions focused on emerging technologies. These activities not only broaden horizons but also equip students with practical skills, bridging the gap between academia and industry


                    </p>
                </center>
              
                </div>
            </div>
             
        </HeadContent>
        </Fade>

        
        </center>
    </div>
    </div>
);
}

function HeadContent({ children }) {
return (
    <>
    <div className={`${styles['head-message']}  ${styles['color-change-2x-2']}`}>
        {children}
    </div>
    </>
);
}

// function PartB(){
//     return(
// //        <>
// //         <div className={`${styles['head-message-block-1']}`}>
// // <div className={`${styles['head-img']}`}></div>
// //             <p className={styles.headName}>Dr. Sujata Alegavi</p>
// // </div>
// //  <div className={`${styles['head-message-block-2']}`}>
// //                 <div className={`${styles['head-message-content']}`}>
// //                 <h1>H.O.D's message</h1>
// //                 <center>
// //                     <p>
// //                     <center>  <p>It gives me immense pleasure to witness the establishment of the Innovation and Entrepreneurship Initiative at TCET. This initiative reflects our commitment to fostering a culture of innovation, creativity, and entrepreneurship among our students. As we embark on this journey together, I am confident that the IEI-TCET committee will play a pivotal role in shaping the future of our students and the institution. By nurturing a supportive environment, where ideas can flourish and transform into tangible realities, we are nurturing the leaders and pioneers of tomorrow. I encourage all committee members to collaborate, think outside the box, and inspire one another to achieve greatness. Let's work together to create an ecosystem where innovation and entrepreneurship thrive, and where our students are empowered to push the boundaries of knowledge and contribute positively to society. I extend my wholehearted support to the IEI-TCET committee and eagerly anticipate the remarkable achievements that will undoubtedly emerge from this endeavor.</p></center>
// //                     </p>
// //                 </center>
// //                 {/* <button
// //                 onClick={onAnimation}
// //                 style={{marginLeft: "-35rem"}}
// //                 className={`${styles['view-content-btn']} ${styles['color-change-2x']}`}
// //                 >
// //                 <span>→→→→</span>
// //                 </button> */}
// //                 </div>
// //             </div>
// //        </>
//     )
// }

// function PartA(){
//     return(
//         // <>
//         //     <motion.div
//         //     animate={{
//         //         x: isAnimating ? "227%" : 0,
//         //         opacity: isAnimating ? 1 : 0.5,
//         //         rotate: isAnimating ? 360 : 0,
//         //     }}
//         //     initial={{
//         //         opacity: 0.5,
//         //     }}
//         //     transition={{
//         //         type: 'spring',
//         //         stiffness: 60,
//         //     }}
//         //     //   onAnimationComplete={onAnimationComplete}
//         //     className={`${styles['head-message-block-1']}`}
//         //     >
//         //     <div className={`${styles['head-img']}`}></div>
//         //     <p className={styles.headName}>Dr. Sujata Alegavi</p>
//         //     </motion.div>
//         //     {showMessage ? (
//         //     <div className={`${styles['head-message-block-2']}`}>
//         //         <div className={`${styles['head-message-content']}`}>
//         //         <h1>H.O.D's message</h1>
//         //         <center>
//         //             <p>
//         //             <center>  <p>It gives me immense pleasure to witness the establishment of the Innovation and Entrepreneurship Initiative at TCET. This initiative reflects our commitment to fostering a culture of innovation, creativity, and entrepreneurship among our students. As we embark on this journey together, I am confident that the IEI-TCET committee will play a pivotal role in shaping the future of our students and the institution. By nurturing a supportive environment, where ideas can flourish and transform into tangible realities, we are nurturing the leaders and pioneers of tomorrow. I encourage all committee members to collaborate, think outside the box, and inspire one another to achieve greatness. Let's work together to create an ecosystem where innovation and entrepreneurship thrive, and where our students are empowered to push the boundaries of knowledge and contribute positively to society. I extend my wholehearted support to the IEI-TCET committee and eagerly anticipate the remarkable achievements that will undoubtedly emerge from this endeavor.</p></center>
//         //             </p>
//         //         </center>
//         //         {/* <button
//         //         onClick={onAnimation}
//         //         style={{marginLeft: "-35rem"}}
//         //         className={`${styles['view-content-btn']} ${styles['color-change-2x']}`}
//         //         >
//         //         <span>→→→→</span>
//         //         </button> */}
//         //         </div>
//         //     </div>
//         //     ) : (
//         //     <div className={`${styles['initial-head-message']} ${isAnimating ? styles['hidden'] : ''}`}>
//         //         <h1>View H.O.D's Message</h1>
//         //         <button
//         //         onClick={onAnimation}
//         //         className={`${styles['view-content-btn']} ${styles['color-change-2x']}`}
//         //         >
//         //         <span>→→→→</span>
//         //         </button>
//         //     </div>
//         //     )}
//         //     </>
//     )
// }