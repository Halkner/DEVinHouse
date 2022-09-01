import { useContext } from "react";
import { AppContext } from "../contexts/SelecionaCard";


export const useSelect = () => {
    return {listaSelecionados, handleSelecionar, isSelecionado} = useContext(AppContext);
}