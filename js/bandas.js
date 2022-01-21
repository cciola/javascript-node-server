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