/* ========================================== */
/* 1. LÓGICA DA TELA DE NOME E DESFOQUE       */
/* ========================================== */
const camadaBloqueio = document.getElementById('camada-bloqueio');
const conteudoSite = document.getElementById('conteudo-site');
const btnEntrar = document.getElementById('btn-entrar');
const inputNome = document.getElementById('input-nome');
const spanNome = document.getElementById('span-nome');

btnEntrar.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    if (nome !== "") {
        spanNome.textContent = nome;
        // Remove a camada de bloqueio e o efeito de desfoque
        camadaBloqueio.style.display = 'none';
        conteudoSite.classList.remove('desfocado');
        conteudoSite.style.pointerEvents = 'auto';
    } else {
        alert("Por favor, digite seu nome para continuar.");
    }
});

/* ========================================== */
/* 2. MODO ESCURO E FONTES                    */
/* ========================================== */
const btnDark = document.getElementById('btn-dark');
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');
let tamanhoFonte = 18; // Tamanho base em pixels

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btnDark.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

btnAumentar.addEventListener('click', () => {
    if (tamanhoFonte < 30) {
        tamanhoFonte += 2;
        document.querySelector('.container').style.fontSize = tamanhoFonte + 'px';
    }
});

btnDiminuir.addEventListener('click', () => {
    if (tamanhoFonte > 14) {
        tamanhoFonte -= 2;
        document.querySelector('.container').style.fontSize = tamanhoFonte + 'px';
    }
});

/* ========================================== */
/* 3. BOTÕES MOSTRAR/OCULTAR (TEXTO E QUIZ)   */
/* ========================================== */
const btnSaibaMais = document.getElementById('bntSaibamais');
const btnQuiz = document.getElementById('btnQuiz');
const divInfo = document.getElementById('informacoes');
const divQuiz = document.getElementById('secao-quiz');

btnSaibaMais.addEventListener('click', () => {
    const estaEscondido = divInfo.classList.contains('escondido');

    if (estaEscondido) {
        divInfo.classList.remove('escondido');
        divQuiz.classList.add('escondido');
        btnSaibaMais.textContent = "Mostrar menos";
        btnQuiz.textContent = "Responder Quiz"; // Reseta o outro botão
    } else {
        divInfo.classList.add('escondido');
        btnSaibaMais.textContent = "Saiba mais";
    }
});

btnQuiz.addEventListener('click', () => {
    const estaEscondido = divQuiz.classList.contains('escondido');

    if (estaEscondido) {
        divQuiz.classList.remove('escondido');
        divInfo.classList.add('escondido');
        btnQuiz.textContent = "Ocultar Quiz";
        btnSaibaMais.textContent = "Saiba mais"; // Reseta o outro botão
    } else {
        divQuiz.classList.add('escondido');
        btnQuiz.textContent = "Responder Quiz";
    }
});

/* ========================================== */
/* 4. VERIFICAÇÃO DO QUIZ                     */
/* ========================================== */
function verificar() {
    const resposta = document.querySelector('input[name="q1"]:checked');
    const resultado = document.getElementById("resultado-quiz");

    if (!resposta) {
        resultado.innerHTML = "⚠️ Escolha uma alternativa.";
        return;
    }

    if (resposta.value === "c") {
        resultado.innerHTML = "✅ Correto! Você entende de sustentabilidade.";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "❌ Incorreto. A produção sustentável foca no futuro (Letra C).";
        resultado.style.color = "red";
    }
}