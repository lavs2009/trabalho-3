/*Elaborar um programa que efetue a leitura sucessiva de valores numéricos 
e apresente no final o total do somatório, a média e o total de valores lidos.
O programa deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores positivos. 
Ou seja, o programa deve parar quando o usuário fornecer um valor negativo (menor que zero).
*/
alert("Bem-vindo!"); 
let total = 0;
let soma = 0;
let media = 0;
let n = 0;
while(n >= 0){
n = prompt(("Informe um  valor:"));
   if(n >= 0){
    soma = soma + n
    total = total + 1
   }
}
if(total > 0){
  media = soma / total
}
document.body.innerHTML+= `<p>media é:${media},total é:${total},soma é:${soma}</p>`

