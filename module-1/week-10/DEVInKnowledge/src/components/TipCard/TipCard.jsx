import PropTypes from 'prop-types';
import styles from './TipCard.module.css'

export const TipCard = ({title, langSkill, category, description, videoUrl}) => {
    return (
        <div className={styles.card}>
            <h1 className={styles.cardTitle}>{title}</h1>
            <p className={styles.cardLangSkill}>Linguagem/Skill: {langSkill}</p>
            <p className={styles.cardCategory}>Categoria: {category}</p>
            <div className={styles.description}>Descrição: {description}</div>
            
            {videoUrl ? 
                <span className={styles.btnVideo}>
                    <a href={videoUrl} target="_blank">
                        <img src="../src/assets/video.png" alt="Show video" />
                    </a>
                </span>
                : ""}

            <span className={styles.btnRemoveCard}>
                <img src="../src/assets/trash.png" alt="Remove card" />
            </span>

            <span className={styles.btnEditCard}>
                <img src="../src/assets/edit.png" alt="Edit card" />
            </span>
        </div>
    )
}

TipCard.propTypes = {
    title: PropTypes.string,
    langSkill: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    videoUrl: PropTypes.string,
}