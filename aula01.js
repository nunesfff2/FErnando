//classe 
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    som() {
        console.log("O animal faz um som.");
    }
}
// Objeto
const cachorro = {
    nome: "Guilherme",
    idade: 3,
    som: function () {
        console.log("O cachorro late.");
    }
}

// Atributo
const cachorro1 = {
    nome: "Ana Luiza",
    idade: 3,
    raça: "Golden Retriever"
}
console.log(cachorro1.nome); // Saída: Ana Luiza

// Método
const dog = {
    nome: "Laís",
    idade: 3,
    som: function () {
        console.log("O cachorro late.");
    }
}
dog.som(); // Saída: O cachorro late.

// Herança
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class Dog extends Animal {
    constructor(nome, idade) {
        super(nome, idade);
    }
}

// Polimorfismo
class Forma {
    área() {
        console.log("Calculando área...");
    }
}
class Círculo extends Forma {
    área() {
        console.log("Calculando área do círculo...");
    }
}