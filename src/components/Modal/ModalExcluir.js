// No componente 'DeleteModal'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Excluir Projeto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Tem certeza que deseja excluir este projeto?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
