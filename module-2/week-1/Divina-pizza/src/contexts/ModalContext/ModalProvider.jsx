import { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({children}) => {

    const [ModalIsOpen, SetModal] = useState(false);

    return(
        <ModalContext.Provider value={{ModalIsOpen, SetModal}}>
            {children}
        </ModalContext.Provider>
    )
}