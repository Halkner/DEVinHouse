var data = document.getElementById("data").value;

function verificaEstacao(){
    let data = new Date(data);
    let dia = data.getDate();
    let mes = data.getMonth();

    if(data >= `22/12/${data.getYear()}`){
        alert("Verão");
    }

}