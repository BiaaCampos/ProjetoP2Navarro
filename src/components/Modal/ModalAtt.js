// No componente 'ModalAtt'
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalAtt({ show, handleClose, selectedItem }) {
  // Define o estado inicial do formulário
  const [formValues, setFormValues] = useState({
    pesquisador: '',
    nomeProjeto: '',
    descricao: '',
  });

  // Efeito useEffect para atualizar o estado do formulário quando o item selecionado muda
  useEffect(() => {
    if (selectedItem) {
      setFormValues({
        pesquisador: selectedItem.pesquisador,
        nomeProjeto: selectedItem.nomeProjeto,
        descricao: selectedItem.descricao,
      });
    }
  }, [selectedItem]);

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSave = async () => {
    try {
      // Envia uma requisição PUT para atualizar o projeto
      const response = await fetch(`http://localhost:5000/pesquisador/${selectedItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error('Falha ao atualizar o projeto');
      }

      // Limpa o formulário
      setFormValues({
        pesquisador: '',
        nomeProjeto: '',
        descricao: '',
      });

      // Fecha o modal
      handleClose();
    } catch (error) {
      console.error('Erro ao atualizar o projeto:', error);
    }
  };


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Atualizar Projeto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formPesquisador">
            <Form.Label>Pesquisador:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Seu nome"
              name="pesquisador"
              value={formValues.pesquisador}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNomeProjeto">
            <Form.Label>Nome Projeto:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome do seu projeto"
              name="nomeProjeto"
              value={formValues.nomeProjeto}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescricao">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="descricao"
              value={formValues.descricao}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave}>
          Salvar Alterações
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAtt;
