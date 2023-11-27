// No componente 'ModalExample'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalExample({ show, handleClose }) {
  const [formValues, setFormValues] = useState({
    pesquisador: '',
    nomeProjeto: '',
    descricao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSave = async () => {
    try {
      // Envia uma requisição POST para adicionar um novo projeto
      const response = await fetch('http://localhost:5000/pesquisador', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error('Falha ao adicionar novo projeto');
      }

      // Limpa o formulário
      setFormValues({
        pesquisador: '',
        nomeProjeto: '',
        descricao: '',
      });

      // Fecha o modal
      handleClose();

      alert('Projeto adicionado com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar novo projeto:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastrar novo Projeto</Modal.Title>
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
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalExample;
