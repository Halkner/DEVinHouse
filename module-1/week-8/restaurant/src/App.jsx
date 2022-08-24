import { Footer, Header, Secao } from '@components';
import produtos from '@services/produtos.json';
import { FiltroSecao } from '@components/FiltroSecao/FiltroSecao';
import styles from './App.module.css';
import { useState } from 'react';

function App() {

  const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));
  
  const [secaoSelecionada, setSecaoSelecionada] = useState(null);


 const arraySecoes = [
    {
      id: 1,
      nome: 'Entradas', 
      produtos: produtos.entradas, 
      subSecoes: Array.from(subSecoesEntradas)
    },
    {
      id: 2,
      nome: 'Principais',
      produtos: produtos.principais,
      subSecoes: Array.from(subSecoesPrincipais)
    },
    {
      id: 3,
      nome: 'Sobremesas',
      produtos: produtos.sobremesas,
      subSecoes: null
    }
  ];

  const debug = () =>{
    console.log(arraySecoes.find(o => o.nome === 'Principais').nome.toLowerCase());
  }

  const handleSelecionarSecao = (nomeSecao) => {
    if(nomeSecao === secaoSelecionada){
      setSecaoSelecionada(null);
    }else{
      setSecaoSelecionada(nomeSecao)
    }
  }
  
  return (
    <div className={styles.app}>

      <Header />
      {debug()}
      <FiltroSecao secoes={arraySecoes} onSelecionarSecao={handleSelecionarSecao}/>
      <main className={styles.main}>

        {secaoSelecionada === null ?
          (arraySecoes.map((sec) =>(
            <Secao 
            key={sec.id}
            nome={sec.nome}
            produtos={sec.produtos}
            subSecoes={sec.subSecoes ? sec.subSecoes : null}/>
          ))
          ) : (
            <Secao 
            nome={secaoSelecionada}
            produtos={arraySecoes.find((sec) => sec.nome === secaoSelecionada).produtos}
            subSecoes={arraySecoes.find((sec) => sec.nome === secaoSelecionada).subSecoes}/>
          ) 
        }

      </main>
      <Footer />
    </div>
  );
}

export default App;
