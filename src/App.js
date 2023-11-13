import './App.css'; 
import Cabecalho from './componentes/header/header';

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <h1>PetGo</h1>
          </div>
          <div className="col-10">
            <Cabecalho />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="App">
          <p>Conteúdo da página aqui.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
