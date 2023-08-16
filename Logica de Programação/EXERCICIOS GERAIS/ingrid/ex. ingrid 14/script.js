let operação = prompt("escolha uma operação matematica");
let num = parseInt(prompt("ecolha um numero"));

/*while ve se ta certo pra depois executar
do while executa depois ve se esta certo*/

// case = caso
switch(operação){

case "adi":
    for (let n2 = 0; n2 < 10; n2++){
        console.log(`${num} + ${n2} = ${num + n2}`)
    }
    break;
case "sub":
    for (let n3 = 0; n3 < 10; n3++){
        console.log(`${num} - ${n3} = ${num - n3}`)
    }
    break;
case "mult":
    for (let n4 = 0; n4 < 10; n4++){
        console.log(`${num} X ${n4} = ${num * n4}`)
    }
    break;
case "div":
    for (var n5 = 0; n5 < 10; n5++){
       
        if (n5 == 0){
            var result = ("impossivel resolver");
        }else { result = num / n5
         }
         console.log(`${num} : ${n5} = ${result}`)
}
    break;
    
}

/*so podemos usar o "case" se tiver só uma condição

operador condicional  = if else ou switch case

for tem que curar a variavel dentro da operação 

while voce pode criar fora da condição

ARRAY

array = lista
posição!= quantidade


alteração de algum item na lista 
nome[2] = "julia"

adcionar um item no final da aray
nome.push("mariano")


*/