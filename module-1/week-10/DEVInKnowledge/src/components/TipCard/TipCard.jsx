import PropTypes from 'prop-types';

export const TipCard = (title, langSkill, category, description, videoUrl) => {
    return (
        <div className="card">
            <h1 className="card-title">{title}</h1>
            <p className="card-lang-skill">Linguagem/Skill: {langSkill}</p>
            <p className="card-category">Categoria: {category}</p>
            <div className="description">Descrição: {description}</div>

            <span className="btn-video">
                <a href={videoUrl} target="_blank">
                    <img src="../src/assets/video.png" alt="Show video" />
                </a>
            </span>

            <span className="btn-remove-card">
                <img src="../src/assets/trash.png" alt="Remove card" />
            </span>

            <span className="btn-edit-card">
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