let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate:1.1});
}

function exibirMsgInicial() {
    exibirTextoNaTela('h1', 'Jogo Número Secreto');
    exibirTextoNaTela('p', 'Escolha número entre 1 e 10');
}

exibirMsgInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Você acertou!!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute
        ('disabled');

    } else { 
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O número secreto é menor!');
        }  else {
            exibirTextoNaTela ('p', 'O número secreto é maior!');
        }
        tentativas ++;
        limparCampo();
           }
}

function gerarNumeroAleatorio() {
    let = numeroEscolhido = parseInt(Math.random() *numeroMaximo + 1);
    let = quantElementosNaLista = listaDeNumerosSorteados.lenght;

    if (quantElementosNaLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
chute = document.querySelector('input');
chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
   
}
