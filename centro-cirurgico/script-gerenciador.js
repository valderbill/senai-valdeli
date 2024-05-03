document.getElementById("bt-gravar").addEventListener("click", gravar);


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
    atulizarTabela();
}

function atulizarTabela() {
    let tbody = "";
    for (const pessoa of lista) {
        tbody += `<tr><td>${pessoa.nome}</td><td>${pessoa.status}</td><td>${pessoa.local}</td><td>${pessoa.inPrevisto}</td><td>${pessoa.inCirurgia}</td><td>${pessoa.fimCirurgia}</td><td>${pessoa.saidaPrevista}</td></tr>`;
   
    }   
    document.getElementById("tbody").innerHTML = tbody;
}


