// No componente 'MyNavbar'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ModalExample from '../components/Modal/ModalInserir'; // Importe o componente do modal
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavbar() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">NewProjects</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link onClick={handleShowModal}>Cadastrar</Nav.Link>
              <Nav.Link href="#link">Visualizar</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalExample show={showModal} handleClose={handleCloseModal} />
    </>
  );
}

export default MyNavbar;
