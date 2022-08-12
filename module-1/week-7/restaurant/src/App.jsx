import { Card } from '../components/Card/Card';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Card nome="Pizza" descricao="Clássica pizza italiana" valor="80" tempoDePreparo="25 minutos"/>
      </main>
      <Footer/>
    </div>
  );
}

export default App
