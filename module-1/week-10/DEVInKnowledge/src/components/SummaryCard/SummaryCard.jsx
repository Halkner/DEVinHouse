import PropTypes from 'prop-types';
import styles from './SummaryCard.module.css'

export const SummaryCard = ({title, count}) => {
    return(
        <div className={styles.cardStats}>
            <p className={styles.pStatsName}>{title}</p>
            <p className={styles.pStatsNumber}>{count}</p>
        </div>
    )
}

SummaryCard.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
}