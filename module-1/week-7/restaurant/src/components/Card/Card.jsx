import PropTypes from 'prop-types';

import './Card.css';

export const Card = ({produto}) => {
    const valorFormatado = Number(produto.valor).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    return (
        <div className="card">
            <img className="card-image" alt="Foto do prato" src={produto.img}/>

            <div className="card-info">
                <h2 className="prato">{produto.prato}</h2>
                <hr className='hr-card'/>

                <p className="descricao">{produto.descricao}</p>

                <p className="valor">{valorFormatado}</p>

                <p className="tempo">{produto.tempoDePreparo}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    produto: PropTypes.shape({
      img: PropTypes.string.isRequired,
      prato: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
      valor: PropTypes.number.isRequired,
      tempoDePreparo: PropTypes.string,
    }),
};