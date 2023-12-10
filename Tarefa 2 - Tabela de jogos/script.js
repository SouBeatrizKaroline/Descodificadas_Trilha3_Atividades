const clubes = [];

function validarPreenchimento() {
    const nomeClube = document.getElementById("clubeInput").value.trim();

    if (nomeClube !== "") {
        adicionarClube(nomeClube);
    } else {
        exibirMensagem("Digite o nome do clube.");
    }
}

function adicionarClube(nomeClube) {
    clubes.push(nomeClube);
    document.getElementById("clubeInput").value = "";
    exibirMensagem(`Clube "${nomeClube}" adicionado com sucesso.`);
}

function listarClubes() {
    if (clubes.length > 0) {
        exibirMensagem("Lista de Clubes: " + clubes.join(", "));
    } else {
        exibirMensagem("Nenhum clube adicionado ainda.");
    }
}

function montarTabelaJogos() {
    if (clubes.length % 2 !== 0) {
        exibirMensagem("Número ímpar de clubes. Não é possível montar a tabela de jogos.");
        return;
    }

    const tabelaJogos = document.getElementById("tabelaJogos");
    tabelaJogos.innerHTML = "";

    for (let i = 0; i < clubes.length / 2; i++) {
        const linha = tabelaJogos.insertRow();
        const jogo = `${clubes[i]} x ${clubes[clubes.length - 1 - i]}`;

        const celula = linha.insertCell();
        celula.appendChild(document.createTextNode(jogo));
    }
}

function exibirMensagem(mensagem) {
    document.getElementById("mensagem").textContent = mensagem;
}
