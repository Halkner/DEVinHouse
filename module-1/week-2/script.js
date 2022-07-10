function calcularANo(){
    let ano = prompt("Digite um ano: ");
    let anoAtual = new Date().getFullYear();

    if (ano > anoAtual){
        resultado = ano - anoAtual;
    }else{
        resultado = anoAtual - ano;
    }
    alert(`Resultado: ${resultado}`);
}