import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/navbar';
import Table from './components/table/table';

function App() {
  return (
    <div className="App">
      <MyNavbar />
       <div className='homepage'>
          <div className='container'>
            <div className="tableInfos" >
              <Table />
            </div>
          </div>
       </div>
    </div>
  );
}

export default App;
