document.getElementById("bt-gravar").addEventListener("click", gravar);
document.getElementById("bt-apagar").addEventListener("click", apagar);
document.getElementById("bt-novo").addEventListener("click", novo);

let lista = [];
let tpStatus = {
    "Pré-Operatório": "text-bg-info",
    "Transferido": "text-bg-success",
    "Em recuperação": "text-bg-danger"
}

function gravar() {
    let obj = {};
    obj.nome = document.getElementById("nome").value;
    obj.status = document.getElementById("status").value;
    obj.local = document.getElementById("local").value;
    obj.inPrevisto = document.getElementById("inPrevisto").value;
    obj.inCirurgia = document.getElementById("inCirurgia").value;
    obj.fimCirurgia = document.getElementById("fimCirurgia").value;
    obj.saidaPrevista = document.getElementById("saidaPrevista").value;

    let indice = document.getElementById("indice").value;
      //obj.status = pessoa;

    if (indice == "") {
       
        lista.push(obj);
    } else {
        lista[indice] = obj;
    }


    atualizarTabela();
}


function atualizarTabela() {
    let tbody = "";
    let i = 0;
    for (const pessoa of lista) {
        tbody += `<tr onclick="editar(${i})"><td >${pessoa.nome}</td>
        
        <td class="${tpStatus[pessoa.status]}">${pessoa.status}</td>
        <td>${pessoa.local}</td>
        <td>${pessoa.inPrevisto}</td>
        <td>${pessoa.inCirurgia}</td>
        <td>${pessoa.fimCirurgia}</td>
        <td>${pessoa.saidaPrevista}</td>
        </tr>`;
        i++;
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
    document.getElementById('indice').value = "";
}
function editar(i) {

    obj = lista[i];
    document.getElementById('indice').value = i;
    document.getElementById('nome').value = obj.nome;
    document.getElementById('status').value = obj.status;
    document.getElementById('local').value;
}

function apagar() {
    let indice = document.getElementById('indice').value;
    if (indice != "") {
        lista.splice(indice, 1);
        atualizarTabela();
        novo();
    }
    else {
        alert("selecione algum paciente")
    }
}

async function getData() {
    const response = await fetch("https://api.zerosheets.com/v1/chs");
    const data = await response.json();
    
    return data;
}
async function createRow(payload) {
   
    const response = await fetch("https://api.zerosheets.com/v1/chs", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    const data = await response.json();
  
    return data;
}
async function patchRow(lineNumber, payload) {
   
    const url = "https://api.zerosheets.com/v1/chs/" + lineNumber;
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    
   
    return data;
}
async function deleteRow(lineNumber) {
    const url = "https://api.zerosheets.com/v1/chs/" + lineNumber; 
    await fetch(url, {
        method: "DELETE"
    });
}
getData().then( (ls) => {
    lista = ls;
    atualizarTabela();
} );