// [M01S03] EX04 -----------------------------------

function pessoaConvidada(nome, sobrenome, setor, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.setor = setor;
    this.idade = idade;
}

let pessoa1 = new pessoaConvidada("Cristiana", "Elias", "Camarote", 10);
let pessoa2 = new pessoaConvidada("Geovana", "Antunes", "Pista", 20);
let pessoa3 = new pessoaConvidada("Elizandra", "Gomes", "Arquibancada", 17);
let pessoa4 = new pessoaConvidada("André","de Lima", "Arquibancada", 30);
let pessoa5 = new pessoaConvidada("Fábio", "Mariano", "Pista", 18);
let pessoa6 = new pessoaConvidada("Adilson", "Elias", "Camarote", 45);

// [M01S03] EX05 -----------------------------------

var listaDeConvidados = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6];

// [M01S03] EX06 -----------------------------------

function liberarBebidas(listaConvidados){
    listaVazia = [];
    for (const i in listaConvidados){
        convidado = listaConvidados[i];
        if (convidado.idade > 17){
            convidado["openBar"] = true;
        }else{
            convidado["openBar"] = false;
        }
        listaVazia.push(convidado);
    }
    return listaVazia;
}

var convidadosComBebidasProcessada = liberarBebidas(listaDeConvidados);

// [M01S03] EX07 -----------------------------------

function separarCamarote(listaConvidados){
    let listaConvidadosFiltrada = listaConvidados.filter(convidado => convidado.setor === "Camarote");
    return listaConvidadosFiltrada;
}

function separarPista(listaConvidados){
    let listaConvidadosFitlrada = listaConvidados.filter(convidado => convidado.setor === "Pista");
    return listaConvidadosFitlrada
}

function separarArquibancada(listaConvidados){
    let listaConvidadosFitlrada = listaConvidados.filter(convidado => convidado.setor === "Arquibancada");
    return listaConvidadosFitlrada
}

let convidadosCamarote = separarCamarote(convidadosComBebidasProcessada);
let convidadosPista = separarPista(convidadosComBebidasProcessada);
let convidadosArquibancada = separarArquibancada(convidadosComBebidasProcessada);

// [M01S03] EX08 e EX09 -----------------------------------

let listaCamarote = document.getElementById("listaCamarote");
let listaArquibancada = document.getElementById("listaArquibancada");
let listaPista = document.getElementById("listaPista");

Object.keys(convidadosCamarote).forEach(item => {
    if (convidadosCamarote[item].openBar === false){
        listaCamarote.innerHTML += `<li>${convidadosCamarote[item].nome} ${convidadosCamarote[item].sobrenome}</li>`
    }else{
        listaCamarote.innerHTML += `<li>${convidadosCamarote[item].nome} ${convidadosCamarote[item].sobrenome} 🍹</li>`
    }
});

Object.keys(convidadosArquibancada).forEach(item => {
    if (convidadosArquibancada[item].openBar === false){
        listaArquibancada.innerHTML += `<li>${convidadosArquibancada[item].nome} ${convidadosArquibancada[item].sobrenome}</li>`
    }else{
        listaArquibancada.innerHTML += `<li>${convidadosArquibancada[item].nome} ${convidadosArquibancada[item].sobrenome} 🍹</li>`
    }
});

Object.keys(convidadosPista).forEach(item => {
    if (convidadosPista[item].openBar === false){
        listaPista.innerHTML += `<li>${convidadosPista[item].nome} ${convidadosPista[item].sobrenome}</li>`
    }else{
        listaPista.innerHTML += `<li>${convidadosPista[item].nome} ${convidadosPista[item].sobrenome} 🍹</li>`
    } 
});