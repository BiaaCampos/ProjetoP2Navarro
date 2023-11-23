// No componente 'BasicExample'
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../table/table.css';
import Button from 'react-bootstrap/Button';
import UpdateModal from '../Modal/ModalAtt'; // Importe o componente do modal de atualização
import DeleteModal from '../Modal/ModalExcluir'; // Importe o componente do modal de exclusão

function BasicExample() {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleShowUpdateModal = () => setShowUpdateModal(true);
  const handleCloseUpdateModal = () => setShowUpdateModal(false);

  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  return (
    <>
      <Table className="table-style">
        <thead>
          <tr className='table1'>
            <th className='table1 first-column'>#</th>
            <th>Pesquisador</th>
            <th>Nome Projeto</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Projeto de IA</td>
            <td>
              <Button variant="info" onClick={handleShowUpdateModal}>
                Atualizar
              </Button>{' '}
              <Button variant="danger" onClick={handleShowDeleteModal}>
                Excluir
              </Button>{' '}
            </td>
          </tr>
        </tbody>
      </Table>

      <UpdateModal show={showUpdateModal} handleClose={handleCloseUpdateModal} />
      <DeleteModal show={showDeleteModal} handleClose={handleCloseDeleteModal} />
    </>
  );
}

export default BasicExample;
