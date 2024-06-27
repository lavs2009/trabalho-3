/*
Elaborar um programa que apresente como resultado dos valores de uma
potência de uma base qualquer elevada a um expoente qualquer, 
ou seja, de B^E, em que B é o valor da base e E o valor do expoente começando do zero.
Deve ser considerado que :
● qualquer número elevado a zero é 1,
● qualquer número elevado a 1 é ele próprio.
Considere apenas a entrada de valores inteiros e positivos.
*/
alert("Bem-vindo!"); 
let base;
let expoente;

do{
base=parseInt(prompt("Informe um valor da base ou digite -1 para sair"));
if(base<0){
   break;
}else{
expoente=parseInt(prompt("Informe um valor da expoente:"));
document.body.innerHTML+=`<p>${base}<sup>${expoente}</sup> = ${base**expoente}</p>`
}

}while(base>0);

