// [M01S03] EX01

var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ];

listaNumeros.forEach(function(undefined, i){
    listaNumeros[i] *= 2;
});

console.log(listaNumeros);

// [M01S03] EX02

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
    console.log(`${listaConvidados[i].nome} ${listaConvidados[i].sobrenome}`);
    document.getElementById("lista").innerHTML += `<li>${listaConvidados[i].nome} ${listaConvidados[i].sobrenome}</li>`
};