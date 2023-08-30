let usuario = "Ana";
let tarefas = ["Estudar para o exame"];
tarefas.push("Fazer Compras");
console.log(tarefas);

let usuario2 = "João";

let statusDaTarefa = prompt();
if(statusDaTarefa == "concluida"){
    console.log(tarefas.splice([1])) // esta tirando o segundo dado da lista
}

let usuario3 = "Carlos";
tarefas[0] = "Fazer compras"
console.log(tarefas);