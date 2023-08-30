let usuario = "Ana";
let tarefas = ["Estudar para o exame"];
tarefas.push("Fazer Compas");
console.log(tarefas);

let usuario2 = "João";

let statusDaTarefa = prompt();
if(statusDaTarefa == "concluida"){
    console.log(tarefas.splice(1, 0)) // esta tirando o segundo dado da lista
}

let usuario3 = "Carlos";
