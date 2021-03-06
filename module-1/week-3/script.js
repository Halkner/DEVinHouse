// [M01S03] EX01 -----------------------------------

var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ];

listaNumeros.forEach(function(undefined, i){
    listaNumeros[i] *= 2;
});

console.log(listaNumeros);

// [M01S03] EX02 -----------------------------------

var listaConvidados = [
    { nome: "José", sobrenome: "Carlos" },
    { nome: "Alessandro", sobrenome: "Viana" },
    { nome: "Paula", sobrenome: "Souza" },
    { nome: "Cristian", sobrenome: "Schimit" },
    { nome: "Beatriz", sobrenome: "Viana" },
    { nome: "Fernanda", sobrenome: "Silveira" },
    { nome: "Cláudia", sobrenome: "Torres" },
    { nome: "Augusto", sobrenome: "Cesar" },
    { nome: "Noemi", sobrenome: "Nakamura" },
    { nome: "Pedro", sobrenome: "Lobo" },
];

for (var i = 0; i < listaConvidados.length; i++){
    document.getElementById("lista").innerHTML += `<li>${listaConvidados[i].nome} ${listaConvidados[i].sobrenome}</li>`
};

// [M01S03] EX03 -----------------------------------


n1 = prompt("Qual o primeiro número?");
n2 = prompt("Qual o segundo número?");
operacao = prompt("Qual operação matemática deseja realizar? [+, -, * ou /]");

switch(operacao){
    case "+":
        let soma = parseInt(n1) + parseInt(n2);
        console.log(`O resultado da soma é: ${soma}.`);
        break;
    case "-":
        let subtrai = parseInt(n1) - parseInt(n2);
        console.log(`O resultado da subtração é: ${subtrai}.`);
        break;
    case "*":
        let multiplica = parseInt(n1) * parseInt(n2);
        console.log(`O resultado da multiplicação é: ${multiplica}.`);
        break;
    case "/":
        let divide = parseInt(n1) / parseInt(n2);
        console.log(`O resultado da divisão é: ${divide}.`);
        break;
}