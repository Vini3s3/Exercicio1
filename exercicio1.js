//const arr = [1, 2, 3, 4, 5];
//arr.map(function(item){
//    return item + 10
//}

const arr = {
    arr:[1, 2, 3, 4, 5],
    arrowFunc:(item) => {
        console.log(item + 10);
    } 
}


const usuario = {
    nome: "Roger",
    idade: 40,
    mostrarIdade: () => {
        console.log(usuario.idade)  
    }
}

const usuario2 = {
    nome : "Diego",
    idade : 23,
    mostra: (nome = "Jaas", idade = 10) => {
        console.log(nome , idade)
    }
}


usuario.mostrarIdade();
usuario2.mostra(usuario2.nome,usuario2.idade);

//console.log(usuario2.mostrarUsuario.)

//const nome = "Diego";
//const idade = 23;
//function mostrarUsuario(nome = 'Diogo', idade = 18) {
//    return { nome, idade};
//}
//mostrarUsuario(nome, idade)
//mostrarUsuario(nome)