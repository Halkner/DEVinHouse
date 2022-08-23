import styles from './FiltroSecao.module.css'

export const FiltroSecao = ({secoes, onSelecionarSecao}) =>{
    return(
        <div className={styles.filterContainer}>
            <ul className={styles.listSections}>
                <li className={styles.filterBy}>Filtrar por:</li>
                {secoes.map((sec) => (
                    <li className={styles.filterOptions} key={sec.id} onClick={() => {onSelecionarSecao(sec.nome)}}>{sec.nome}</li>
                ))}
            </ul>
        </div>
    )
}