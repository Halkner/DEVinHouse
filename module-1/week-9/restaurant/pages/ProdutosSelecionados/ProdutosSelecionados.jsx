import React from "react"

import {ListaCards} from '@components'
import {useSelect} from '../../hooks/useSelect'

import styles from './ProdutosSelecionados.module.css'

export const ProdutosSelecionados = () => {
    const {selecionados, clearProducts} = useSelect();

    const total = selecionados.reduce((soma, item) => soma + item.valor, 0)
    
    return(
        <React.Fragment>
            <h1 className={styles.prodSelectedTitle}>Produtos Selecionados</h1>
            <p className={styles.limpaProdutos}
                onClick={() => clearProducts()}>Limpar produtos selecionados</p>
            <ListaCards produtos={selecionados}/>
            <p className={styles.total}>Valor total: {`R$ ${total.toFixed(2).replace('.', `,`)}`}</p>
        </React.Fragment>  
    )
}