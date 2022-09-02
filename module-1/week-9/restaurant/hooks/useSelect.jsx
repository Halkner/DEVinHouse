import { useContext } from "react";
import { AppContext } from "../contexts/SelecionaCard";


export const useSelect = () => {
    const context = useContext(AppContext);

    return context;
}