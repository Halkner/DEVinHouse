import React from "react";
import { useContext } from "react";

const Context = React.createContext();

export const useAppContext = () => {
    const context = useContext(Context);

    return context;
}


export const AppContext = props => {
    return(
        <Context.Provider value={"Conectado!"}>
            {props.children}
        </Context.Provider>
    )
}

