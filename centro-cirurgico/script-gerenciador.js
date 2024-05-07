document.getElementById("bt-gravar").addEventListener("click", gravar);
document.getElementById("bt-apagar").addEventListener("click", apagar);
document.getElementById("bt-novo").addEventListener("click", novo);

let lista = [];

function gravar() {
    let obj = {};
    obj.nome = document.getElementById("nome").value;
    obj.status = document.getElementById("status").value;
    obj.local = document.getElementById("local").value;
    obj.inPrevisto = document.getElementById("inPrevisto").value;
    obj.inCirurgia = document.getElementById("inCirurgia").value;
    obj.fimCirurgia = document.getElementById("fimCirurgia").value;
    obj.saidaPrevista = document.getElementById("saidaPrevista").value;
    
    lista.push(obj);
    atualizarTabela();
}

function atualizarTabela() {
    let tbody = "";
    for (const pessoa of lista) {
        tbody += `<tr><td>${pessoa.nome}</td><td>${pessoa.status}</td><td>${pessoa.local}</td><td>${pessoa.inPrevisto}</td><td>${pessoa.inCirurgia}</td><td>${pessoa.fimCirurgia}</td><td>${pessoa.saidaPrevista}</td></tr>`;
    }
    document.getElementById("tbody").innerHTML = tbody;
}

function apagar() {
    lista = [];
    atualizarTabela();
}

function apagarItem(index) {
    lista.splice(index, 1);
    atualizarTabela();
}

function novo() {
    document.getElementById("nome").value = "";
    document.getElementById("status").value = "";
    document.getElementById("local").value = "";
    document.getElementById("inPrevisto").value = "";
    document.getElementById("inCirurgia").value = "";
    document.getElementById("fimCirurgia").value = "";
    document.getElementById("saidaPrevista").value = "";
}