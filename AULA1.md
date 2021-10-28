# REACT JS

**Framework de JavaScript [Frontend]**

- Surgiu com o facebook
- Biblioteca mais famosa para construção de interfaces
- Boa parte das aplicações hoje em dia utilizam ReactJS
- Interface altamente responsiva às ações realizadas na página

## Conceitos do ReactJS

[Componente] - o componente, dentro do ReactJS, é uma função que devolve um html; _Obs.: Tudo é componente._
[Propriedade] - informações que podemos passar para um componente se comportar de maneira diferente;
[Estado] - Informação mantida por um componente dentro do React para então ser apresentada à interface;

**OBSERVAÇÕES**

- IMUTABILIDADE: a partir do momento que uma variável foi criada dentro do estado de algum componente, ela não sofre mais alterações - ao invés disso, é preciso criar uma nova informação baseada na informação prévia.

## [SPA] - Single Page Application

Aplicação de uma só página - conceito de como a aplicação se comporta.

## USANDO O YARN

Funções parecidas com o [npm] - gerenciador de pacotes.

No terminal, utilizando o Yarn, para criar um projeto com ReactJS

```
yarn create react-app letmeask --template typescript
```

## Firebase

Produto construído pela Google, com ferramentas para ajudar no desenvolvimento de aplicações Web e Mobile. [Funcionalidades comuns - autenticação] - backend pronto para utilizar configurável direto na interface.

## TYPESCRIPT - POR QUE USAR?

```ts
// CRIA UM TEMPLATE EM TYPESCRIPT PARA SER UTILIZADO FUTURAMENTE
type User = {
  name: string
  address: {
    city: string
    uf: string
  }
}

function showWelcomeMessage(user: User) {
  console.log(user)
  return `Welcome ${user.name}, from (${user.address.city})!`
}

//EXECUTANDO FUNÇÃO
showWelcomeMessage({
  name: 'Leonardo',
  address: {
    city: 'Bauru',
    uf: 'SP'
  }
})
```

## O PROJETO

APP - letmeask
Filtro de perguntas de lives - as perguntas mais votadas pelos próprios usuários são expostas

### Na prática

1.  Para criar e estilizar a página HTML através do ReactJS, você utiliza os arquivos em [JSX] (ou [TSX] se for usar _Typescript_)

2.  É preciso criar um index.tsx para fazer a ligação do `index.html` com o react, através da importação dele de das funções que serão utilizadas na prática.

```ts
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './services/firebase'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

Nesse caso, foi importado o React, o arquivo APP.tsx (responsável por ir importando as páginas que eu quiser) e o Firebase, que é uma ferramenta do próprio Google para auxiliar na criação de apps, como por exemplo na autenticação de usuários da plataforma.

E no render é onde será passada a função App(), que é a responsável por receber as estruturas [HTML] no [Javascript] ou [Typescript]

**Observação** - a div de id [root] será a única criada manualmente no arquivo HTML. O resto será criado pelo próprio React.

3.  Criar o arquivo App.tsx, que será responsável por receber as estruturas [HTML].

```ts
import { Home } from './pages/Home'

function App() {
  return <Home />
}

export default App
```

Nesse caso, a função App() está recebendo a página Home. É preciso importá-la e passá-la através da função [App()] para que o arquivo [index.tsx] receba e faça a renderização.

4. Para a criação de uma página, dentro da pasta pages
   D:\Arquivos\Documents\PROGRAMAÇÃO\NLW Maratonas\MISSION REACTJS\src\pages\
   é preciso importar todas as imagens que serão usadas e atribuí-las a variáveis.

Após isso exportar uma função com o nome desejado que contenha um return de toda a estrutura HTML desejada

```ts
import illustrationImg from '../assets/images/illustration.svg'

export function Home() {
  return (
    <div>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolozando perguntas e respostas"
        />
        <strong>Crie Salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
    </div>
  )
}
```

5. IMPORTAÇÃO DE ARQUIVO CSS

Criar arquivos em .scss na pasta _styles_ e importá-los nas páginas desejadas.

```ts
import '../styles/auth.scss'
```

## CONTEXTOS no REACTJS

É a forma de compartilhar qualquer tipo de conteúdo ou informação entre dois ou mais componentes.
