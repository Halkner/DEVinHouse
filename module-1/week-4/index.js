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

let selectClientes = document.getElementById("conta");

function inputClientes(){
    for(let i = 0; i < contasClientes.length; i++){
        selectClientes.innerHTML += `<option>${contasClientes[i].nome}</option>`
    }
}