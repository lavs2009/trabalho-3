alert("Bem-vindo!"); 
let num = parseInt(prompt(`informe o valor`));
let tabuada= "";
for(let i =0; i<=20; i++){
   tabuada+= `${num} x ${i} = ${num*i} \n`;
}
   alert(tabuada);
