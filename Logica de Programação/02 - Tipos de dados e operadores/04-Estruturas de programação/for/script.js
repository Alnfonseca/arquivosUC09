/*for( i = 1; i <= 5; i++){
    console.log(i);
}*/

///////////////////////////////////////////////////////////////////////////////////////////////


            /*for (let n = prompt(); n >= 0; n--){
                console.log(n);
}*/
/////////////////////////////////////////////////////////////////////////////////////////////////


/*Desenvolva um programa que solicite ao usuário que digite um número e, em seguida,
 imprima no console a soma dos números ímpares entre 1 e esse número.

            for (let num = 1; num <= 10; num++){
                console.log(num);
            }*/

//imprimir os numeros pares de 0 a 20 no console

            /*for(let i = 0; i <=20; i++){
                if (i % 2 == 0){
                    console.log(i)
                }
            */

//imprima os numeros ímpares de 10 a 30 no console 

            /*for (let i = 10; i <= 30; i++){
                if (i % 2 !== 0){
                    console.log(i)
                }*/

 // imprimir os numeros no console de 0 a 100, decrementando de 5 em 5.

               /* for( let i = 100; i >= 0; i -= 5){
                    console.log(i)
                }*/

// imprima a tabuada de multiplicação do 7 do 1 ao 10 no console
  /*              let numero = 7;
                for(let i = 1; i <= 10; i++){
                console.log(`${i} X 7 = ${i *numero}`);
                }
*/
// peça para o usuario digitar um numero no prompt e, em seguida, 
//imprima os numeros pares de 0 a o numero solicitado no console

/*let num = parseInt(prompt());              

                for(let i = 0; i<= num; i+=2){
                    console.log(i)
                }*/

/*
solicite ao usuario que digite dois numeros e, 
em seguida, imprima dois numeros entre esses numeros inteiros no console 
em ordem descrescente*/ 

                /*let num1 = prompt("1 numero");
                let num2 = prompt("2 numero");
                

                for(let i = num1; i <= num2; i++){
                console.log(i);
                }*/


                /*let num1 = prompt("1 numero");
                let num2 = prompt("2 numero");

                if(num1 > num2){
                    for(let i = num2; i< num1; i++){
                        console.log(i);
            
                    }
                }else{
                    alert("o numero 2 é maior que o numero 1")
                    num1 = parseInt(prompt("digite novamente o segundo numero"))
                    }*/
                

/*Desenvolva um programa que solicite ao usuário que digite um número e, em seguida,
 imprima no console a soma dos números ímpares entre 1 e esse número.*/

/*
let num = prompt();
let somaImpares = 0;

for (let i = 1; i <= num; i+= 2){
somaImpares += i;
} console.log(`a soma dos numeros impares entre 1 e ${num} é ${somaImpares}`); 
*/

prompt("operaçao [1]+ [2]- [3]/ [4]*")
let operaçao = parseInt(prompt("Digite um numero"));


switch (operaçao) {
    case "+":
        break;
    console.log(`${operaçao}`)
    break;
    default:
        break;
}

