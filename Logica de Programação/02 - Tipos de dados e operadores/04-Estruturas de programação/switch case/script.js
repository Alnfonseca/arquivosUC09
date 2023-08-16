/*let diaDaSemana = parseInt(prompt("Digite um numero que corresponda a um dia da semana"))
                        
                            //switch é uma estrutura de escolha

switch(diaDaSemana){
    case 1: 
    console.log("Segunda-Feira");
    break;
    case 2: 
    console.log("Terça-Feira");
    break;
    case 3: 
    console.log("Quarta-Feira");
    break;
    case 4: 
    console.log("Quinta-Feira");
    break;
    case 5: 
    console.log("Sexta-Feira");
    break;
    default:
        console.log("Fim de Semana");

}*/
////////////// 2º exercicio ///////////////
/*let nomeDaFruta = "limao";

switch(nomeDaFruta){
    case "limão":
    case "uva":
    case "laranja":
        console.log(" essa fruta é cítrica")
    break;
    case "abacate":
    case "manga":
        console.log("essa fruta é tropical")
        break;
    default :
    console.log("não reconheço esse tipo de fruta");
}*/
/////////////////// 3º exercicio///////////////////////////////
/*
let primeiroNum = parseInt(prompt("Escolha o primeiro numero"));
let segundoNum = parseInt(prompt("Escolha o segundo numero"));
let operação = prompt("Escolha uma das operações matematicas");

switch(operação){
    case "adi":
        console.log(`${primeiroNum} + ${segundoNum} = ${primeiroNum + segundoNum}`);
        break;


    case "sub":
        console.log(`${primeiroNum} - ${segundoNum} = ${primeiroNum - segundoNum}`);
        break;


    case "mult":
        console.log(`${primeiroNum} X ${segundoNum} = ${primeiroNum * segundoNum}`);
        break;


    case "div":
        console.log(`${primeiroNum} : ${segundoNum} = ${primeiroNum / segundoNum}`);
        break;

        default:
            console.log("Operação invalida");
}*/

/*let primeiroNum = parseInt(prompt("Escolha o primeiro numero"));
let segundoNum = parseInt(prompt("Escolha o segundo numero"));
let operação = prompt("Escolha uma das operações matematicas");
let resultado;

switch(operação){
    case "+":
resultado = primeiroNum + segundoNum;
break;
    case "-":
resultado = primeiroNum - segundoNum;
break;
    case "*":
resultado = primeiroNum * segundoNum;
break;
    case "/":
resultado = primeiroNum / segundoNum;
break;
default:
    resultado = "operação invalida"
}
console.log(resultado)*/
////////////// 4º exercicio////////////////////
/**

 * Escreva um programa em JavaScript que solicite ao usuário que insira um número e 
verifique se ele é positivo, negativo ou zero. Se o número for maior que zero, o programa deve exibir
 "O número é positivo". Se o número for menor que zero, o programa deve exibir "O número é negativo".
  Se o número for igual a zero, o programa deve exibir "O número é zero". Se a entrada do usuário não for um número válido,
 o programa deve exibir "Entrada inválida".
Para implementar a verificação, utilize um switch statement. 
O programa deve seguir a seguinte estrutura:
Solicitar ao usuário que insira um número.
Verificar se o número é positivo, negativo ou zero utilizando um switch statement.
Exibir a mensagem correspondente ao tipo de número.
Se a entrada do usuário não for um número válido, exibir "Entrada inválida".

 */
/*let num = parseInt(prompt("Digite um numero"));

switch (true) {
    case( num < 0):
    console.log("o numero é negativo")
    break;
    case( num > 0):
    console.log("o numero é positivo")
    break;
    case( num == 0):
    console.log("o numero é zero")
    break;
    default:
    console.log("Entrada invalida")
    break;
}
 */
/////////////////////// 5º exercicio ///////////////////////////////////////////


/**

 Escreva um programa em JavaScript que solicite ao usuário que insira um número correspondente 
 ao dia da semana (1-7) e exiba o nome do dia da semana correspondente à entrada do usuário. 
  Se a entrada do usuário não for um número válido, o programa deve exibir "Entrada inválida".
Para implementar a verificação do nome do dia da semana, utilize um switch statement. 
O programa deve seguir a seguinte estrutura:
Solicitar ao usuário que insira um número correspondente ao dia da semana (1-7).
Verificar qual é o número inserido pelo usuário e exibir o nome do 
dia da semana correspondente utilizando um switch statement.
Se a entrada do usuário não for um número válido, exibir "Entrada inválida".
 */

let diaDaSemana = parseInt(prompt("digite um numero que correspoda ao dia da semana"));

switch(diaDaSemana){
    case 1: 
    console.log("Domingo");
    break;
    case 2: 
    console.log("Segunda-Feira");
    break;
    case 3: 
    console.log("Terça-Feira");
    break;
    case 4: 
    console.log("Quarta-Feira");
    break;
    case 5: 
    console.log("Quinta-Feira");
    break;
    case 6: 
    console.log("Sexta-Feira");
    break;
    case 7: 
    console.log("Sabado");
    break;
    default:
        console.log("Entrada invalida");
}