
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


let qtd = prompt("digite a quantidade que deseja somar ou subtrair...");
let operador = prompt("digite qual operador deseja usar, digite como simbolos...");
let contador = 2;
let contador2 = qtd;
let result = 0;
let result2 = 0;

let answer = 0;


while(contador > 0 || contador2 > 0) {
    if (contador2 == "none" || contador == "nenhum") {
        if (operador == "*") {
            if (contador == 2) {
                let numeromult2 = parseFloat(prompt("digite o  primeiro numero.."));
                  
                result2 = numeromult2;
                
            }
                  
                  
            if (contador == 1) { 
                let numeromult1 = parseFloat(prompt("digite o segundo numero.."));   
                result = numeromult1;
                  
            }
        
                  
        
                  
       
              
              
              
              
              
              
              
              
              
              
              answer = result2 * result;
              
              console.log("seu resultado é " + answer + ".");
              
              
              
              contador = contador - 1;
        }
        
        
        
        
        if(operador == "/") {
            
            
            if (contador == 2) {
                let numerodivi2 = parseFloat(prompt("digite o primeiro numero..."));
                
                result2 = numerodivi2;
                
                contador = contador - 1;
            }
            
            
            
            if (contador == 1) {
                let numerodivi1 = parseFloat(prompt("digite o segundo numero..."));
                
                result = numerodivi1;
                
                contador = contador - 1;
                
            
            }
            
            
            
            answer = result2 / result;
            
            console.log(answer);
            
            
        }


    }  

    
}

answer = 0;
result = 0;
result2 = 0;
