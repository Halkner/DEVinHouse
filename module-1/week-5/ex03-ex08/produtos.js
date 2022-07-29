class Produto {
    constructor(nome, preco, emEstoque, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantidade;
    }
}
class Pedido {
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

    calcularTotal(){
        let valorTotal = 0;
        this.listaProdutos.forEach((item) => {
            valorTotal += item['quantidade'] * item['preco'];
        });
        return valorTotal;
    }
}

const produto1 = new Produto("Batata", 8.99, true, 20);
const produto2 = new Produto("Maçã", 4.89, true, 15);

const pedido1 = new Pedido(01, "Matheus");

pedido1.adicionarProduto(produto1);
pedido1.adicionarProduto(produto2);

console.log(pedido1);

valorPedido1 = pedido1.calcularTotal();
console.log(`Valor total do pedido: R$${valorPedido1}`);
