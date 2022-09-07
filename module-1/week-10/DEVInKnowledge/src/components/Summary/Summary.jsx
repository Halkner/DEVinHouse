import { useAppContext } from "../../contexts/app-context"
import { SummaryCard } from "../SummaryCard/SummaryCard"
import styles from './Summary.module.css'

export const Summary = () => {

    const {categories, openStats} = useAppContext();

    return(
        <>
            {openStats ? 
                <div className={styles.statsContainer}>
                    <div className={styles.stats}>
                        {categories.map((category, index) => (
                            <SummaryCard key={index} title={category.title} count={category.count}/>
                        ))}
                    </div>
                </div>
            :
                ""
            }
        </>
    )
}