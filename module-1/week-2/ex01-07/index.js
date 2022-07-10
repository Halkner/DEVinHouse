function abreFechaMenu(elemento){
    let dropdown = document.getElementById(elemento);

    if (dropdown.style.display == "none"){
        dropdown.style.display = "block";
    }else{
        dropdown.style.display = "none";
    }
}

function enviarForm(n, em, desc){
    let nome = n.value
    let email = em.value
    let descricao = desc.value

    console.log(`
    Nome: ${nome}
    E-mail: ${email}
    Descrição: ${descricao}`);

    alert("Obrigado por entrar em contato, retornamos em breve! :)")
}