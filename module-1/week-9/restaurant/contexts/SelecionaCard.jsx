import PropTypes from 'prop-types';

import React from "react";
import { useState } from "react";

export const AppContext = React.createContext();

const SelecionaCard = props =>{
    const [selecionados, setSelecionados] = useState([])

    const isSelecionado = (cardId) => {
        return selecionados.some(id => id == cardId);
    }

    const handleSelecionar = (card) => {
        console.log(selecionados)
        if(isSelecionado(card.id)){
        setSelecionados(selecionados.filter((prod) => prod.id !== card.id));
        }else{
        setSelecionados([...selecionados, card]);
        }
    }

    return(
        <AppContext.Provider value={{selecionados, handleSelecionar, isSelecionado}}>
            {props.children}
        </AppContext.Provider>
    )
}


SelecionaCard.propTypes = {
    children: PropTypes.node,
}

export default SelecionaCard;