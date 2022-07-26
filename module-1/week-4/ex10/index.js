const inputData = document.getElementById("data");

function verificaEstacao(){
    const data = new Date(`${inputData.value} 00:00`);
    let dia = data.getDate();
    let mes = data.getMonth()+1;

    function imagemEstacao(estacao){

        const image = document.getElementById("imagem");
        switch(estacao){
            case "Outono":
                image.src = "assets/autumn.jpg"
                break;
            case "Inverno":
                image.src = "assets/winter.jpg"
                break;
            case "Primavera":
                image.src = "assets/spring.jpg"
                break;
            case "Verão":
                image.src = "assets/summer.jpg"
                break;
        }
    }

    if((dia >= 22 && mes == 3) || mes == 4 || mes == 5 || (dia <= 21 && mes == 6)){
        imagemEstacao("Outono");
    }else if((dia >= 22 && mes == 6) || mes == 7 || mes == 8 || (dia <= 21 && mes == 9)){
        imagemEstacao("Inverno");
    }else if((dia >= 22 && mes == 9) || mes == 10 || mes == 11 || (dia <= 21 && mes == 12)){
        imagemEstacao("Primavera");
    }else if((dia >= 22 && mes == 12) || mes == 1 || mes == 2 || (dia <= 21 && mes == 3)){
        imagemEstacao("Verão");
    }
}