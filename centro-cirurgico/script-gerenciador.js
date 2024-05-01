let lista = [];

function gravar() {
    let obj = {};
    obj.nome = document.getElementById("nome").value;
    obj.status = document.getElementById("status").value;
    
    lista.push(obj);
    atulizarTabela();
}

function atulizarTabela() {
    let tbody = "";
    for (const pessoa of lista) {
        tbody += `<tr><td>${pessoa.nome}</td><td>${pessoa.status}</td></tr>`;
   
    }   
    document.getElementById("tbody").innerHTML = tbody;
}
document.getElementById("bt-gravar").addEventListener("click", gravar);


