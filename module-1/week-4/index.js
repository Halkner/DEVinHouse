// Clientes cadastrados
const contasClientes = [
    {
    id: 1,
    nome: 'Cristiana',
    saldo: 51630,
    },
    {
    id: 2,
    nome: 'Matheus',
    saldo: 45970,
    },
    {
    id: 3,
    nome: 'Jaderson',
    saldo: 27350,
    },
];

// Atribuindo o select do dropdown a uma variável
let selectClientes = document.getElementById("conta");

// Função onload para passar os clientes do array para o dropdown
function inputClientes(){
    for(let i = 0; i < contasClientes.length; i++){
        selectClientes.innerHTML += `<option>${contasClientes[i].nome}</option>`
    }
}

// Função para descobrir o ID do cliente informado.
function descobreID(cliente){
    for(var chave in contasClientes){
        if(contasClientes[chave].nome === cliente){
            return contasClientes[chave].id;
        }
    }
}

// Função de submit do botão do form
function enviarOperacao(){
    let operacao = document.getElementById("operacao").value;
    let valor = Number(document.getElementById("valor").value);
    let cliente = selectClientes.value;
    let id = descobreID(cliente);

    switch(operacao){
        case "sacar":
            sacar(valor, id);
            break;
    }
}

// Função de saque
function sacar(valor, id){
    let saldo = contasClientes[id-1].saldo;
    
    if (valor <= 0 || isNaN(valor)){
        alert("Valor para saque inválido.");
    }else if(valor > saldo){
        alert(`Saldo insuficiente! Seu saldo é de: R$ ${saldo}`);
    }else{
        contasClientes[id-1].saldo -= valor
        saldoAposSaque = saldo - valor;
        alert(`Saque feito com sucesso! Foi sacado R$ ${valor} do seu saldo de R$ ${saldo}, ficando com R$ ${saldoAposSaque}. `);
    }
}