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