import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Secoes } from '../components/Secoes/Secoes';
import './App.css';

function App() {

  const produtos = ['Pizza', 'Lasagna', 'Sardinha']

  return (
    <div>
      <Header/>

      <main>
        <Secoes secao='Entrada' produtos={produtos}/>
      </main>

      <Footer/>
    </div>
  );
}

export default App
