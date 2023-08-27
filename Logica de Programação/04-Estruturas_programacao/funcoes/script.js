/*
function imprimirNoConsole(){
    console.log("Ola jovem!")
}

imprimirNoConsole();
*/
/*
function imprimirNoConsole(num){
console.log(`O numero é: ${num}`)
}

imprimirNoConsole(5);
*/

//Escreva uma funcao que imprima no consle o nome do usuario a partir do que fpi digitado no prompt. ao final dve imprimr [o nome do usuario]
/*
let nome = prompt("digite seu nome:")
function imprimirNoConsole (nome){
    console.log (`seu nome é: ${nome}`)
}

imprimirNoConsole(nome);
*/
/*
function ImprimirDobro(num){
    console.log(num*2)
}
ImprimirDobro(4);
*/
/*function imprimaPotencia(num){
let potencia = math.pow(num, num)
console.log(`O numero ${num}`)
}

*/

// function verificaTipoDeDado(dado) {
//     if (typeof dado === 'string'){
//         console.log("este dado é uma string")
//     }else if (typeof dado === 'number'){
//         console.log("Esse tipo de dado é number")
//     }else if (typeof dado === 'boolean'){
//         console.log("esse é um dado boolean")
//     }
// }
// verificaTipoDeDado(true);
// verificaTipoDeDado(23);
// verificaTipoDeDado('teste');
/////////////////////////////////////////////////////////////////////////////////////////////////
// function soma(a, b){
//     var resultado = a + b;
//     return resultado;
// }
// var resultadoDaSoma = soma(3, 5);
// console.log(resultadoDaSoma);
///////////////////////////////////////////////////////////////////////////////////////////////////
//criar uma função que receba 2 numeros no prompt e retorne a multiplicação desses numeros


//  let num1 = prompt();
//  let num2 = prompt();

//  function multiplicação(num1,num2){
//      var total = num1 * num2;
//   return total;    
// }
//  let resultadoDaSoma = multiplicação(num2,num1)
//  console.log(resultadoDaSoma);
//////////////////////////////////////////////////////////////////////////
// escrever uma função que receba dois numeros e apresente a potenciação desses numeros sendo que o primeiro a base e o segundo o expoente respectivamente
//  function potenciação(a,b){
//      var potencia = a**b;
//      return potencia;
//  }
//  var resultadoDaPotencia = potenciação(5,2);
//  console.log(resultadoDaPotencia);
/////////////////////////////////////////////////////////////////////////////////
// 1.       Verificação de número par ou ímpar: Escreva uma função chamada verificarParOuImpar que recebe um número inteiro como entrada. A função deve solicitar ao usuário que digite um número inteiro usando o prompt. Em seguida, a função deve verificar se o número é par ou ímpar e retornar a mensagem "O número é par" ou "O número é ímpar". Exiba o resultado no console. 
//  function verificarParOuImpar(num){
//     if ( num %2 == 0){
//         console.log(`O numero ${num} numero é par`)
//     }else{
//         console.log(` O numero ${num} é impar`)
//     }
//  }verificarParOuImpar(prompt("digite um numero"));

 

// 2.       Cálculo do fatorial: Escreva uma função chamada calcularFatorial que recebe um número inteiro positivo como entrada. A função deve solicitar ao usuário que digite um número inteiro positivo usando o prompt. Em seguida, a função deve calcular o fatorial desse número e retornar o resultado. O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. Utilize um loop para calcular o fatorial. Exiba o resultado no console. 

 

// 3.       Contagem de vogais: Escreva uma função chamada contarVogais que recebe uma palavra como entrada. A função deve solicitar ao usuário que digite uma palavra usando o prompt. Em seguida, a função deve contar o número de vogais na palavra (considerando apenas as vogais: "a", "e", "i", "o", "u") e retornar o resultado. Utilize um loop para percorrer cada letra da palavra. Exiba o resultado no console. 

