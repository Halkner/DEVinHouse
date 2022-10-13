import { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({children}) => {

    const [ModalIsOpen, SetModalIsOpen] = useState(false);

    return(
        <ModalContext.Provider value={{ModalIsOpen, SetModalIsOpen}}>
            {children}
        </ModalContext.Provider>
    )
}