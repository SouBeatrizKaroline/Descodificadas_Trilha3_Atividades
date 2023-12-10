function validarNome(nome) {

    return nome.trim().split(" ").length > 1;
}

function obterSobrenome(nome) {

    const partesNome = nome.trim().split(" ");
    return partesNome[partesNome.length - 1].toLowerCase();
}

function contarVogais(nome) {

    const vogais = nome.toLowerCase().match(/[aeiouáéíóúãõâêîôûàèìòùäëïöü]/g);
    return (vogais ? vogais.length : 0).toString().padStart(2, '0');
}

function exibirSenhaInicial() {
    const nomeCompleto = document.getElementById("nomeInput").value;

    if (validarNome(nomeCompleto)) {
        const sobrenome = obterSobrenome(nomeCompleto);
        const numeroVogais = contarVogais(nomeCompleto);

        const senhaInicial = sobrenome + numeroVogais;
        document.getElementById("mensagem").innerHTML = `<p>A senha inicial do aluno é: ${senhaInicial}</p>`;
    } else {
        document.getElementById("mensagem").innerHTML = "<p>Nome incompleto. Por favor, forneça o nome completo do aluno.</p>";
    }
}
