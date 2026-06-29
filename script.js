// Seleção dos elementos do HTML
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

let tamanhoFonte = 100;

// 1. LÓGICA DO NOME E DESFOQUE
document.getElementById("btn-entrar").addEventListener("click", function() {
    const nomeDigitado = inputNome.value.trim();
    
    if (nomeDigitado !== "") {
        spanNome.textContent = nomeDigitado;
        telaNome.style.display = "none";
        mainConteudo.classList.remove("desfocado");
    } else {
        alert("Por favor, digite o seu nome para continuar.");
    }
});

// 2. LÓGICA DE MOSTRAR/OCULTAR (BOTÕES)
btnSaibaMais.addEventListener("click", function() {
    const estaEscondido = divInformacoes.classList.contains("escondido");
    
    if (estaEscondido) {
        divInformacoes.classList.remove("escondido");
        divQuizz.classList.add("escondido");
        btnSaibaMais.textContent = "Mostrar menos";
        btnQuiz.textContent = "Responder Quiz";
    } else {
        divInformacoes.classList.add("escondido");
        btnSaibaMais.textContent = "Saiba mais";
    }
});

btnQuiz.addEventListener("click", function() {
    const estaEscondido = divQuizz.classList.contains("escondido");
    
    if (estaEscondido) {
        divQuizz.classList.remove("escondido");
        divInformacoes.classList.add("escondido");
        btnQuiz.textContent = "Ocultar Quiz";
        btnSaibaMais.textContent = "Saiba mais"; 
    } else {
        divQuizz.classList.add("escondido");
        btnQuiz.textContent = "Responder Quiz";
    }
});

// 3. LÓGICA DO MODO ESCURO E FONTES
btnModoEscuro.addEventListener("click", function() {
    document.body.classList.toggle("modo-escuro");
    if (document.body.classList.contains("modo-escuro")) {
        btnModoEscuro.textContent = "☀️";
    } else {
        btnModoEscuro.textContent = "🌙";
    }
});

btnAumentar.addEventListener("click", function() {
    if (tamanhoFonte < 150) { 
        tamanhoFonte += 10;
        mainConteudo.style.fontSize = tamanhoFonte + "%";
    }
});

btnDiminuir.addEventListener("click", function() {
    if (tamanhoFonte > 80) { 
        tamanhoFonte -= 10;
        mainConteudo.style.fontSize = tamanhoFonte + "%";
    }
});

// 4. FUNÇÃO ORIGINAL DO QUIZ
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