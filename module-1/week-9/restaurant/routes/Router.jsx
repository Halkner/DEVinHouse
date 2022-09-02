import { Routes, Route } from "react-router-dom";
import { Produtos } from "../pages/Produtos";
import { ProdutosSelecionados } from "../pages/ProdutosSelecionados/ProdutosSelecionados";

export const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Produtos />} /> 
            <Route path="/MinhasEscolhas" element={<ProdutosSelecionados />} />
        </Routes>
    )
}