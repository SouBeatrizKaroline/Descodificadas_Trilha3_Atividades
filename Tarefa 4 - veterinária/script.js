function calcularDesconto() {
    const precoVacina = parseFloat(document.getElementById("precoVacina").value);
    const possuiConvenio = document.getElementById("possuiConvenio").value;
    let desconto = 0;

    if (possuiConvenio === "sim") {
        const convenioSelecionado = document.getElementById("opcoesConvenio").value;

        if (convenioSelecionado === "amigoAnimais") {
            desconto = 0.2;
        } else if (convenioSelecionado === "saudeAnimal") {
            desconto = 0.5; 
        }
    }

    const valorDesconto = precoVacina * desconto;
    const valorFinal = precoVacina - valorDesconto;

    const resultadoHTML = `
        <p>Valor do Desconto: R$ ${valorDesconto.toFixed(2)}</p>
        <p>Valor a ser Pago: R$ ${valorFinal.toFixed(2)}</p>
    `;

    document.getElementById("resultado").innerHTML = resultadoHTML;
}

function exibirCaixaConvenio() {
    const possuiConvenio = document.getElementById("possuiConvenio").value;
    const caixaConvenio = document.getElementById("caixaConvenio");

    if (possuiConvenio === "sim") {
        caixaConvenio.style.display = "block";
    } else {
        caixaConvenio.style.display = "none";
    }
}
