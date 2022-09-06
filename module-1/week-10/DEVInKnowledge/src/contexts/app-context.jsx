import React from "react";
import { useContext } from "react";

const Context = React.createContext();

const AppContext = props => {
    return(
        <Context.Provider value={"Conectado!"}>
            {props.children}
        </Context.Provider>
    )
}

const useAppContext = useContext(Context);
export {useAppContext, AppContext};