/*
Elaborar um programa que efetue a leitura de 10 valores numéricos
 e apresente no final o total do somatório e a média dos valores lidos.
*/

alert("Bem-vindo!"); 
let i = 0; 

let somatorio = 0;
   while(i < 10){
let valor = parseInt(prompt("Informe um valor:"));
somatorio = somatorio + valor
i++;
}
media = somatorio/10
document.body.innerHTML+= `<p>somatorio é:${somatorio}, media é:${media}</p>` 

