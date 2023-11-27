// No componente 'BasicExample'
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../table/table.css';
import Button from 'react-bootstrap/Button';
import UpdateModal from '../Modal/ModalAtt';
import DeleteModal from '../Modal/ModalExcluir';

function BasicExample() {
  // Estado local para armazenar os dados
  const [data, setData] = useState([]);
  // Estado local para armazenar o item selecionado
  const [selectedItem, setSelectedItem] = useState(null);
  // Estados locais para controlar a exibição dos modais de atualização e exclusão
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Função para exibir o modal de atualização com o item selecionado
  const handleShowUpdateModal = (item) => {
    setSelectedItem(item);
    setShowUpdateModal(true);
  };

  // Função para fechar o modal de atualização
  const handleCloseUpdateModal = () => setShowUpdateModal(false);

  // Função para exibir o modal de exclusão com o item selecionado
  const handleShowDeleteModal = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  // Função para fechar o modal de exclusão
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  // Função para lidar com a exclusão de dados
  const handleDeleteData = (deletedItem) => {
    // Atualiza o estado local removendo o item excluído
    setData((prevData) => prevData.filter((item) => item.id !== deletedItem.id));
  };

  // Efeito useEffect para buscar dados do servidor quando o componente é montado
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Faz uma requisição para obter os dados do servidor
        const response = await fetch('http://localhost:5000/pesquisador');
        if (!response.ok) {
          throw new Error('Falha ao obter os dados do servidor');
        }
        // Converte os dados da resposta para JSON e atualiza o estado local
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    // Chama a função fetchData quando o componente é montado
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
                <Button variant="danger" onClick={() => handleShowDeleteModal(item)}>
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
      <DeleteModal
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        selectedItem={selectedItem}
        handleDeleteData={handleDeleteData}
      />
    </>
  );
}

export default BasicExample;
