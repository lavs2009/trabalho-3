/*Elaborar um programa que apresente os resultados da soma e da média
aritmética dos valores pares situados na faixa numérica de 50 a 70.
*/
alert("Bem-vindo!"); 
let total = 0;
let soma = 0;

let i = 50;
while(i <= 70){
  
 if( i%2 == 0){
  soma= soma + i;
document.body.innerHTML+=`<p>soma é:${soma}</p>`
  total = total + 1
 }
 i++
}

let media = soma / total
document.body.innerHTML+=`<p>soma é:${soma} media é:${media}</p>`
