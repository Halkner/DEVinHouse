import { useAppContext } from '../../contexts/app-context';
import styles from './Header.module.css'

export const Header = () => {
    const {openModal, toggleStatsBtn} = useAppContext()
    return(
        <header>
            <span className={styles.openModal}><p onClick={() => openModal()}>Novo Card +</p></span>
            <div className={styles.logo}><img src="./src/assets/logo.png" alt="Logo" /></div>
            <span className={styles.openStats}><p onClick={()=> toggleStatsBtn()} id={styles.btnStats}>Estatísticas</p></span>
        </header>
    )
}