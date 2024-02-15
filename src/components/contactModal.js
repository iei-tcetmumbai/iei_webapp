import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../pages/Contact.module.css';

function ModalContact({text, iconType, heading}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       <Icon><i onClick={handleShow} className={`fa-solid ${iconType} fa-2xl  ${styles['color-change-2x-2-text']} ${styles['icon']}`} style={{color: "rgb(249, 70, 70)", fontSize: '7em '}}></i></Icon>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body >{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
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

export default ModalContact;