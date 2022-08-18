import { Footer } from './components/Footer/Footer.jsx';
import { Header } from './components/Header/Header';
import { Secoes } from './components/Secoes/Secoes';
import produtos from './services/produtos.json';
import './App.css';

function App() {
  const subSecoesPrincipais = new Set(produtos.principais.map((sub) => sub.subSecao));
  const subSecoesEntradas = new Set(produtos.entradas.map((sub) => sub.subSecao));
  
  return (
    <div>
      <Header/>

      <main>
        <Secoes secao='Entradas' produtos={produtos.entradas} subSecoes={subSecoesEntradas}/>
        
        <Secoes secao='Saladas' produtos={produtos.saladas}/>
 
        <Secoes secao='Pratos Principais' produtos={produtos.principais} subSecoes={subSecoesPrincipais}/>

        <Secoes secao='Sobremesas' produtos={produtos.sobremesas}/>
      </main>

      <Footer/>
    </div>
  );
}

export default App
