// --- LÓGICA DOS BOTÕES ---
const btnSaibaMais = document.getElementById("bntSaibamais");
const btnQuiz = document.getElementById("btnQuiz");
const divInformacoes = document.getElementById("informacoes");
const divQuiz = document.getElementById("secao-quiz");

// Quando clicar em "Saiba Mais"
btnSaibaMais.addEventListener("click", () => {
    // Tira a classe escondido da informação e coloca no quiz
    divInformacoes.classList.remove("escondido");
    divQuiz.classList.add("escondido");
});

// Quando clicar em "Responder Quiz"
btnQuiz.addEventListener("click", () => {
    // Tira a classe escondido do quiz e coloca na informação
    divQuiz.classList.remove("escondido");
    divInformacoes.classList.add("escondido");
});

// --- LÓGICA DO QUIZ (Seu código original) ---
function verificar() {
    const resposta = document.querySelector('input[name="q1"]:checked');
    const resultado = document.getElementById("resultado");

    if (!resposta) {
        resultado.innerHTML = "Escolha uma alternativa.";
        return;
    }

    if (resposta.value === "c") {
        resultado.innerHTML = "Correto! Você acertou.";
        resultado.style.color = "green"; // Deixa a frase verde se acertar
    } else {
        resultado.innerHTML = "Resposta incorreta. A alternativa correta é a letra C.";
        resultado.style.color = "red"; // Deixa a frase vermelha se errar
    }
}