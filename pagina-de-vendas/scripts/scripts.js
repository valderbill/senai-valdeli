let menuContent = document.querySelector('.content');
let menuToggle = menuContent.querySelector('.menu-toggle');
let show = true;

menuToggle.addEventListener('click', () => {
    document.body.style.overflow = show ? 'hidden' : 'initial';
    menuContent.classList.toggle('on', show);
    show = !show;
});

let itensLancamento = document.querySelector(".itens-lançamento");
let id = 0;
for (const p of sapatos) {
    itensLancamento.innerHTML += `
    <div class="item">
        <img src="${p.img}" alt="${p.dsImg}">
        <div class="info">
            <h3>${p.nome}</h3>
            <h4>Sapato: R$${p.sapato}</h4>
            <button id="id${id}" class="pedir">Pedir agora</button>
        </div>
    </div>
    `;
    id++;
}

let telaCarrinho = document.querySelector('.tela-carrinho');
let continuar = document.querySelector('.continuar');

continuar.addEventListener('click', () => {
    telaCarrinho.classList.toggle('ocultar-tela-carrinho');
});

let compras = document.querySelector('.compras');
compras.addEventListener("click", () => {
    telaCarrinho.classList.toggle('ocultar-tela-carrinho');
});

let lsPedido = document.querySelectorAll('.pedir');

lsPedido.forEach(bt => {
    bt.addEventListener('click', () => {
        let id = parseInt(bt.id.replace('id', ''));
        bt.classList.toggle('selecionado');
        if (bt.innerHTML == 'REMOVER') {
            sapatos[id].quantidade = 0;
            bt.innerHTML = 'Pedir agora';
        } else {
            sapatos[id].quantidade = 1;
            bt.innerHTML = 'REMOVER';
        }
        atualizarTabela();
    });
});

let tbody = document.querySelector('tbody');

function atualizarTabela() {
    tbody.innerHTML = '';
    let total = 0;
    for (let i = 0; i < sapatos.length; i++) {
        if (sapatos[i].quantidade > 0) {
            tbody.innerHTML += `
                        <tr>
                        <td>${sapatos[i].nome}</td>
                        <td>${sapatos[i].quantidade}x R$${sapatos[i].sapato} = R$${sapatos[i].quantidade * sapatos[i].sapato}</td>
                        <td>
                            <button class="plus" data-id="${i}">+</button>
                            <button class="dash" data-id="${i}">-</button>
                        </td>
                    </tr>`;
            total += sapatos[i].quantidade * sapatos[i].sapato;
        }
    }
    document.querySelector('#total-pedido').innerHTML = `Valor total do pedido: R$${total}`;
    let plusButtons = document.querySelectorAll('.plus');
    let dashButtons = document.querySelectorAll('.dash');
    plusButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            let id = parseInt(btn.dataset.id);
            sapatos[id].quantidade++;
            atualizarTabela();
        });
    });
    dashButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            let id = parseInt(btn.dataset.id);
            sapatos[id].quantidade--;
            if (sapatos[id].quantidade < 1) {
                document.getElementById(`id${id}`).click();
            }
            atualizarTabela();
        });
    });
}

let enviar = document.querySelector('.enviar');
enviar.addEventListener("click", () => {
    let msg = 'Gostaria de fazer o seguinte pedido:\n';
    let total = 0;
    for (const p of sapatos) {
        if (p.quantidade > 0) {
            msg += `${p.nome} (${p.quantidade}x R$${p.sapato}) = R$${p.quantidade * p.sapato}\n`;
            total += p.quantidade * p.sapato;
        }
        let lsPedido = document.querySelectorAll('.pedir');

lsPedido.forEach(bt => {
    bt.addEventListener('click', () => {
        let id = parseInt(bt.id.replace('id', ''));
        bt.classList.toggle('selecionado');
        if (bt.innerHTML == 'REMOVER') {
            sapatos[id].quantidade = 0;
            bt.innerHTML = 'Pedir agora';
        } else {
            sapatos[id].quantidade = 1;
            bt.innerHTML = 'REMOVER';
        }
        atualizarTabela();
    });
});
    }
    msg += `Total: R$${total}`;
    msg = encodeURI(msg);
    let fone = '556192530371'; 
    let link = `https://api.whatsapp.com/send?phone=${fone}&text=${msg}`;
    window.open(link);
});

atualizarTabela();