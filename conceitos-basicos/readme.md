## Principais Tópicos 
Primeiramente, vamos para o [site oficial do React](https://reactjs.org/docs/add-react-to-a-website.html) que nos mostrará um passo a passo de como integrar o React em nosso HTML.

### Passo 1: Adicionando React ao HTML

Para começar, você precisará incluir as bibliotecas React e ReactDOM em seu documento HTML. Isso pode ser feito adicionando os seguintes códigos no elemento `<head>` do seu HTML:

```html
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

``````

### Passo 2: Configuração Inicial

Agora, vamos criar um documento HTML básico que contém a estrutura inicial para renderizar um componente React. Aqui está um exemplo de código:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Iniciante</title>
    <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>

<body>
    <!-- Elemento para montar o React -->
    <div id="app"></div>
    <script type="text/babel">
        function App() {
            return <div>Meu app</div>;
        }

        ReactDOM.render(<App />, document.getElementById('app'));
    </script>
</body>
</html>
``````


O `ReactDOM.render` precisa de dois parâmetros: primeiro o componente que queremos renderizar e segundo onde queremos que ele renderize. No caso do código, eu indico que a renderização do meu componente será feita na div `app`

# Conceitos Básicos de React

Agora que já entendemos como o React é renderizado na nossa página, vamos entender seus conceitos básicos. Podemos tomar como exemplo o conteúdo disponível no próprio site do Babel. [Babel](https://babeljs.io/repl)

## React Element

Todo elemento React é criado com a função `createElement`. O Babel é responsável por fazer a conversão do código de modo que o navegador entenda.

```jsx
function App() {
  return (
    <div id="app" title="teste">
      <ul>List
        <li>something</li>
      </ul>
    </div>
  );
}
``````

### O babel transpila nosso código da seguinte fora:

```jsx
"use strict";

function App() {
  return /*#__PURE__*/React.createElement("div", {
    id: "app",
    title: "teste"
  }, /*#__PURE__*/React.createElement("ul", null, "List", /*#__PURE__*/React.createElement("li", null, "something")));
}
````

## Componentes

Componentes nos permitem dividir sua interface em pequenos elementos. Eles podem ser criados através de funções que retornam elementos React ou por meio de classes que estendem `React.Component` e possuem o método `render` retornando um elemento React.

### Function Components

```jsx
const App = () => {
  return <h1>Meu app</h1>
}
class Button extends React.Component {
  render() {
    return <button>Comprar</button>
  }
  <!-- Onde teremos um botão com propriedades já herdadas -->
}

``````
## Composição

O principal motivo de criarmos componentes é podermos compor a interface com diversos componentes que podem ser reutilizados. Por exemplo:

```jsx
<script type="text/babel">
const Button =  () => {
  return <button>Comprar</button>
}

const Titulo = () => {
  return <h1>Esse é meu titulo</h1>
}

const App = () => {
  return (
    <div>Meu app
      <Titulo/>
      <Button />
      <div>Aqui também</div>
      <Button/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))
</script>


``````

## Eventos

Podemos atribuir eventos diretamente aos elementos:

```jsx
const Button =  () => {
  function handleClick(event) {
    console.log(event.target.innerText)
  }
  return <button onClick={handleClick}>Comprar</button>
}

``````

## Hooks (Básico)

Utilizamos o React pela facilidade de sincronização do estado. Antes dos Hooks, isso só era possível em componentes criados por meio de classes.

```jsx
const Compras = () => {
  const [contador, setContador] = React.useState(0); 
  console.log(contador);
  function comprar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <button onClick={comprar}>Comprar</button>
      <p>Total: {contador}</p>
      <p>Preço: R$ {contador * 250}</p>
    </div>
  )
}

``````

## Webpack & Babel

Condições necessárias para um ambiente de desenvolvimento com React ma prática não vão exigir o uso dos links no head da mesma forma que é feito no bootstrap

O webpack nos permite dividir o código, fará um agrupamento de forma otimizada. Vai processar nosso javascript e CSS. Vai usar o babel para transformar o JSX em javascript no final.

### Babel

- Transforma JSX em funções React
- Transforma Javascript novo em javascript antigo

## Criando uma aplicação React

O comando `npx create-react-app` cria um ambiente de desenvolvimento já configurado e otimizado para a otimização de aplicativos com React

```jsx
npx create-react-app meuapp
``````


## JSX

Javascript XML / Extension. Estende a sintaxe do Javascript, introduzindo elementos como xml que são convertidos em funções React

Exemplo:

```jsx
const App () => {
return <button>Comprar</button>;
 }

```

**O código acima é transformado em:**

```jsx
const App = () => {
return react.createElement('button', null, 'Comprar');
};
````
## Atributos

Atributos podem ser passados como HTML, mas com alguns casos especiais.

```jsx

const App = () => {
  return (
    <a href="https://google.com" title="Isso é um site">
       Meu app
    </a>
  );
}
``````
Apesar de parecer totalmente com o HTML, haverá casos especiais. O caso especial comum é o atributo class. Pelo fato de ser uma palavra reservada do Javascript, o JSX resolveu mudar o nome para evitar conflitos. O correto é className

```jsx

// Código do exercicio: 
	
import React from 'react';

const titulo = <h1>Esse é um titulo</h1>

const App = () => {
  const random = Math.random();
  const ativo = false;

  function mostrarNome(sobrenome){
    return 'André' + sobrenome;
  }

  const carro = {
    marca: "ford",
    rodas: "4",
  }

const estiloP = {
  color: 'blue',
  fontSize: '2rem',
}

  return (
    <>
    
    {titulo}
    <p>
    {true ? 'verdadeiro' : 'falso'} -__- {10}
    {mostrarNome('Calvin')}
    </p>
    {carro.rodas}
  <p style={estiloP}>{new Date().getFullYear()}</p>
<p className={ativo  ? 'ativo' : 'inativo'}>{random * 10000 / 50 }</p>
    </>
  );
};

export default App;

// Exercicio

import React from 'react';




const App = () => {
  
  const joao = {
    cliente: 'João',
    idade: 31,
    compras: [
      {nome: 'Notebook', preco: 'R$ 2500'},
      {nome: 'Geladeira', preco: 'R$ 3000'},
      {nome: 'Smartphone', preco: 'R$ 1500'},
      {nome: 'Guitarra', preco: 'R$ 3500'}
    ],
    ativa: false,
  };
  
  const maria = {
    cliente: 'Maria',
    idade: 31,
    compras: [
      {nome: 'Notebook', preco: 'R$ 250'},
      {nome: 'Geladeira', preco: 'R$ 300'},
      {nome: 'Smartphone', preco: 'R$ 1500'},
      {nome: 'Guitarra', preco: 'R$ 350'}
    ],
    ativa: true,
  };

  const dados = maria;
  const total = dados.compras.map(item => 
    Number(item.preco.replace('R$ ', ''))).reduce((a,b) => a + b);
  

  return (
<>
<div><p>Nome: {dados.cliente}</p></div>
  <p>Idade: {dados.idade}</p>
  <p>Situação da Conta: 
  <span style={{ color: dados.ativa ? 'green' : 'red' }}> 
  {dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
  <p>Total de gastos R$: {total}</p>
  <p>{total > 10000 ?  "Você estorou seu limite" : "Você gastou mais de 10000"}</p>
  
</>
  )
}



export default App;

``````

**JSX Arrays** 

Como trabalhar com Arrays? O JSX irá listar cada um dos itens da array.Ele não irá separar ou colocar virgula, é você que deve modificar o array para o resultado desejado.  Isso é diferente daquilo que estamos acostumados com o javascript puro.

```jsx
const App = () => {
  
  const produtos = [<li key="e1">Notebook</li>, <li key="e2">tablet</li> ]
  return (
<div>{produtos}</div>
    
  )
``````
**MAP**

É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da array.

```jsx

const App = () => {
  
  const filmes = ['Lagoa azul', 'Madagascar', 'IT']
return (
<ul>{filmes.map(filme => <li key={filme}>{filme}</li>)}</ul>
)
}
````
## Eventos

Podemos atribuir eventos diretamente aos elementos JSX como atributo. Os eventos são sintáticos, ou seja, criados pelo próprio React porém seguindo as especificações da W3C (e funcionam igualmente nos diversos browsers que o React Suporta)

Lista com os eventos do React:

```jsx

//Usando eventos no React:

const App = () => {
    const handleClick = (event) => {
        console.log(event.target);

    }
    return <button onClick={handleClick} 
    onMouseMove={handleClick}>Something</button>
}

//Função anônima no evento:
return <button onClick={(event) 
=> alert(event.target.innerText)}>Something
</button>

``````


**window/document**

Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com o javascript normalmente, usando addEventListener
```jsx
const App = () => {

    const handleScroll = (event) => {
    console.log(event);
}
window.addEventListener('scroll', handleScroll);
`````

## Componentes
O ideal é dividir o aplicativo em pequenos componentes para facilitar a manutenção do mesmo. Iremos trabalhar no curso com os chamados componentes funcionais. 

Esta relacionada a organização e composição do aplicativo, não diz respeito ao desempenho.

→ A primeira coisa a se fazer em um componente é importar o React.

→ Depois precisamos exportar o componente de modo a torna-lo acessível pelo nosso App.js

º Como esse processo de criar um componente se torna repetitivo com o tempo: usamos então os **snippets**. Basicamente eles concentram um trecho de código em algumas letras.

- Os componentes não precisam estar necessariamente separados dentro de arquivos diferentes dentro do nosso projeto, isso é feito somente pela organização.

```jsx 

// usando a sigla: rafce
import React from 'react'

const Footer = () => {
    return (
        <div>
            
        </div>
    )
}

export default Footer
``````

## Interface
Não existe limite para a composição de componentes, eles podem ser desde componentes gerais como Header e Footer até micro componentes como Input e Button

```jsx

import React from 'react';
import Footer from './Footer';
import Form from './Form/Form';
import Header from './Header';


const App = () => {

    const handleScroll = (event) => {
    console.log(event);
}
window.addEventListener('scroll', handleScroll);

    return (
        
        
    <div style={{ height: '200vh' }}>
        <Form/>
        <Header/>
        <Footer/>
        <button onClick={(event) => alert(event.target.innerText)}>Compre algo da loja</button>
    
    </div>
    
    )
}

export default App;
``````

## Return

Importante considerar: Um componente deve sempre retornar algo. O retorno pode ser qualquer tipo de dado aceitado pelo JSX (String, array, um elemento JSX, null e etc) | Caso não exista esse retorno teremos um erro em nosso código.

**React.Fragment**

Um componente deve sempre retornar um elemento único no return. Caso você deseje retornar mais de um elemento, evolva os mesmos em uma div ou dentro do <React.Fragment></React.Fragment> ou <> </>

- O return cria uma função e por isso deve retornar um elemento único
- criar divs dentro de divs pode sujar a DOM o ideal seria usar o React.Fragment

**Propriedades**

Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes. Esses são conhecidos como propriedades ou props


## Hooks ##
    
 O estado de uma aplicação representa as características dela naquele momento. Por exemplo:
    
os dados de um usuário foram carregados, o botão está ativo, o usuário esta na página de contato e etc. Podemos tomar mudanças de composição dos elementos que vemos em tela dependendo de seus respectivos estados
    
```jsx
    // A constante ativo define o estado do botão
    const ativo = true;
    <button dissable={!ativo}>{ativo ? 'Botão ativo' : 'Botão inativo'} </button>
    
    // Esse trecho não renderiza da forma que achamos
    
    const App = () => {
    let ativo = true;
    
    function handleClick() {
      ativo = !ativo;
      console.log(ativo)
    }
    
    <button dissable={!ativo} onClick={handleClick}>{ativo ? 'Botão ativo' : 'Botão inativo'} </button>
    ``````
    

``````



## Conceituando Hooks:

São funções especiais do React que permitem controlarmos o estado e o ciclo de vida dos componentes funcionais. Isso também só era possível com classes. Os hooks são métodos do objeto do React. O useState nos retorna um array com o valor inicial e uma função para modificar o estado atual.

```jsx

import React from "react";

const App = () => {
  const ativoHook = React.useState(false);
  const ativoValor = ativoHook[0];
  const atualizavoValor = ativoHook[1];
  console.log(ativoValor);

  function handleClick() {
    atualizavoValor(!ativoValor);
  }
  return (
    <div>
      <button onClick={handleClick}>
{ativoValor ? "Ativo" : "Inativo"}
</button>
    </div>
  );
};

export default App;

```
**React.useState**

O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor. Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React

. . .

**Múltiplos Estados**

Não existe limite para o uso do useState, podemos definir diversos no mesmo componente.

E também podemos passar o tipo de dado que queremos.

```jsx

import React from "react";

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  console.log(ativo);

  const [dados, setDados] = React.useState({ nome: 'André', idade: '30' });
  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui faculdade' })
  }
  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>
    </div>
  );
};

export default App;
````

