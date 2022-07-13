// [M01S03] EX01

var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ];

listaNumeros.forEach(function(num, i){
    listaNumeros[i] *= 2;
});

console.log(listaNumeros);