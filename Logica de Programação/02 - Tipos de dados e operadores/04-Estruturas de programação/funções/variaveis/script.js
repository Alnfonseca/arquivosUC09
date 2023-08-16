/*function imprimirNoConsole(){
    console.log("Olá");
}               //para ele ir para o console, ele precisa ser chamado
imprimirNoConsole();
*/

/*
ex 1
function imprimirUmNumero(num){ < isso é o parametro dessa função
console.log(`o numero é ${num}`)
}
imprimirUmNumero(2);
imprimirUmNumero(3);
imprimirUmNumero(200);
*/

/*
ex 2
function nomeDeUsuario(){
    nomeDeUsuario = prompt("nome do usuario")
    console.log(`o nome é ${nomeDeUsuario}`)
}
nomeDeUsuario();*/
// o parametro é oq tem dentro da função

// ex3
/*
escreva uma função que imprima no console o dobro de um numero (direto no programa)
function imprimirDobro(num){
    console.log(num * 2)
}
imprimirDobro(2);*/

/* esqueva uma funçãoque imprima a potencia de um numero a ele msm( direto no programa)
/*
function imprimirPotencia(num){
    var potencia = Math.pow(num, num)// math.pow é para fazer a potencia de um numero
    console.log(`o numero ${num} elevado a ele mesmo é ${potencia}`)
}
imprimirPotencia(2);*/

/*function imprimirPotencia2(base, expoente){
    var potencia2 = (Math.pow(base, expoente) *2)
    console.log(`o numero ${base} elevado a ${expoente} é ${potencia2}`)
}
imprimirPotencia2(2, 3);*/

/*function numeroAleatorio(){
    console.log(Math.random())
}
numeroAleatorio()*/

/*function repetirNumeros(num){
    for(let i = 0; i<10;i++){
        console.log( typeof num)
    }
}
var numero = prompt("digite um numero")
repetirNumeros( typeof numero)*/

// escreva um numero que multiplique tres numeros
function multiplicarNumeros(num){
    for(i = 0; i <num; i++){
        console.log(i * 3)
    }
}
multiplicarNumeros(5)