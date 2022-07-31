import { Produto } from "./Produto.js";

export class Pedido{
    constructor(numeroPedido, nomeCliente){
        this.numeroPedido = numeroPedido;
        this.nomeCliente = nomeCliente;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
    }

    adicionarProduto(objProduto){
        const isProd = objProduto instanceof Produto;
        if (isProd){
            this.listaProdutos.push(objProduto);
        }
    }

    calcularTotal(){
        let valorTotal = 0;
        this.listaProdutos.forEach((item) => {
            valorTotal += item['quantidade'] * item['preco'];
        });
        return valorTotal.toFixed(2);
    }
}