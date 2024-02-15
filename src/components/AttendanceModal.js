import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './ModalWindow.module.css'; 

function AttendanceModal({title, children}) {
  const [show, setShow] = useState(false);

  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);

  return (
    <>
      <Button onClick={handleShowModal} variant="success">Event attendance</Button>

      <Modal
        show={show}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
        dialogClassName={styles.modalDialog}
        size='lg'
      >
        <Modal.Header  closeButton style={{backgroundColor: "rgb(255,255,255)"}}>
          <Modal.Title style={{backgroundColor: "rgb(255,255,255)"}}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "rgba(255,255,255,0.18)"}}>
          {children}
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "rgba(255,255,255,0.18)"}}>
          
          <Button onClick={handleCloseModal} variant="danger">close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AttendanceModal;