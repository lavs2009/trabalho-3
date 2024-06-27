/*Elaborar um programa que apresente o resultado inteiro da divisão de dois
números quaisquer. Para a elaboração do programa, não utilizou em hipótese
alguma o conceito do operador aritmético ” / ”. A solução deve ser alcançada
com a utilização de looping. Ou seja, o programa deve apresentar como
resultado (quociente) quantas vezes o divisor cabe no dividendo.
*/

alert("Bem-vindo!"); 
    
    let dividendo = parseInt(prompt("Informe um valor:"));
    let divisor = parseInt(prompt("Informe um valor:"));
 document.body.innerHTML += `${dividendo}/${divisor}=`
    if (divisor === 0) {
        document.body.innerHTML +=  "Erro: divisão por zero.";
    }

    let quociente = 0;

    // Utilizando do-while
    do {
        dividendo -= divisor; // Subtrai o divisor do dividendo
        quociente++; // Incrementa o quociente
		
    } while (dividendo >= divisor);

    document.body.innerHTML += `${quociente}`;
