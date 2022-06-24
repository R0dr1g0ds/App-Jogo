
let altura = 0
let largura = 0
let vidas = 1
let tempo = 15
let x, y;

let criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)


function posicaoRandomica() {


	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosca')) {
		document.getElementById('mosca').remove()

		//console.log('elemento selecionado foi: v' + vidas)
		if(vidas > 3) {

			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "img/coracao_vazio.png"

			vidas++
		}
	}

	 x = Math.floor(Math.random() * largura) - 90
	 y = Math.floor(Math.random() * altura) - 90

	x = x < 0 ? 0 : x;
	y = y < 0 ? 0 : y;

	console.log(x, y);

	//criar o elemento html de forma programatica
	let mosca = document.createElement('img');
	mosca.src = 'img/mosca.png';
	mosca.className = tRandom() + ' ' + ladoAleatorio() + ' ' + 'fundo';
	mosca.style.left = x + 'px';
	mosca.style.top = y + 'px';
	mosca.style.position = 'absolute';
	mosca.id = 'mosca';
	mosca.onclick = function() {
		this.remove()
	}  

	document.body.appendChild(mosca);

}
//criando tamanho randons para a mosca
function tRandom() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosca1';
		
		case 1:
			return 'mosca2';

		case 2:
			return 'mosca3';
	}
}

function ladoAleatorio() {
	var tRandom = Math.floor(Math.random() * 2)
	
	switch(tRandom) {
		case 0:
			return 'ladoA';
		
		case 1:
			return 'ladoB';

	}
}


