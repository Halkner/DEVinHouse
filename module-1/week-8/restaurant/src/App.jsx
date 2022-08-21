import { Footer, Header, Secao } from '@components';
import produtos from '@services/produtos.json';
import styles from './App.module.css';

function App() {
  const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));
  console.log(subSecoesEntradas, subSecoesPrincipais);

  const arraySecoes = [
    {
      nome: 'Entradas', 
      produtos: produtos.entradas, 
      subSecoes: subSecoesEntradas
    },
    {
      nome: 'Principais',
      produtos: produtos.principais,
      subSecoes: subSecoesPrincipais
    },
    {
      nome: 'Sobremesas',
      produtos: produtos.sobremesas,
    }
  ];

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>

        {arraySecoes.map((sec) =>(
          <Secao nome={sec.nome}
          produtos={sec.produtos}
          subSecoes={sec.subSecoes ? Array.from(sec.subSecoes) : null}/>
        ))}
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
