class Produto {
    constructor(nome, preco, emEstoque, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}
class Pedido{
    constructor(numeroPedido, nomeCliente){
        this.numeroPedido = numeroPedido;
        this.nomeCliente = nomeCliente;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
    }
    adicionarProduto(objProduto){
        this.listaProdutos.push(objProduto);
    }
}

const produto1 = new Produto("Batata", 8.99, true, 20);

Pedido.adicionarProduto(produto1);
console.log(Pedido.listaProdutos);