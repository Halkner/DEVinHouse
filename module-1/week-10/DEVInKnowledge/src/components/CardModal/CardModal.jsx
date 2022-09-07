import styles from './CardModal.module.css'

export const CardModal = () => {
    return(
        <div className={styles.modalCard}>
            <div className={styles.modalCardContent}>
                <span className={styles.closeModal}>&times;</span>
                <h2 id={styles.modalTitulo}></h2>
                <p id={styles.modalSkill}></p>
                <p id={styles.modalCategoria}></p>
                <p id={styles.modalDescricao}></p>
            </div>
        </div>
    )
}