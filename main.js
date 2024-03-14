// MIT License

// Copyright (c) 2024 LuisFelipe1911

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.


// exibe um alerta de boas vindas
alert("Seja Bem Vindo A Calculadora!");

// armazena o simbolo da operação que o usuario deseja utilizar
let operation = prompt("Diga Qual Operador Deseja Usar, diga em simbolos: +-*/");

// armazena um local na memória chamado n1 e armazena dentro dela o valor 0
let n1 = 0;
// armazena um local na memória chamado n2 e armazena dentro dela o valor 0
let n2 = 0;
// armazena um local na memória chamado result e armazena dentro dela o valor 0
let result = 0;

// se operation for igual a +
if (operation == "+") {
    // n1  recebe método de receber dados digitados pelo usuario e converte para um numero Inteiro
    n1 = parseInt(prompt("Diga O Primeiro Numero:"));

    // n2  recebe método de receber dados digitados pelo usuario e converte para um numero Inteiro
    n2 = parseInt(prompt("Diga O Segundo Numero:"));


    // faz a soma do valor da váriavel n1 e soma com a n2
    result = n1 + n2;


    // exibe o resultado
    alert("Seu Resultado é: " + result + ".");

    

}

// e se operation for igual a -
else if (operation == "-") {

    // n1  recebe método de receber dados digitados pelo usuario e converte para um numero Inteiro
    n1 = parseInt(prompt("Diga O Primeiro Numero:"));

    // n2  recebe método de receber dados digitados pelo usuario e converte para um numero Inteiro
    n2 = parseInt(prompt("Diga O Segundo Numero:"));

    // subtrai o valor de n1 e n2 e armazena na variavel result
    result = n1 - n2;

    
    alert("Seu Resultado é: " + result + ".");

    
}

// e se operation for igual *
else if(operation == "*") {

    // n1 recebe método de receber dados do usuario e converte para um numero Inteiro
    n1 = parseInt(prompt("Diga O Primeiro Numero:"));

    // n2 recebe método de receber dados do usuario e converte para um numero Inteiro
    n2 = parseInt(prompt("Diga O Segundo Numero:"));

    // multiplica n1 e n2 e armazena o resultado na variavel result
    result = n1 * n2;


    
    alert("Seu Resultado é: " + result + ".");

    
}


// e se operation for igual a /
else if (operation == "/") {
    // n1 recebe método de receber dados do usuario e converte para um numero Inteiro
    n1 = parseInt(prompt("Diga O Primeiro Numero:"));

    // n2 recebe método de receber dados do usuario e converte para um numero Inteiro
    n2 = parseInt(prompt("Diga O Segundo Numero:"));

    // divide o n1 com n2 e armazena o valor
    result = n1 / n2;

    alert("Seu Resultado é: " + result + ".");

   
}


// ele cairá nesse else se os dados recebidos não forem igual aos anteriores
else {
  alert("Erro De Comando. Tente Novamente.");

}



