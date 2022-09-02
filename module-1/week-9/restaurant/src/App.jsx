import { Footer, Header } from '@components';
import styles from './App.module.css';
import SelecionaCard from '../contexts/SelecionaCard'
import { BrowserRouter } from 'react-router-dom';
import {Router} from '../routes/Router'

function App() {
  return (
    <BrowserRouter>
      <SelecionaCard>
        <div className={styles.app}>
          <Header />

          <main className={styles.main}>
            <Router/>
          </main>

          <Footer />
        </div>
      </SelecionaCard>
    </BrowserRouter>
  );
}

export default App;
