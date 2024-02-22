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



