import PropTypes from 'prop-types';

export const SummaryCard = ({title, count}) => {
    return(
        <div>
            <p className="p-stats-name">{title}</p>
            <p className="p-stats-number" id="stats-total">{count}</p>
        </div>
    )
}

SummaryCard.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
}