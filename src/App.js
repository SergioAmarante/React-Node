
import './App.css';
import Rotas from './rotas.js'
import Menu from "./componentes/menu.js"

import {BrowserRouter} from 'react-router-dom';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <header>
          <Menu />
        </header>
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;
