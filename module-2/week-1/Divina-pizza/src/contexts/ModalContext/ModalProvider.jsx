import { ModalContext } from "./ModalContext";

export const ModalProvider = (children) => {
    return(
        <ModalContext.Provider>
            {children}
        </ModalContext.Provider>
    )
}