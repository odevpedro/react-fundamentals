# Revisão JavaScript ES6

Este módulo de revisão cobre os conceitos essenciais do JavaScript ES6 (ECMAScript 2015) que são úteis no contexto do React.

## Conteúdo

- [Declaração de variáveis com "let" e "const"](javascript#conceito-1-declaracao-de-variaveis-com-let-e-const)
- [Arrow Functions](javascript#conceito-2-arrow-functions)
- [Template Literals](javascript#conceito-3-template-literals)
- [Destructuring](javascript#conceito-4-destructuring)
- [Spread Operator](javascript#conceito-5-spread-operator)
- [Rest Parameter](javascript#conceito-6-rest-parameter)
- [Classes e Herança](javascript#conceito-7-classes-e-heranca)
- [Módulos (import/export)](javascript#conceito-8-modulos-import-export)
- [Promises](javascript#conceito-9-promises)

## JavaScript ES6

### Conceito 1: Declaração de variáveis com "let" e "const"

```javascript
let name = "Alice";
const age = 30;
``````

## JavaScript ES6

### Conceito 2: Arrow Functions

As Arrow Functions, ou funções de seta, são uma forma concisa de definir funções em JavaScript. Elas são amplamente utilizadas em JavaScript ES6 e fornecem uma maneira mais clara e simplificada de escrever funções.

**Exemplo de Função comum**

```javascript
const add = (a, b) => a + b;


//Função que conta letras do nome
function contaLetra(nome) {
    return nome.length
}

console.log(contaLetra('Junior'));

//Função para caixa Alta
function aumentaFonte(texto) {
    return texto.toUpperCase()
} 

console.log(aumentaFonte('qualquertexto'))
``````

**Outro modo de criar uma função é através de uma expressão:**

```jsx
/*Neste caso a variavel upperName recebe uma função anonima 
cujo parametro é name*/
const upperName = function (name) {
    return name.toUpperCase();
}

console.log(upperName('Pedro'))
``````

**Agora função com Arrow Function**:

OBS: variável + nome da função igual ao parâmetro seguido de flecha e chaves

```jsx

const upperName = (name) => {
    return name.toUpperCase();
}

console.log(upperName('Pedro'));

//Modo reduzido por ter apenas uma linha:
const upperName = (name) => name.toUpperCase();
console.log(upperName('Pedro'));
`````

### Conceito 4: Destructuring

A Destructuring é uma funcionalidade poderosa do JavaScript ES6 que permite extrair valores de objetos e arrays de forma concisa e eficiente.

```javascript
const person = { name: "Peter", age: 30 };
const { name, age } = person;

````
**Modo comum de acessar recursos de uma função:**

```jsx

function handleMouse(event){
    const x = event.clientX
    const y = event.clientY
    console.log(x , y)
}
document.addEventListener('click', handleMouse )

````

**Agora usando o destructuring:**
```jsx
function handleMouse(event){
    const { clientX, clientY } = event;
				
    console.log( clientX, clientY );
}
document.addEventListener('click', handleMouse )

//Desestruturando Arrays:
const frutas = ['banana','pessêgo']
const [fruta1, fruta2] = frutas;
console.log(fruta2)

//Outro exemplo | hooks
const useQuadrado = [
    4, function (lado){
        return 4 * lado;
    },
];

const [lado, perimetro] = useQuadrado;
console.log(lado);
console.log(perimetro(10));
````

## Conceito 5: Spread Operator


## Modules(Export & Import)
Usando os recursos básicos do javascript podemos, sabemos que é possível ganharmos em produtividade reutilizando funções em diferentes partes do nosso código. Mas também é possível usarmos funções e recursos que estão disponíveis em outros arquivos/projetos.

```jsx

//Temos essas duas funções em um arquivo:

export function areaQuadrado(l){
    return l * l;
}

export function perimetroQuadrado(l){
    return 4 * l
}
//Em OUTRO arquivo podemos importa-las:
import {areaQuadrado, perimetroQuadrado} from './quadrado.js';
 console.log(areaQuadrado(5));

``````

**Podemos também exportar as funções através de um objeto:**
```jsx
export function areaQuadrado(l){
    return l * l;
}

export function perimetroQuadrado(l){
    return 4 * l
}

const quadrado = {
    areaQuadrado,
    perimetroQuadrado
}

export default quadrado;

// Na OUTRA pagina temos:
import quadrado from './quadrado.js';
import numeroAleatorio from './numeroAletorio.js';

 console.log(quadrado.areaQuadrado(5));
 console.log(quadrado.perimetroQuadrado(5));
 console.log(numeroAleatorio());
 ``````

 ## Fetch
 Usado para fazer requisições assíncronas geralmente quando há algo envolvendo API
 ```jsx
 fetch('https://ranekapi.origamid.dev/json/api/produto').
then((response) => response.json()).then(json => {
    console.log(json)
});
//Pega a requisição e transforma em json depois faz o log do json
``````

