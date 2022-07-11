function calcularAno(){
    let ano = prompt("Digite um ano: ");
    let anoAtual = new Date().getFullYear();

    if (ano > anoAtual){
        resultado = ano - anoAtual;
    }else{
        resultado = anoAtual - ano;
    }
    alert(`Resultado: ${resultado}`);
}

var n = document.getElementById("num");

function incrementar(){
    n.innerText = parseInt(n.textContent) + 1;
}

function decrementar(){
    n.innerText = parseInt(n.textContent) - 1;
}

function alteraTitulo(){
    var titulo = document.getElementById("titulo");

    var novoTitulo = document.getElementById("inputTitulo").value;

    titulo.innerText = novoTitulo;
}