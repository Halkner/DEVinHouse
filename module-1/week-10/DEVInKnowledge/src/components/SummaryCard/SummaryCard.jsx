import PropTypes from 'prop-types';

export const SummaryCard = (props) => {
    return(
        <div>
            <p class="p-stats-name">{props.title}</p>
            <p class="p-stats-number" id="stats-total">{props.count}</p>
        </div>
    )
}

SummaryCard.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
}