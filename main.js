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



alert("Seja Bem Vindo A Calculadora!");

let operation = prompt("Diga Qual Operador Deseja Usar, diga em simbolos: +-*/");
let n1 = 0;
let n2 = 0;
let result = 0;


if (operation == "+") {
    n1 = parseInt(prompt("Diga O Primeiro Numero:"));
    n2 = parseInt(prompt("Diga O Segundo Numero:"));
  
    result = n1 + n2;

    alert("Seu Resultado é: " + result + ".");

    

}
else if (operation == "-") {
    n1 = parseInt(prompt("Diga O Primeiro Numero:"));
    n2 = parseInt(prompt("Diga O Segundo Numero:"));
  
    result = n1 - n2;

    alert("Seu Resultado é: " + result + ".");

    
}
else if(operation == "*") {
    n1 = parseInt(prompt("Diga O Primeiro Numero:"));
    n2 = parseInt(prompt("Diga O Segundo Numero:"));
  
    result = n1 * n2;

    alert("Seu Resultado é: " + result + ".");

    
}

else if (operation == "/") {
    n1 = parseInt(prompt("Diga O Primeiro Numero:"));
    n2 = parseInt(prompt("Diga O Segundo Numero:"));
  
    result = n1 / n2;

    alert("Seu Resultado é: " + result + ".");

   
}
else {
  alert("Erro De Comando. Tente Novamente.");

}



