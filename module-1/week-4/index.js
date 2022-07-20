// Clientes cadastrados
const contasClientes = [
    {
    id: 1,
    nome: 'Cristiana',
    saldo: 51630,
    senha: '1811',
    },
    {
    id: 2,
    nome: 'Matheus',
    saldo: 45970,
    senha: '0707',
    },
    {
    id: 3,
    nome: 'Jaderson',
    saldo: 27350,
    senha: '0311'
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
    return contasClientes.find(x => x.nome === cliente).id;
}

// Função onclick
function enviarOperacao(){
    let operacao = document.getElementById("operacao").value;
    let valor = Number(document.getElementById("valor").value);
    let cliente = selectClientes.value;
    let password = document.getElementById("senha").value;
    let id = descobreID(cliente);

    if (checarPreenchimento(cliente, valor, operacao) === true){

        if(contasClientes[id-1].senha === password){

            if(contasClientes.findIndex(y => y.nome === cliente) != -1){

                switch(operacao){
                    case "sacar":
                        sacar(valor, id);
                        break;
                    case "depositar":
                        depositar(valor, id);
                }
            }else{
                alert("Cliente não cadastrado!");
            }
        }else{
            alert("Senha inválida!");
        }
    }else{
        alert("Por favor, preencha todos os campos para realizar a operação!");
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
        alert(`Saque feito com sucesso! Foi sacado R$ ${valor} do seu saldo de R$ ${saldo}, ficando com R$ ${saldoAposSaque}.`);
    }
}

// Função de depósito
function depositar(valor, id){
    let saldo = contasClientes[id-1].saldo;
    
    if (valor <= 0 || isNaN(valor)){
        alert("Valor para depósito inválido.");
    }else{
        contasClientes[id-1].saldo += valor
        saldoAposDeposito = saldo + valor;
        alert(`Depósito feito com sucesso! Foi depositado R$ ${valor} no seu saldo de R$ ${saldo}, ficando com R$ ${saldoAposDeposito}.`);
    }
}


// Função para checar preenchimento dos campos
function checarPreenchimento(cliente, valor, operacao){
    if(cliente === "" || valor === 0 || operacao === ""){
        return false;
    }else{
        return true;
    }
}