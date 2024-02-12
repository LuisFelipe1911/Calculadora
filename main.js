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





let attempts = 10;

let result = 0;
let result2 = 0;
let answer = 0;
let contador = 3;


while (attempts > 0) {
    qtd = prompt("digite a quantidade que deseja somar ou subtrair!");
    


    let contador2 = qtd;

    
    
    operador = undefined;

    if (contador2 == "none" || contador2 == "nenhum" || contador2 > 0) {
        operador = prompt("digite qual operador deseja usar, digite como simbolos...");

        
    }
    else if (contador2 != "none" || contador2 != "nenhum") {
        alert("desculpe, não entendi sua resposta, tente novamente. dica: se não deseja utilizar contas de adição e subtração, e perguntar a quantidade de somar ou subtrair,  apenas digite none ou nenhum");
        attempts = attempts - 1;    
    }
    

    else if(attempts == 0 || attempts < 0) {
        attempts = 10;
    }
    
    while(contador > 0 || contador2 == "none" || contador2 == "nenhum" || contador2 > 0) {
        if (contador2 == "none" || contador2 > 0) {
            if (operador == "*") {
                if (contador == 3) {
                    let numeromult2 = parseFloat(prompt("digite o  primeiro numero.."));
                      
                    result2 = numeromult2;

                    contador = contador - 1;
                    
                }
                      
                      
                if (contador == 2) { 
                    let numeromult1 = parseFloat(prompt("digite o segundo numero.."));   
                    result = numeromult1;

                    contador = contador - 1;
                      
                }

                if (contador == 1) {
                    answer = result2 * result;

                  
                  
                    alert("seu resultado é " + answer + ".");

                    contador = contador - 1;
                }
            
                      
            
                      
           
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
            }
            
            
            
            
            if(operador == "/") {
                
                
                if (contador == 3) {
                    let numerodivi2 = parseFloat(prompt("digite o primeiro numero..."));
                    
                    result2 = numerodivi2;

                    contador = contador - 1;
                    
                    
                }
                
                
                
                if (contador == 2) {
                    let numerodivi1 = parseFloat(prompt("digite o segundo numero..."));
                    
                    result = numerodivi1;

                    contador = contador - 1;
                    
                    
                    
                
                }

                if (contador == 1) {
                    answer = result2 / result;
                
                    alert("seu resultado é " + answer + ".");
                    
                    contador = contador - 1;
                }
                
                
                
                
                
                
            }


            if (operador == "+") {


                if(contador2 > 0) {
                    let numerosoma = parseFloat(prompt("digite o numero"));

                    result = result += numerosoma;

                    alert("seu resultado é " + result + ".");

                    contador2 = contador2 - 1;



                }










            }



            if (operador == "-") {
                if (contador2 > 0) {
                    
                    let numeromenos = parseFloat(prompt("digite o numero"));
                    

                    
                }
            }
    
    
        }
        
    
        
    }
}






// while(attempts > 0) {
    
// }




answer = 0;
result = 0;
result2 = 0;
