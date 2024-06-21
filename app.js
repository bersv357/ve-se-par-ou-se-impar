
let numeroPar;
let numeroImpar;
let numeroEscolhido;
let valorMax;
let botaoNPar;
let botaoNImPar;


function gerarNumero(max){
    return parseInt(Math.random() * max + 1);
}

function verificarNumero() {
   if (numeroEscolhido % 2 == 0) {
    numeroPar = true;
    if (numeroPar == true) {
        botaoNPar = true;
        
    }
       }
   else if (numeroEscolhido % 2 != 0) {
    numeroImpar = true;
    if (numeroImpar == true) {
        botaoNImPar = true;
    
    } 
  }
}

function botaoPar() {
    document.querySelector("button");
    verificarNumero();
    if (botaoNPar == true) {
           alert(`Você acertou! O número escolhido ${numeroEscolhido} é par!`);
       }
       else {
           alert(`Você Errou! O número escolhido ${numeroEscolhido} é par!`);
       }
    }

function botaoImpar() {
    document.querySelector("button");
    verificarNumero();
    if (botaoNImPar == true) {
           alert(`Você acertou! O número escolhido ${numeroEscolhido} é impar!`);
    }
       else {
           alert(`Você Errou! O número escolhido ${numeroEscolhido} é impar!`);
    }
}

function começar() {
    document.querySelector("button");
    numeroPar, numeroImpar = false;
    valorMax = parseInt(prompt("Insira o valor máximo"));
    numeroEscolhido = gerarNumero(valorMax);
    alert("o número escolhido é " + numeroEscolhido);
}

    