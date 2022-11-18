import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button,CloseButton} from 'react-bootstrap';


export default function InfoModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="m-0 vh-100 row justify-content-center aling-items-center">
      <div className="col-auto p-5 text-center">

      <Button className="nextButton position-relative" onClick={handleShow}>
        Abrir modal
      </Button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
      
        <Modal.Header >
          <Modal.Title>Modal Ready!!</Modal.Title>
          <CloseButton onClick={handleClose}/>
        </Modal.Header>
        <Modal.Body>Woohoo, estas leyendo un texto en modal</Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
      
          <Button variant="primary" onClick={handleClose}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}