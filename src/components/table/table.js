// No componente 'BasicExample'
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../table/table.css';
import Button from 'react-bootstrap/Button';
import UpdateModal from '../Modal/ModalAtt'; // Importe o componente do modal de atualização
import DeleteModal from '../Modal/ModalExcluir'; // Importe o componente do modal de exclusão

function BasicExample() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleShowUpdateModal = (item) => {
    console.log(item); // Verifique se 'item' está definido corretamente
    setSelectedItem(item);
    setShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => setShowUpdateModal(false);

  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  useEffect(() => {
    // Função para realizar a chamada GET ao servidor json-server
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/pesquisador');
        if (!response.ok) {
          throw new Error('Falha ao obter os dados do servidor');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

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
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.pesquisador}</td>
              <td>{item.nomeProjeto}</td>
              <td>{item.descricao}</td>
              <td>
                <Button variant="info" onClick={() => handleShowUpdateModal(item)}>
                  Atualizar
                </Button>{' '}
                <Button variant="danger" onClick={handleShowDeleteModal}>
                  Excluir
                </Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <UpdateModal
        show={showUpdateModal}
        handleClose={handleCloseUpdateModal}
        selectedItem={selectedItem}
      />
      <DeleteModal show={showDeleteModal} handleClose={handleCloseDeleteModal} />
    </>
  );
}

export default BasicExample;
