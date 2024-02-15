import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from './Events.module.css';
import Tilt from 'react-parallax-tilt'
import { Modal } from 'bootstrap';
import ModalWindow from '../components/ModalWindow';
import '../components/ModalWindow.module.css'; 
import AttendanceModal from '../components/AttendanceModal';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

export default function Events() {
  return (
    <div className={`${styles['color-change-2x-2']} ${styles['container']}`}>
      <Navbar class1={`${styles['color-change-2x-2']}`} />
      <div className={`${styles['color-change-2x']} ${styles['container-wrapper']}`}>
        <EventItems />
      </div>
    </div>
  );
}

function EventItems() {


  return (
   <center>
     <div className={`${styles['event-item-box']}`}>
      
    {/* <Bounce bottom cascade> */}
    <div className={`${styles['event-item-wrapper']}`}>
     <Fade bottom left>
     <Tilt>
        <div className={`${styles['event-item']} "data-tilt" ${styles['color-change-2x-1']}`}>
            <div  className={`${styles['grid-img']}`}></div>
            <ModalWindow  title={"Event-1"} arr={["TE-02-ayush dhawan", "TE-07-ishaant dhawan", "TE-24-shreya suhas sapre", "TE-07-ishaant dhawan", "shreya dhawan", "ayush dhawan", "ishaant dhawan", "shreya dhawan", "ishaant dhawan", "shreya dhawan","ayush dhawan", "ishaant dhawan", "shreya dhawan", "ishaant dhawan", "shreya dhawan","ayush dhawan", "ishaant dhawan", "shreya dhawan", "ishaant dhawan", "shreya dhawan","ayush dhawan", "ishaant dhawan", "shreya dhawan", "ishaant dhawan", "shreya dhawan","ayush dhawan", "ishaant dhawan", "shreya dhawan", "ishaant dhawan", "shreya dhawan","ayush dhawan", "ishaant dhawan", "shreya dhawan", "ishaant dhawan", "shreya dhawan","TE-02-ayush dhawan", "TE-07-ishaant dhawan", "TE-24-shreya suhas sapre",  ]} > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna a tortor efficitur, vel fringilla felis venenatis. Nullam bibendum odio at turpis sollicitudin, in consectetur est mattis. Duis suscipit, eros id tincidunt egestas, tortor arcu finibus libero, eget feugiat nulla velit nec libero. Vivamus cursus, arcu ac iaculis faucibus, elit erat dictum purus, eget commodo mauris justo non metus. Fusce ac arcu in nisi auctor tincidunt. In hac habitasse platea dictumst. Sed maximus, risus et dapibus mattis, quam arcu fringilla ex, nec faucibus metus quam vel tellus. Curabitur nec mauris nec nunc posuere varius vel in mauris. Nulla facilisi. Aenean vel mi nec nisl fringilla consectetur. Nam non mi sem. Sed id urna eu justo ultricies vestibulum non vel ipsum. Vivamus venenatis, sem vel bibendum efficitur, justo nisl vehicula dui, eu viverra elit elit id est</ModalWindow>
        </div>
     </Tilt>
     </Fade>
      </div>
     <div className={`${styles['event-item-wrapper']}`}>
     <Fade bottom>
     <Tilt>
        <div className={`${styles['event-item']} "data-tilt" ${styles['color-change-2x-1']}`}>
            <div  className={`${styles['grid-img']}`}></div>
            <ModalWindow title={"Event-2"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna a tortor efficitur, vel fringilla felis venenatis. Nullam bibendum odio at turpis sollicitudin, in consectetur est mattis. Duis suscipit, eros id tincidunt egestas, tortor arcu finibus libero, eget feugiat nulla velit nec libero. Vivamus cursus, arcu ac iaculis faucibus, elit erat dictum purus, eget commodo mauris justo non metus. Fusce ac arcu in nisi auctor tincidunt. In hac habitasse platea dictumst. Sed maximus, risus et dapibus mattis, quam arcu fringilla ex, nec faucibus metus quam vel tellus. Curabitur nec mauris nec nunc posuere varius vel in mauris. Nulla facilisi. Aenean vel mi nec nisl fringilla consectetur. Nam non mi sem. Sed id urna eu justo ultricies vestibulum non vel ipsum. Vivamus venenatis, sem vel bibendum efficitur, justo nisl vehicula dui, eu viverra elit elit id est</ModalWindow>
        </div>
     </Tilt>
     </Fade>
      </div>
     <div className={`${styles['event-item-wrapper']}`}>
     <Fade bottom right>
     <Tilt>
        <div className={`${styles['event-item']} "data-tilt" ${styles['color-change-2x-1']}`}>
            <div  className={`${styles['grid-img']}`}></div>
            <ModalWindow title={"Event-3"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna a tortor efficitur, vel fringilla felis venenatis. Nullam bibendum odio at turpis sollicitudin, in consectetur est mattis. Duis suscipit, eros id tincidunt egestas, tortor arcu finibus libero, eget feugiat nulla velit nec libero. Vivamus cursus, arcu ac iaculis faucibus, elit erat dictum purus, eget commodo mauris justo non metus. Fusce ac arcu in nisi auctor tincidunt. In hac habitasse platea dictumst. Sed maximus, risus et dapibus mattis, quam arcu fringilla ex, nec faucibus metus quam vel tellus. Curabitur nec mauris nec nunc posuere varius vel in mauris. Nulla facilisi. Aenean vel mi nec nisl fringilla consectetur. Nam non mi sem. Sed id urna eu justo ultricies vestibulum non vel ipsum. Vivamus venenatis, sem vel bibendum efficitur, justo nisl vehicula dui, eu viverra elit elit id est</ModalWindow>
        </div>
     </Tilt>
     </Fade>
      </div>
     <div className={`${styles['event-item-wrapper']}`}>
     <Fade bottom left>
     <Tilt>
        <div className={`${styles['event-item']} "data-tilt" ${styles['color-change-2x-1']}`}>
            <div  className={`${styles['grid-img']}`}></div>
            <ModalWindow title={"Event-4"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna a tortor efficitur, vel fringilla felis venenatis. Nullam bibendum odio at turpis sollicitudin, in consectetur est mattis. Duis suscipit, eros id tincidunt egestas, tortor arcu finibus libero, eget feugiat nulla velit nec libero. Vivamus cursus, arcu ac iaculis faucibus, elit erat dictum purus, eget commodo mauris justo non metus. Fusce ac arcu in nisi auctor tincidunt. In hac habitasse platea dictumst. Sed maximus, risus et dapibus mattis, quam arcu fringilla ex, nec faucibus metus quam vel tellus. Curabitur nec mauris nec nunc posuere varius vel in mauris. Nulla facilisi. Aenean vel mi nec nisl fringilla consectetur. Nam non mi sem. Sed id urna eu justo ultricies vestibulum non vel ipsum. Vivamus venenatis, sem vel bibendum efficitur, justo nisl vehicula dui, eu viverra elit elit id est</ModalWindow>
        </div>
     </Tilt>
     </Fade>
      </div>
     <div className={`${styles['event-item-wrapper']}`}>
    <Fade bottom>
    <Tilt>
        <div className={`${styles['event-item']} "data-tilt" ${styles['color-change-2x-1']}`}>
            <div  className={`${styles['grid-img']}`}></div>
            <ModalWindow title={"Event-5"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna a tortor efficitur, vel fringilla felis venenatis. Nullam bibendum odio at turpis sollicitudin, in consectetur est mattis. Duis suscipit, eros id tincidunt egestas, tortor arcu finibus libero, eget feugiat nulla velit nec libero. Vivamus cursus, arcu ac iaculis faucibus, elit erat dictum purus, eget commodo mauris justo non metus. Fusce ac arcu in nisi auctor tincidunt. In hac habitasse platea dictumst. Sed maximus, risus et dapibus mattis, quam arcu fringilla ex, nec faucibus metus quam vel tellus. Curabitur nec mauris nec nunc posuere varius vel in mauris. Nulla facilisi. Aenean vel mi nec nisl fringilla consectetur. Nam non mi sem. Sed id urna eu justo ultricies vestibulum non vel ipsum. Vivamus venenatis, sem vel bibendum efficitur, justo nisl vehicula dui, eu viverra elit elit id est</ModalWindow>
        </div>
     </Tilt>
    </Fade>
      </div>
     <div className={`${styles['event-item-wrapper']}`}>
    <Fade bottom right>
    <Tilt>
        <div className={`${styles['event-item']} "data-tilt" ${styles['color-change-2x-1']}`}>
            <div  className={`${styles['grid-img']}`}></div>
            <ModalWindow title={"Event-6"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna a tortor efficitur, vel fringilla felis venenatis. Nullam bibendum odio at turpis sollicitudin, in consectetur est mattis. Duis suscipit, eros id tincidunt egestas, tortor arcu finibus libero, eget feugiat nulla velit nec libero. Vivamus cursus, arcu ac iaculis faucibus, elit erat dictum purus, eget commodo mauris justo non metus. Fusce ac arcu in nisi auctor tincidunt. In hac habitasse platea dictumst. Sed maximus, risus et dapibus mattis, quam arcu fringilla ex, nec faucibus metus quam vel tellus. Curabitur nec mauris nec nunc posuere varius vel in mauris. Nulla facilisi. Aenean vel mi nec nisl fringilla consectetur. Nam non mi sem. Sed id urna eu justo ultricies vestibulum non vel ipsum. Vivamus venenatis, sem vel bibendum efficitur, justo nisl vehicula dui, eu viverra elit elit id est</ModalWindow>
        </div>
     </Tilt>
    </Fade>
      </div>
     <div className={`${styles['event-item-wrapper']}`}>
     <Fade bottom left>
     <Tilt>
        <div className={`${styles['event-item']} "data-tilt" ${styles['color-change-2x-1']}`}>
            <div  className={`${styles['grid-img']}`}></div>
            <ModalWindow title={"Event-7"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna a tortor efficitur, vel fringilla felis venenatis. Nullam bibendum odio at turpis sollicitudin, in consectetur est mattis. Duis suscipit, eros id tincidunt egestas, tortor arcu finibus libero, eget feugiat nulla velit nec libero. Vivamus cursus, arcu ac iaculis faucibus, elit erat dictum purus, eget commodo mauris justo non metus. Fusce ac arcu in nisi auctor tincidunt. In hac habitasse platea dictumst. Sed maximus, risus et dapibus mattis, quam arcu fringilla ex, nec faucibus metus quam vel tellus. Curabitur nec mauris nec nunc posuere varius vel in mauris. Nulla facilisi. Aenean vel mi nec nisl fringilla consectetur. Nam non mi sem. Sed id urna eu justo ultricies vestibulum non vel ipsum. Vivamus venenatis, sem vel bibendum efficitur, justo nisl vehicula dui, eu viverra elit elit id est</ModalWindow>
        </div>
     </Tilt>
     </Fade>
      </div>
     <div className={`${styles['event-item-wrapper']}`}>
     <Fade bottom>
     <Tilt>
        <div className={`${styles['event-item']} "data-tilt" ${styles['color-change-2x-1']}`}>
            <div  className={`${styles['grid-img']}`}></div>
            <ModalWindow title={"Event-8"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna a tortor efficitur, vel fringilla felis venenatis. Nullam bibendum odio at turpis sollicitudin, in consectetur est mattis. Duis suscipit, eros id tincidunt egestas, tortor arcu finibus libero, eget feugiat nulla velit nec libero. Vivamus cursus, arcu ac iaculis faucibus, elit erat dictum purus, eget commodo mauris justo non metus. Fusce ac arcu in nisi auctor tincidunt. In hac habitasse platea dictumst. Sed maximus, risus et dapibus mattis, quam arcu fringilla ex, nec faucibus metus quam vel tellus. Curabitur nec mauris nec nunc posuere varius vel in mauris. Nulla facilisi. Aenean vel mi nec nisl fringilla consectetur. Nam non mi sem. Sed id urna eu justo ultricies vestibulum non vel ipsum. Vivamus venenatis, sem vel bibendum efficitur, justo nisl vehicula dui, eu viverra elit elit id est</ModalWindow>
        </div>
     </Tilt>
     </Fade>
      </div>
     <div className={`${styles['event-item-wrapper']}`}>
    <Fade bottom right>
    <Tilt>
        <div className={`${styles['event-item']} "data-tilt" ${styles['color-change-2x-1']}`}>
            <div  className={`${styles['grid-img']}`}></div>
            <ModalWindow title={"Event-9"}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor urna a tortor efficitur, vel fringilla felis venenatis. Nullam bibendum odio at turpis sollicitudin, in consectetur est mattis. Duis suscipit, eros id tincidunt egestas, tortor arcu finibus libero, eget feugiat nulla velit nec libero. Vivamus cursus, arcu ac iaculis faucibus, elit erat dictum purus, eget commodo mauris justo non metus. Fusce ac arcu in nisi auctor tincidunt. In hac habitasse platea dictumst. Sed maximus, risus et dapibus mattis, quam arcu fringilla ex, nec faucibus metus quam vel tellus. Curabitur nec mauris nec nunc posuere varius vel in mauris. Nulla facilisi. Aenean vel mi nec nisl fringilla consectetur. Nam non mi sem. Sed id urna eu justo ultricies vestibulum non vel ipsum. Vivamus venenatis, sem vel bibendum efficitur, justo nisl vehicula dui, eu viverra elit elit id est</ModalWindow>
        </div>
     </Tilt>
    </Fade>
      </div>
    {/* </Bounce> */}
  </div>
   </center>
  );
}
