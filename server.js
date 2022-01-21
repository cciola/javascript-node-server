const express = require('express') //importa a biblioteca do express
const app = express() //instância de objeto da aplicação, ativando o express

app.get('/', function (req, res) { //método GET, que devolve como resutado da requisição um Hello World
  res.json({message: 'Hello World'})
})

app.get('/show', function (req, res) {
  const idade = req.query.idade

  var idadeNum = parseInt(idade)

	if (idadeNum >= 18) {
		return res.json({message: 'Ok, você já pode ir ao show sozinho.'})
	} else if (idadeNum >= 12 && idadeNum <=16 ) {
		return res.json({message: 'Você é menor de idade, precisa estar acompanhado de um responsável para ir ao show.'})
	} else if (!idade) {
		return res.json({message: 'Idade é um campo obrigatório.'})
	}
	 else {
		return res.json({message: 'Você ainda não tem idade mínima para entrar no show!'})
	}
})

app.listen(3000)