//  function contarVogais(palavra){
//     let total = 0
//     for(let i = 1; i < palavra.length; i++){
//         switch (palavra[i]){
//             case "a":
//             total ++
//             break;
//             case "e":
//             total ++
//             break;
//             case "i":    // Esse codigo mostra quantas vogais tem sem repetir elas, ou seja, "a palavra abelha tem 2 vogais, A, E."
//             total ++
//             break;
//             case "o":
//             total ++
//             break;
//             case "u":
//             total ++
//             break;
//         }
//     }console.log(`A palavra ${palavra} contem ${total} vogais`)
//  }contarVogais(prompt("escreva uma palavra"))

// 4.       Geração de números aleatórios: Escreva uma função chamada gerarNumeroAleatorio que não recebe nenhuma entrada. A função deve gerar um número aleatório inteiro entre 1 e 100 e retornar o número gerado. Utilize a função Math.random para gerar o número aleatório e o método Math.floor para arredondar o número para baixo. Exiba o resultado no console. 
// function gerarNumeroAleatorio(){
//     let numA = Math.random();
//     let numI = Math.floor(numA * 100);
// console.log(numI)
// }gerarNumeroAleatorio()
 

// 5.       Verificação de ano bissexto: Escreva uma função chamada verificarAnoBissexto que recebe um ano como entrada. A função deve solicitar ao usuário que digite um ano usando o prompt. Em seguida, a função deve verificar se o ano é bissexto e retornar true se for bissexto ou false caso contrário. Um ano é bissexto se for divisível por 4, mas não por 100, exceto se também for divisível por 400. Utilize o operador de módulo (%) para verificar a divisibilidade. Exiba o resultado no console. 

//  function verificarAnoBissexto(ano){
//  if(ano %2 ==0){
//     console.log(`O ano ${ano} é bissexto`)
//  }else{
//     console.log(`O ano ${ano} nao é bissexto`) //o ano 2010 esta dando bissexto, mas nao é
//  }
//  }verificarAnoBissexto(prompt("Digite um ano"))

// 6.       Validação de CPF: Escreva uma função chamada validarCPF que recebe um CPF como entrada. A função deve solicitar ao usuário que digite um CPF usando o prompt. Em seguida, a função deve validar se o CPF é válido e retornar true se for válido ou false caso contrário. Considere o formato XXX.XXX.XXX-XX. Exiba o resultado no console. 

 

// 7.       Conversão de temperatura: Escreva uma função chamada converterTemperatura que recebe uma temperatura em Celsius como entrada. A função deve solicitar ao usuário que digite uma temperatura em Celsius usando o prompt. Em seguida, a função deve converter a temperatura para Fahrenheit e retornar o resultado. Utilize a fórmula: Fahrenheit = Celsius * 9/5 + 32. Exiba o resultado no console. 
// function converterTemperatura(Celsius){

//     let Fahrenheit = Celsius * 9/5 + 32;
// console.log(`A conversao de ${Celsius} em fahrenheit é ${Fahrenheit}°`)
// }converterTemperatura(prompt("digite os graus em celsius"))
 

// 8.       Cálculo de média: Escreva uma função chamada calcularMedia que recebe a quantidade de números a serem inseridos como entrada. A função deve solicitar ao usuário que digite a quantidade desejada de números usando o prompt. Em seguida, a função deve solicitar ao usuário que insira cada número individualmente e calcular a média desses números. Retorne a média calculada. Exiba o resultado no console. 

 function calcularMedia(a, b, c){

 }

// 9.       Verificação de palíndromo: Escreva uma função chamada verificarPalindromo que recebe uma palavra como entrada. A função deve solicitar ao usuário que digite uma palavra usando o prompt. Em seguida, a função deve verificar se a palavra é um palíndromo, ou seja, se ela é a mesma quando lida de trás para frente. Retorne true se for um palíndromo e false caso contrário. Exiba o resultado noconsole. 

 

// 10.   Tabuada: Escreva uma função chamada gerarTabuada que recebe um número inteiro como entrada. A função deve solicitar ao usuário que digite um número inteiro usando o prompt. Em seguida, a função deve gerar a tabuada desse número, ou seja, exibir a multiplicação desse número com os números de 1 a 10. Retorne a tabuada como uma string formatada. Exiba o resultado no console. 