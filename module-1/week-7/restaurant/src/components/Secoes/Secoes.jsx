import PropTypes from 'prop-types';

import { RenderizaCard } from '../RenderizaCard/RenderizaCard';

export const Secoes = ({secao, produtos}) => {
    console.log(produtos)
    return (
        <div className="secao-container">
            <div>
                <h2>{secao}</h2>
                <hr />
            </div>
            <div>
                <RenderizaCard produtos={produtos}/>
            </div>
        </div>
    );
};

Secoes.propTypes = {
    secao: PropTypes.string.isRequired,
    produtos: PropTypes.array.isRequired,
    // subSecoes: PropTypes.arrayOf(PropTypes.string),
};
  