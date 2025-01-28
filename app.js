//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    if (nome) {
        amigos.push(nome);
        atualizarLista();
        input.value = '';
    }
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione amigos antes de sortear.');
    } else {
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceSorteado];
        mostrarResultado(amigoSorteado);
    }
}

function mostrarResultado(amigo) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa resultados anteriores
    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigo}`;
    resultado.appendChild(li);
}
