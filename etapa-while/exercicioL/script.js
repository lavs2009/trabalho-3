/*
Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros 
e no final apresente o total do somatório da fatorial de cada valor lido.
*/

alert("Bem-vindo!"); 
let i = 0; 
let somatorio = 0;
while(i < 15){
let valor = parseInt(prompt("Informe um valor:"));
   let fatorial = 1;
   while(valor > 0){
      fatorial= fatorial * valor
      valor--;
   }
somatorio = somatorio + fatorial
document.body.innerHTML+= `<p>${somatorio}</p>` 
i++;
}
