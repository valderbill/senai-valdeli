function validarLogin() {
    let login = document.querySelector("#login").value;
    console.log(login);
    let senha = document.querySelector("#senha").value;
    console.log(senha);

    let msg = document.querySelector("span");
    msg.innerText = "Login ou Senha incorretos!";
    // se login = senai e senha = 010203
    // entao Acesso Permitido
    // senao Login ou Senha incorrretos!

    if (login == "senai" && senha == "010203") {
        // print = "Acesso permitido";
        msg.innerHTML = "Acesso Permitido! <a href='index.html'>Clieque agui</a>";
        msg.style = "background-color: green";
        window.location.href = "index.html";

    } else {
        // print = "Login ou Senha incorretos";
        msg.innerText = "Login ou Senha incorretos";
        msg.style = "background-color: orange"
    }
    return false;
}
