import React from "react";
import { useState } from "react";

const AppContext = React.createContext();

const initialState = {
    id: null,
}

const SelecionaCard = props =>{
    const [selecionados, setSelecionados] = useState(initialState)

    const handleSelecionar = (card) => {
        if(selecionados.includes(card.id)){
        setSelecionados(selecionados.filter((id) => id !== card.id));
        }else{
        setSelecionados([...selecionados, card.id]);
        }
    }

    const isSelecionado = (cardId) => {
        if(selecionados.some(id => id == cardId)){
            return "Card está selecionado."
        }else{
            return "Card não está selecionado."
        }
    }

    return(
        <AppContext.Provider value={{
            listaSelecionados: selecionados,
            selecionaCard: produto => handleSelecionar(produto),
            estaSelecionado: cardId => isSelecionado(cardId),
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default SelecionaCard;