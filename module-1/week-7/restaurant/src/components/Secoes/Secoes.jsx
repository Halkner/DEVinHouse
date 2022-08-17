import PropTypes from 'prop-types';

import { RenderizaCard } from '../RenderizaCard/RenderizaCard';
import './Secoes.css';

export const Secoes = ({secao, produtos, subSecoes}) => {
    return (
        <div className="secao-container">
            <div>
                <h2 className='titulo-secao'>{secao}</h2>
                <hr />
            </div>
            <div className='cards-secao'>
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
  