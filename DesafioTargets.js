/*1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?*/


let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);





/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */



function verificaFibonacci(numero) {
  let a = 0;
  let b = 1;
  let proximo;

  while (a <= numero) {
    if (a === numero) {
      console.log(`${numero} pertence à sequência de Fibonacci.`);
      return;
    }

    proximo = a + b;
    a = b;
    b = proximo;
  }

  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}



/*5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;*/





function inverterString(str) {
  let resultado = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  
  return resultado;
}

// Exemplo: Invertendo a string "Hello, World!"
let stringOriginal = "Hello, World!";
let stringInvertida = inverterString(stringOriginal);

console.log(`String Original: ${stringOriginal}`);
console.log(`String Invertida: ${stringInvertida}`);


