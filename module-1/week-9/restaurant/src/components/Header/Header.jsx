import logo from '@assets/images/logo.jpeg';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
export const Header = () => (
  <header className={styles.header}>
    <div className={styles.titleContainer}>
      <img src={logo} alt='Logo do restaurante' height={50} />
      <h1 className={styles.title}>Green Food</h1>
    </div>

    <nav>
      <ul className={styles.ul}>
        <li>
          <Link className={styles.link} to='/'>
            Menu
          </Link>
          <Link className={styles.link} to='/MinhasEscolhas'>
            Minhas Escolhas
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
