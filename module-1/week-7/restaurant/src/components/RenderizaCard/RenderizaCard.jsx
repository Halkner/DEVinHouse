import PropTypes from 'prop-types';

import { Card } from '../Card/Card';

export const RenderizaCard = ({produtos}) =>{
    return(
        <ul className="card-list">
            {produtos.map((produto) => (
                <li className="item" key={produto.id}>
                    <Card produto={produto} />
                </li>
            ))}
        </ul>
    )
}

RenderizaCard.propTypes = {
    produtos: PropTypes.array.isRequired,
};