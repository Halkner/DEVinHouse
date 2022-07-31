import { Pedido } from "./Pedido.js";
import { Produto } from "./Produto.js";
import { renderizaCard } from "./renderizaCard.js";

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


const mainBody = document.getElementById("pedidos");

mainBody.appendChild(renderizaCard(pedido1));
mainBody.appendChild(renderizaCard(pedido2));
