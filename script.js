/* ======================================================= */
/* MAPEAMENTO E SELEÇÃO DE ELEMENTOS DO HTML               */
/* ======================================================= */
const btnSaibaMais = document.getElementById("bntSaibamais");
const btnQuiz = document.getElementById("btnQuiz");
const divInformacoes = document.getElementById("informacoes");
const divQuizz = document.getElementById("quizz");

const telaNome = document.getElementById("tela-nome");
const mainConteudo = document.getElementById("conteudo-principal");
const inputNome = document.getElementById("input-nome");
const spanNome = document.getElementById("nome-usuario");

const btnModoEscuro = document.getElementById("btn-modo-escuro");
const btnAumentar = document.getElementById("btn-aumentar");
const btnDiminuir = document.getElementById("btn-diminuir");

// Mantém o registro do tamanho padrão da fonte em porcentagem (100%)
let tamanhoFonte = 100;

/* ======================================================= */
/* 1. LÓGICA DE LOGIN (NOME DO USUÁRIO E RETIRADA DO BLUR) */
/* ======================================================= */
document.getElementById("btn-entrar").addEventListener("click", function() {
    const nomeDigitado = inputNome.value.trim();
    
    if (nomeDigitado !== "") {
        // Altera o texto "visitante" pelo nome digitado
        spanNome.textContent = nomeDigitado;
        // Apaga a caixa de bloqueio e remove o desfoque (blur) do site
        telaNome.style.display = "none";
        mainConteudo.classList.remove("desfocado");
    } else {
        alert("Por favor, digite o seu nome para continuar.");
    }
});

/* ======================================================= */
/* 2. LÓGICA DO BOTÃO SANFONA (MOSTRAR E RE-ESCONDER)      */
/* ======================================================= */

// Clique no botão "Saiba mais"
btnSaibaMais.addEventListener("click", function() {
    // Verifica se a div está invisível
    const estaEscondido = divInformacoes.classList.contains("escondido");
    
    if (estaEscondido) {
        // Se estava oculta: mostra ela, esconde o quiz e troca os textos internos
        divInformacoes.classList.remove("escondido");
        divQuizz.classList.add("escondido");
        btnSaibaMais.textContent = "Mostrar menos";
        btnQuiz.textContent = "Responder Quiz"; // Reseta o outro botão
    } else {
        // Se ela já estava visível: fecha o bloco e volta o texto normal
        divInformacoes.classList.add("escondido");
        btnSaibaMais.textContent = "Saiba mais";
    }
});

// Clique no botão "Responder Quiz"
btnQuiz.addEventListener("click", function() {
    const estaEscondido = divQuizz.classList.contains("escondido");
    
    if (estaEscondido) {
        // Se estava oculta: mostra o quiz, esconde o texto e altera as strings
        divQuizz.classList.remove("escondido");
        divInformacoes.classList.add("escondido");
        btnQuiz.textContent = "Ocultar Quiz";
        btnSaibaMais.textContent = "Saiba mais"; // Reseta o outro botão
    } else {
        // Se já estava visível: fecha o bloco do quiz e restaura o nome original
        divQuizz.classList.add("escondido");
        btnQuiz.textContent = "Responder Quiz";
    }
});

/* ======================================================= */
/* 3. LÓGICA DE ACESSIBILIDADE (MODO ESCURO E TONTES)      */
/* ======================================================= */

// Alternador de modo claro / escuro
btnModoEscuro.addEventListener("click", function() {
    // O toggle liga ou desliga a classe de maneira automática
    document.body.classList.toggle("modo-escuro");
    
    // Troca o emoji do botão de acordo com a situação visual
    if (document.body.classList.contains("modo-escuro")) {
        btnModoEscuro.textContent = "☀️";
    } else {
        btnModoEscuro.textContent = "🌙";
    }
});

// Aumenta a escala da fonte global do site em 10%
btnAumentar.addEventListener("click", function() {
    if (tamanhoFonte < 150) { // Trava de segurança para não quebrar o design
        tamanhoFonte += 10;
        mainConteudo.style.fontSize = tamanhoFonte + "%";
    }
});

// Reduz a escala da fonte global do site em 10%
btnDiminuir.addEventListener("click", function() {
    if (tamanhoFonte > 80) { // Trava de segurança para não sumir com o texto
        tamanhoFonte -= 10;
        mainConteudo.style.fontSize = tamanhoFonte + "%";
    }
});

/* ======================================================= */
/* 4. VERIFICAÇÃO DO QUIZ (SEU CÓDIGO ORIGINAL INTEGRAIS)  */
/* ======================================================= */
function verificar() {
    const resposta = document.querySelector('input[name="q1"]:checked');
    const resultado = document.getElementById("resultado");

    if (!resposta) {
        resultado.innerHTML = "Escolha uma alternativa.";
        return;
    }

    if (resposta.value === "c") {
        resultado.innerHTML = "Correto!";
    } else {
        resultado.innerHTML = "Resposta incorreta. A alternativa correta é a letra C.";
    }
}