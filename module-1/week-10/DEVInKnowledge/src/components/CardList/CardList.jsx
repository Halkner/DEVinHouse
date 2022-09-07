import styles from './CardList.module.css'

export const CardList = ({ children }) => {
    return(
        <div className={styles.cardsContainer}>
            {children}
        </div>
    )
}