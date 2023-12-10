function armazenarNome() {
    const nome = document.getElementById("nomeInput").value;

    if (nome.trim() !== "") {

        localStorage.setItem("nomeUsuario", nome);
        exibirNomeArmazenado();
    } else {
        alert("Por favor, insira seu nome antes de armazenar.");
    }
}

function exibirNomeArmazenado() {
    const nomeArmazenado = localStorage.getItem("nomeUsuario");
    const nomeArmazenadoDiv = document.getElementById("nomeArmazenado");

    if (nomeArmazenado) {
        nomeArmazenadoDiv.innerHTML = `<p>Nome Armazenado: ${nomeArmazenado}</p>`;
    } else {
        nomeArmazenadoDiv.innerHTML = "<p>Nenhum nome armazenado.</p>";
    }
}

window.onload = exibirNomeArmazenado;
