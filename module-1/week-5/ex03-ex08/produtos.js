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
        return valorTotal.toFixed(2);
    }
}

const produto1 = new Produto("Batata", 2.99, true, 10);
const produto2 = new Produto("Maçã", 2.50, true, 5);
const produto3 = new Produto("Shampoo", 23.49, true, 1);
const produto4 = new Produto("Banana", 7.50, true, 2);
const produto5 = new Produto("Creme de Barbear", 7.99, true, 1);


const pedido1 = new Pedido("20220001", "Cristiana");

pedido1.adicionarProduto(produto1);
pedido1.adicionarProduto(produto2);
pedido1.adicionarProduto(produto4);

const pedido2 = new Pedido("20220002", "Matheus");

pedido2.adicionarProduto(produto3);
pedido2.adicionarProduto(produto5);


console.log(pedido1);
console.log(pedido2);

valorPedido1 = pedido1.calcularTotal();
console.log(`Valor total do pedido nº 1: R$${valorPedido1}`);

valorPedido2 = pedido2.calcularTotal();
console.log(`Valor total do pedido nº 2: R$${valorPedido2}`);