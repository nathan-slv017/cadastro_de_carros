let a = {
    nome: 'nathan',
    idade: 19
}

let b = JSON.stringify(a);

// localStorage

localStorage.setItem("nome", "nathan");
let n = localStorage.getItem("nome");
localStorage.removeItem("nome")

