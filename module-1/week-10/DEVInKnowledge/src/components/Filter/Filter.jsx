import { useAppContext } from "../../contexts/app-context";
import styles from './Filter.module.css'

export const Filter = () => {
    const {filterTips} = useAppContext();

    return(
        <div className={styles.searchDiv}>
            <input type="search" className={styles.searchBar} placeholder="Digite o título do card..." onChange={e => filterTips(e.target.value)}/>
        </div>
    )
}