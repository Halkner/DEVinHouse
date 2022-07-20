function parOuImpar(){
    var num = Number(document.getElementById("numero").value);

    verificaNum = num % 2 == 0 ? alert(`O número ${num} é par.`) : alert(`O número ${num} é ímpar.`);
}