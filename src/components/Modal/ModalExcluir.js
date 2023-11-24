// No componente 'DeleteModal'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal({ show, handleClose, selectedItem, handleDeleteData }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/pesquisador/${selectedItem.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Falha ao excluir o projeto');
      }

      // Chama a função de exclusão passada como prop
      handleDeleteData(selectedItem);

      // Fecha o modal
      handleClose();
    } catch (error) {
      console.error('Erro ao excluir o projeto:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Excluir Projeto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Tem certeza que deseja excluir este projeto?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
