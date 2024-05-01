let lista = [];

function gravar() {
    let obj = {};
    obj.nome = document.getElementById("nome").value;
    
    lista.push(obj);
    atulizarTabela();
}

function atulizarTabela() {
    let tbody = "";
    for (const pessoa of lista) {
        tbody += `<tr><td>${pessoa.nome}</td></tr>`;
    }   
    document.getElementById("tbody").innerHTML = tbody;
}
document.getElementById("bt-gravar").addEventListener("click", gravar);


