## Automação de testes web com Cypress
Projeto do curso Cypress Discovery, da QA Ninja.

-----------------------------------------
### O que este script faz?
Este script efetua alguns testes na aplicação [Buger Eats](https://buger-eats.vercel.app/).

-----------------------------------------
### Instalação e uso da arquitetura

**Atenção:** O Cypress somente funciona em computadores 64-bits (MacOS, Linux ou Windows).

- Instale as ferramentas:
  - [NodeJS](https://nodejs.org/en/download/ "NodeJS")
  - [NPM](https://www.npm.com/ "NPM")
  - [Cypress](https://www.npmjs.com/package/cypress/ "Cypress")
  - [Git for Windows](https://gitforwindows.org/) e [Hyper](https://hyper.is/): Após a instalação de ambos, vamos integrar o Hyper com o Git Bash:
    - execute o Hyper, acesse o *menu superior esquerdo > Edit > Preferences*, altere as linhas `fontSize: 12,`, `shell: '',`, `shellArgs: ['--login'],` e `env: {},`,        respectivamente, para:

      ```
      fontSize: 26,
      shell: 'C:\\Program Files\\Git\\git-cmd.exe',
      shellArgs: ['--command=usr/bin/bash.exe', '-l', '-i'],
      env: { 'TERM':'cygwin' },
      ```
    - Após configurar, salve, feche e abra o Hyper novamente. As configurações do Hyper serão visualizadas, apresentando o Git Bash integrado. Para acessar o C:/, diferentemente     do cmder, informamos `cd /c/`.
    - Instale o plugin `hyper i hyperpower`, feche e abra o Hyper para concluir a instalação do plugin. Ele instala um efeito que exibe um efeito ao digitar os comandos.

  - [VS Code](https://code.visualstudio.com/ "VS Code"): após a instalação, vamos utilizar as seguintes extensões:
    - Hyper Term Theme, do HasseNasse
    - Material Icon Theme, do Philipp Kief

- Abra um terminal que aceite comandos git (exemplo: Powershell, git bash, cmder, etc.)
- Baixe este repositório ou faça um git clone (HTTPS/SSH)
- Abra o diretório do projeto via terminal e execute o comando abaixo para instalar as dependências:
```
npm install --save -dev
```
- Para verificar se possui as versões instaladas, digite no terminal:
```
npm -v && node -v
```

- Para abrir o painel do Cypress e escolher quais testes deseja executar, digite no terminal:
```
npm run cypress:open
```

- Para executar todos os testes em modo headless, digite no terminal:
```
npx cypress run
```

-----------------------------------------
### Arquitetura do projeto

```
📂 cypress-test-api/
  ├─ 📂 cypress/
  │        │
  │        ├── 📂 fixtures/ (pasta que contém arquivos com a massa de dados utilizada nos testes)
  │        │   └── 📂 integration/services/ (contém as subpastas dos ednpoints, na estrutura detalhada a seguir)
  │        │       ├── 📂 endpoint_a_ser_testado/
  │        │           ├── 📂 contracts/ (pasta que contém os testes so schemas)
  │        │               └── 📜 responseNomeEndopint.contract.js
  │        │           ├── 📂 payloads/ (pasta que contém arquivos com a massa de dados utilizada nos testes)
  │        │               └── 📜 teste.payload.json
  │        │           ├── 📂 tests/ (pasta que contém os testes aplicados nas requests)
  │        │               └── 📜 getNomeEndpoint.specs.js
  │        │               └── 📜 postNomeEndopint.specs.js
  │        │
  │        │
  │        ├── 📂 plugins/
  │        │   └── 📜 index.js
  │        │
  │        │
  │        ├── 📂 support/
  │        │   └── 📂 requests/ (pasta que contém os commands aplicados aos endpoints)
  │        │       └── 📜 index.js
  │        │   ├── 📜 commands.js
  │        │   └── 📜 index.js
  │        │
  ├── 📂 node_modules/
  ├── 📜 .gitignore
  ├── 📜 cypress.json
  ├── 📜 package-lock.json
  ├── 📜 package.json
  └── 📜 README.md
```

-----------------------------------------
### Camadas da arquitetura

- **payloads:** arquivos para massa de dados estática para os testes
- **integration/services:** contém as pastas com os testes de cada endpoint
- **plugins:** plugins que são utilizados na solução ficam dentro do arquivo "plugins/index.js"
- **support:** camada com comandos Cypress customizados e sobrescritas globais:
  - **requests**: pasta que contém os comandos aplicados às requests de cada endpoint
  - Arquivo <i>commands.js</i> para comandos específicos
  - Arquivo <i>index.js</i> responsável por receber as importações dos comandos Cypress
- **node_modules:** arquivos ou diretórios que podem ser carregados pelo NodeJS
- **cypress.json:** arquivo de configuração dos Cypress, que contém a <i> baseUrl </i> dos endpoints
- **package-lock.json:** gerado automaticamente com as instalações e atualizações de pacotes

---

## Iniciando um novo projeto

- Crie uma pasta, acesse a pasta via linha de comando, digite `npm init -y`
- Abra o projeto no VS Code, com o comando `code .`
- Instale o Cypress, com o comando `npm install cypress --save-dev`
- Altere a linha `test` no arquivo *package.json*, para que fique da seguinte forma:
```javascript
  "scripts": {
    "test": "npx cypress open"
  },
```
- Digite o comando `npm run test` para inicializar o painel do Cypress pela primeira vez, e criar a estrutura do Cypress no nosso projeto.

Acesse *cypress > integration*, apague as pastas *1-getting-started* e *2-advanced-examples*. São pastas exemplo, não utilizaremos nos projetos.

## Primeiro script
Crie o arquivo *home.spec.js*, contendo o comando `cy:viewport` para configurar a resolução da janela exibida dentro do painel do Cypress, e `cy:visit` para acesar a URL:
```javascript
describe ('Home page', () => {
	it('app deve estar online', () => {
		cy.viewport(1920, 1080)
		cy.visit('https://buger-eats.vercel.app/')
	})
})
```

## Não use o Selector Playground


## Javascript - acessando arquivos externos
Crie a pasta  *js*, contendo os arquivos abaixo:

*show.js*
```javascript
function verificarIdade() {

	var nome = document.querySelector('input[name=nome]')
	var idade = document.querySelector('input[name=idade]')

	if (nome.value.length == 0) {
		alert("Nome é um campo obrigatório.")
	}

	var idadeNum = parseInt(idade.value)

	if (idadeNum >= 18) {
		alert('Ok, você já pode ir ao show sozinho.')
	} else if (idadeNum >= 12 && idadeNum <=16 ) {
		alert('Você é menor de idade, precisa estar acompanhado de um responsável para ir ao show.')
	} else if (idade.value.length == 0) {
		alert('Idade é um campo obrigatório.')
	}
	 else {
		alert('Você ainda não tem idade mínima para entrar no show!')
	}
}
```

*bandas.js*
```javascript
// API
var bands = ['Red Hot Chili Peppers', 'Pink Floyd', 'Led Zeppelin', 'Turnover', 'Cranberries']

function listaBandas() {
	var ul = document.getElementById('bands')
	ul.innerHTML = ''

	bands.forEach(function(b) {
		var li = document.createElement('li')
		var text = document.createTextNode(b)
		li.appendChild(text)
		ul.appendChild(li)
	})
}
```

Fora da pasta *js*, crie o arquivo *index.html*, contendo:
```html
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE-edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Página exemplo</title>
	</head>
	<body>
		<h1>Show</h1>

		<input type="text" name="nome" placeholder="Seu primeiro nome" />
		<input type="number" name="idade" placeholder="Sua idade" />
		<button type="button" onclick="verificarIdade()">Verificar idade</button>

		<h1>Bandas</h1>

		<button type="button" onclick="listaBandas()">Listar bandas</button>

		<ul id="bands">
		</ul>

		<script type="text/javascript">
		</script>
	</body>
</html>
```

Para fazer com que os arquivos sejam exibidos dentro do *index.html*, basta declarar `src=""` indicando o caminho dos arquivos:
```html
<script type="text/javascript" src="js/show.js"></script>
<script type="text/javascript" src="js/bandas.js"></script>
```

## Startando um servidor local
Para abrirmos a página do exemplo, precisamos navegar até a pasta onde consta o arquivo *index.html* e dar duplo clique. No entanto, seria interesdsante abrirmos a página em um servidor web.

Para isso, execute o prompt de comando como **administrador**, e digite o comando `npm isntall http-server -g` (o `-g` instala o pacote node de forma global, ou seja, em qualquer lugar dentro do meu sistema operacional, como se fosse um executável).

Feche o prompt de compando, abra o Hyper, acesse a pasta *javascript* do projeto, e digite o comando `http-server`. Isso transformará a pasta *javascript* em um servidor web local.

O arquivo *index.html* representa a página principal a ser aberta em servidores, então ao acessarmos o navegador e digitar `localhost:8080`, nossa página será aberta.

### Antes do NodeJS
Ao acessar o modo desenvolvedor da página (F12), aba *Sources*, temos a estrutura de arquivos do nosso projeto. Uma vez que nosso código HTML tenha instrução para trabalhar com Javascript, o navegador faz o **download** dos programas em Javascript do nosso projeto, que estão no servidor web. Ou seja, o javascript é **executado no navegador web**.

### Após o NodeJS
Com a implementação do [Javascript Engine V8](https://medium.com/reactbrasil/como-o-javascript-funciona-dentro-da-engine-v8-5-dicas-sobre-como-escrever-c%C3%B3digo-otimizado-e05af6088fd5), foi possível executar o Javascript também **no servidor**, além do navegador. Veremos um exemplo no tópico a seguir.

## Rodando Javascript no backend utilizando NodeJS
Acessando a pasta *javascript* no console, informe o comando `npm init`, e informar os valores:
- package name: `node-server`
- version: (manter)
- description: `Rodando o Javascript no servidor web`
- entry point: (manter)
- test command: (manter)
- git repository: (manter)
- keywords: (manter)
- author: Carol Ciola
- license: `MIT`
- Is this ok? `yes`

Abrindo o projeto no VS Code, foi criado o arquivo `package.json`contendo as configurações informadas. esta pasta, portanto, será um projeto Node.

No Hyper, ainda na pasta do projeto, execute o comando `npm install express`. O **express** é um framework Node que cria um servidor para rodar no backend.

Acesse o site https://www.npmjs.com/, busque por *express*. Vamos ter o trecho de código abaixo, que executa javascript no servidor através do Node:
```javascript
const express = require('express') //importa a biblioteca do express
const app = express() //instância de objeto da aplicação, ativando o express

app.get('/', function (req, res) { //método GET, que devolve como resutado da requisição um Hello World
  res.send('Hello World')
})

app.listen(3000)
```

Crie o arquivo *server.js* e cole este conteúdo.

No VS Code, busque pela extensão *Thunder Client*, do Ranga Vadhineni.

Execute a aplicação, informando no Hyper `node server.js`.

Clicando no novo ícone de "raio" que surgiu no menu lateral no VS Code, clique em *New request*, informe o endpoint *http://localhost:3000* e dispare a requisição. O retorno deverá ser *Hello World*.

### nodemon
Sempre que editarmos nosso script, é necessário encerrar o processo do server (teclando `Ctrl C`) e iniciá-lo novamente de forma manual, digitando o comando no prompt. Para não fazermos isso manualmente todas as vezes, vamos encerrar o processo, e digitar no Hyper o comando `npm install nodemon --save-dev`.

Depois disso, vamos passar a iniciar o server com o comando `npx nodemon server.js`. O **nodemon** fica monitorando o projeto/arquivo que está em execução, e quando ocorre uma alteração, ele recarrega a aplicação automaticamente.

### Headers
No Thunder Client, acessando a aba *Headers*, vemos que está nos devolvendo o valor da requisição em *text/html* (vide *content-type*), mas queremos que retorne no formato *json*. Para isso, vamos editar o objeto `res`, referente à resposta, acrescentando `.json` e alterando o formato da mensagem confore abaixo:
```javascript
res.json({message: 'Hello World'})
```

Enviando a requisição GET novamente, nos será retornado *application/json; charset=utf-8*, e o *Response* retornará no formato json:
```json
{
  "message": "Hello World"
}
```

Vamos criar uma nova requisição, contendo:
```javascript
app.get('/bands', function (req, res) {
  var bands = ['Red Hot Chili Peppers', 'Pink Floyd', 'Led Zeppelin', 'Turnover', 'Cranberries']
  return res.json({data: bands})
})
```

Disparando uma nova requisição no endpoint `http://localhost:3000/bands`, será retornada a lista de bandas.

Vamos criar uma nova requisição, a qual retornará um valor que será passado na própria requisição, criando uma **constante**. A diferença de uma constante para uma variável, é que a variável muda, e a constante não.

```javascript
app.get('/show', function (req, res) {
  const idade = req.query.idade
    return res.json({test: idade})
})
```

Disparando uma nova requisição no endpoint, passando uma *query parameter* para a idade `http://localhost:3000/show?idade=38` apenas para ver se está funcionando. Será retornado para `test` o valor `38`.

Vamos incrementar o script da requisição com a regra de idade do arquivo *show.js*. 

Porém não precisamos mais informar o `value` para `idade`, pois agora estamos obterndo o valor de uma constante, não mais de uma variável.

O `alert`também é algo exclusivo para exibir uma mensagem no navegador, não se aplica à API. Devolveremos então no formato *json*, `return res.json({message: '...'})`.

```javascript
app.get('/show', function (req, res) {
  const idade = req.query.idade

  var idadeNum = parseInt(idade)

	if (idadeNum >= 18) {
		return res.json({message: 'Ok, você já pode ir ao show sozinho.'})
	} else if (idadeNum >= 12 && idadeNum <=16 ) {
		return res.json({message: 'Você é menor de idade, precisa estar acompanhado de um responsável para ir ao show.'})
	} else if (idade.length == 0) {
		return res.json({message: 'Idade é um campo obrigatório.'})
	}
	 else {
		return res.json({message: 'Você ainda não tem idade mínima para entrar no show!'})
	}
})
```

Disparando a requisição novamente, nos será retornada a mensagem de acordo com a regra para a idade informada na *query parameter* `http://localhost:3000/show?idade=38`.

Caso o *query parameter* não seja informado, ou seja informado sem passar nenhum valor da idade, vamos ajustar para que seja interpretado corretamente pela API, ficando `!idade` (o ! questiona se é nulo):
```javascript
} else if (!idade) {
	return res.json({message: 'Idade é um campo obrigatório.'})
}
```

## Masterclass complementar
Links das masterclasses complementares do curso:

- [Masterclass #1](https://www.youtube.com/watch?v=UfGROGLyqZ0&list=LL&index=1) (20/01/2021)


## Dicas
- *npm* significa Node Package Manager, ou gerenciador de pacotes do NodeJS.

- Comunidade no Telegram: https://t.me/joinchat/J2lmnhiUztr7_Hjes40Wgw