import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalWindow.module.css'; 
import AttendanceModal from './AttendanceModal';
import StudentList from './StudentList';

function ModalWindow({title, children, arr}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button style={{fontFamily: "Tektur, cursive",' fontWeight': '100'}} onClick={handleShow}>Learn-more</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName='modalDialog'
      >
        <Modal.Header  closeButton style={{backgroundColor: "rgb(255,255,255)"}}>
          <Modal.Title style={{backgroundColor: "rgb(255,255,255)"}}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "rgba(255,255,255,0.18)"}}>
          {children}
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "rgba(255,255,255,0.18)"}}>
          
          <span><AttendanceModal title={title}><StudentList arr={arr} /></AttendanceModal></span>
          <Button onClick={handleClose} variant="danger">close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;