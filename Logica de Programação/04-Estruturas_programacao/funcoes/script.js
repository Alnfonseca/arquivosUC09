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
 function potenciação(a,b){
     var potencia = a**b;
     return potencia;
 }
 var resultadoDaPotencia = potenciação(5,2);
 console.log(resultadoDaPotencia);