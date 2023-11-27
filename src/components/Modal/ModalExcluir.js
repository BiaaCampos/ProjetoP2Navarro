// No componente 'DeleteModal'
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal({ show, handleClose, selectedItem, handleDeleteData }) {
  // Função para lidar com a exclusão do projeto
  const handleDelete = async () => {
    try {
      // Envia uma requisição DELETE para excluir o projeto
      const response = await fetch(`http://localhost:5000/pesquisador/${selectedItem.id}`, {
        method: 'DELETE',
      });

      // Verifica se a requisição foi bem-sucedida
      if (!response.ok) {
        throw new Error('Falha ao excluir o projeto');
      }

      // Chama a função de exclusão passada como propriedade
      handleDeleteData(selectedItem);

      // Fecha o modal
      handleClose();
    } catch (error) {
      // Trata erros, exibindo uma mensagem no console
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
