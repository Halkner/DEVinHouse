import { Footer } from './components/Footer/Footer.jsx';
import { Header } from './components/Header/Header';
import { Secoes } from './components/Secoes/Secoes';
import produtos from './services/produtos.json';
import './App.css';

function App() {
  return (
    <div>
      <Header/>

      <main>
        <Secoes secao='Entradas' produtos={produtos.entradas}/>
      </main>

      <Footer/>
    </div>
  );
}

export default App
