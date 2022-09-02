import produtos from '@services/produtos.json';
import { Secao } from '@components'

export const Produtos = () =>{
    const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
    const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));

    return(
        <>
            <Secao
            nome='Entradas'
            produtos={produtos.entradas}
            subSecoes={Array.from(subSecoesEntradas)}
            />

            <Secao
            nome='Principais'
            produtos={produtos.principais}
            subSecoes={Array.from(subSecoesPrincipais)}
            />

            <Secao nome='Sobremesas' produtos={produtos.sobremesas} />
        </>
    )
}


