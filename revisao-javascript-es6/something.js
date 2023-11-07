// Importações ou configurações globais

// Conceito 1: Declaração de variáveis com "let" e "const"
let name = "Alice";
const age = 30;

// Conceito 2: Arrow Functions
const add = (a, b) => a + b;

// Conceito 3: Template Literals
const message = `Olá, meu nome é ${name} e eu tenho ${age} anos.`;

// Conceito 4: Destructuring
const person = { name: "Bob", age: 25 };
const { name, age } = person;

// Conceito 5: Spread Operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

// Conceito 6: Rest Parameter
const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr);

// Conceito 7: Classes e Herança
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} faz um som.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} late.`;
  }
}

// Conceito 8: Módulos (import/export)
import { greet, goodbye } from "./greetings.js";

// Conceito 9: Promises
const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    // Simule uma requisição assíncrona
    setTimeout(() => {
      if (url === "https://api.exemplo.com/data") {
        resolve("Dados obtidos com sucesso!");
      } else {
        reject("Erro ao obter os dados.");
      }
    }, 2000);
  });
};

fetchData("https://api.exemplo.com/data")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

