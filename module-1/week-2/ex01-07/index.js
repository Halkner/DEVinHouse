function abreFechaMenu(elemento){
    let dropdown = document.getElementById(elemento);

    if (dropdown.style.display == "none"){
        dropdown.style.display = "block";
    }else{
        dropdown.style.display = "none";
    }
}