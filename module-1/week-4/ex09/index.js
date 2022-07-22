var buttonClassificar = document.getElementById("btnClassifica");
buttonClassificar.addEventListener("click", classifica);

function classifica(){
    let idade = Number(document.getElementById("idade").value);
    if(idade > 0 && idade <= 15){
        alert("Jovem");
    }else if(idade >= 16 && idade <= 64){
        alert("Adulto");
    }else if(idade >= 65){
        alert("Idoso");
    }else{
        alert("Idade inválida");
    }
}