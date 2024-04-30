function acessoPainel() {
    
    let usuario = document.querySelector("#usuario").value;
    console.log(usuario);
    let senha = document.querySelector("#senha").value;
    console.log(senha);
    
    let msg = document.querySelector("span");
    msg.innerText = "Login ou Senha incorretos!";
    
    if (usuario == "senai" && senha == "HRT2024") {
       
        msg.innerHTML = "Acesso Permitido! <a href='gerenciador.html'>Clique agui</a>";
        msg.style = "background-color: green";
        window.location.href = "gerenciador.html";

    } else {
        msg.innerText = "Login ou Senha incorretos";
        msg.style = "background-color: #ffffff"
    }
    
    return false;
}