import { Footer } from './components/Footer/Footer.jsx';
import { Header } from './components/Header/Header';
import { Secoes } from './components/Secoes/Secoes';
import produtos from './services/produtos.json';
import './App.css';

function App() {
  const subSecoesPrincipais = new Set(produtos.principais.map((sub) => sub.subSecao));
  const subSecoesEntradas = new Set(produtos.entradas.map((sub) => sub.subSecao));
  const subSecoesBebidas = new Set(produtos.bebidas.map((sub) => sub.subSecao));
  
  return (
    <div>
      <Header/>

      <main>
        <Secoes secao='Entradas' produtos={produtos.entradas} subSecoes={Array.from(subSecoesEntradas)}/>
        
        <Secoes secao='Saladas' produtos={produtos.saladas}/>
 
        <Secoes secao='Pratos Principais' produtos={produtos.principais} subSecoes={Array.from(subSecoesPrincipais)}/>

        <Secoes secao='Sobremesas' produtos={produtos.sobremesas}/>

        <Secoes secao='Carta de Vinhos' produtos={produtos.bebidas} subSecoes={Array.from(subSecoesBebidas)}/>
      </main>

      <Footer/>
    </div>
  );
}

export default App
