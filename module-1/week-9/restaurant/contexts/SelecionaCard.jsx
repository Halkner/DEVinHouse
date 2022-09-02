import PropTypes from 'prop-types';

import React from "react";
import { useState } from "react";

export const AppContext = React.createContext();

const SelecionaCard = props =>{
    const [selecionados, setSelecionados] = useState([])

    const isSelecionado = (id) => {
        return selecionados.some(prod => prod.id === id);
    }

    const handleSelecionar = (card) => {
        if(isSelecionado(card.id)){
        setSelecionados(selecionados.filter((prod) => prod.id !== card.id));
        }else{
        setSelecionados([...selecionados, card]);
        }
    }

    const clearProducts = () =>{
        setSelecionados([]);
    }

    return(
        <AppContext.Provider value={{selecionados, handleSelecionar, isSelecionado, clearProducts}}>
            {props.children}
        </AppContext.Provider>
    )
}


SelecionaCard.propTypes = {
    children: PropTypes.node,
}

export default SelecionaCard;