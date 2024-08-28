const caixaPrincipal = document.querySelector ('.caixa-principal');
const caixaPerguntas = document.querySelector ('.caixa-perguntas');
const caixaAlternativas = document.querySelector ('.caixa-alternativas');
const caixaResultado = document.querySelector ('.caixa-resultado');
const textoResultado = document.querySelector ('.texto-resultado');

const alternativas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativa: [
            {
                texto: "Ter o poder de curar as pessoas, mas... a doença vai para você",
                afirmaçao: "Parabens, agora você tem uma doença incurável",
            },
            {
                texto: "Salvar pessoas desconhecidas da morte, mas... sua familia morre",
                afirmaçao: "Sua familia morreu",
            },
        ]
        
    },

    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "Salvar o ecossistema, mas... você viverá sozinho para todo o sempre",
                afirmaçao: "Agora você está soozinho",
            },
            {
                texto: "Ter a solução para todos os problemas maritimos, mas... você jamais vai usufruir dela (agua)",
                afirmaçao: "Ta sem agua bobinho",
            },
        ]
        
    },

    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "Viver em um mundo onde as máquinas dominaram tudo, mas... você não vai ter outra fonte de renda, ja que as vagas de emprego foram ocupadas pelas mesmas",
                afirmaçao: "Robos invadiram o mundo e se tornaram nós",
            },
            {
                texto: "Viver com uma máquina que faz tudo por você, mas... não terá contato com outro ser humano",
                afirmaçao: "Esta sozinho no mundo",
            },
        ]
        
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas (){
    if(atual>= alternativas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const opcao of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opcao.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(opcao));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcao){
    const afirmacoes = opcao.afirmaçao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPerguntas();
}

function mostraResultado (){
    caixaPerguntas.textContent = "Em resumo você escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPerguntas();