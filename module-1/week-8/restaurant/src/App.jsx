import { Footer, Header, Secao } from '@components';
import produtos from '@services/produtos.json';
import { FiltroSecao } from '@components/FiltroSecao/FiltroSecao';
import styles from './App.module.css';

function App() {

  const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));
  console.log(subSecoesEntradas, subSecoesPrincipais);


 const arraySecoes = [
    {
      id: 1,
      nome: 'Entradas', 
      produtos: produtos.entradas, 
      subSecoes: subSecoesEntradas
    },
    {
      id: 2,
      nome: 'Principais',
      produtos: produtos.principais,
      subSecoes: subSecoesPrincipais
    },
    {
      id: 3,
      nome: 'Sobremesas',
      produtos: produtos.sobremesas,
    }
  ];

  const handleSelecionarSecao = (nomeSecao) => {
    console.log(nomeSecao);
  }
  
  return (
    <div className={styles.app}>

      <Header />
      <FiltroSecao secoes={arraySecoes} onSelecionarSecao={handleSelecionarSecao}/>

      <main className={styles.main}>

        {arraySecoes.map((sec) =>(
          <Secao 
          key={sec.id}
          nome={sec.nome}
          produtos={sec.produtos}
          subSecoes={sec.subSecoes ? Array.from(sec.subSecoes) : null}/>
        ))}

      </main>
      <Footer />
    </div>
  );
}

export default App;
