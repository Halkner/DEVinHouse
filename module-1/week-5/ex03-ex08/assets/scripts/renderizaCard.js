const formataProduto = (prod) => {
    const liProduto = document.createElement("li");
    liProduto.innerText = `${prod.quantidade}x ${prod.nome} - Preço: R$${prod.preco}`

    return liProduto;
}

const listarProdutos = (arrayProd) => {
    let prodList = document.createElement("ul");

    arrayProd.forEach((prod) => {
        prodList.appendChild(formataProduto(prod));
    });

    return prodList;
}

export const renderizaCard = (pedido) => {
    const cardContainer = document.createElement("div");
    cardContainer.id = "card-container";
    cardContainer.innerHTML = /*html*/`
            <p>Pedido n. <strong>${pedido.numeroPedido}</strong><p>
            <p>Data: ${pedido.dataPedido}</p>
            <p><strong>Cliente:</strong> ${pedido.nomeCliente}</p>
            <p><strong>Valor total:</strong> R$${pedido.calcularTotal()}</p>
            <p><strong>Está pago?</strong> ${pedido.estaPago ? "Sim" : "Não"}</p>
            <p>Produtos:</p>
    `
    cardContainer.appendChild(listarProdutos(pedido.listaProdutos));
    return cardContainer;
}