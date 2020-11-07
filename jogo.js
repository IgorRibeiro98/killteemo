
var altura = 0
var largura = 0
var vidas = 1
var tempo = 30

var criaTeemoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'bronze'){
	//1500
	criaTeemoTempo = 1500
}else if(nivel === 'diamante'){
	//1000
	criaTeemoTempo = 1000
}else if(nivel === 'challenger'){
	//750
	criaTeemoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

	tempo -= 1

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaTeemo)
		window.location.href = 'app_win.html'
	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}
	

}, 1000)

function posicaoRandomica(){

	//remover o mosquito anterior (caso exista)

		if (document.getElementById('teemo')){
			document.getElementById('teemo').remove()

			if (vidas > 3) {
				window.location.href = 'app_gameover.html'
			}else{
			document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

			vidas++
			}
		}
		

	var posicaoX = Math.floor(Math.random() * largura) - 120
	var posicaoY = Math.floor(Math.random() * altura) - 120

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//criar elemento html
var teemo = document.createElement("img")
teemo.src = "imagens/teemo.png"
teemo.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
teemo.style.left = posicaoX + "px"
teemo.style.top = posicaoY + "px"
teemo.style.position = "absolute"
teemo.id = "teemo"
teemo.onclick = function(){
	this.remove()
}

document.body.appendChild(teemo)

console.log(ladoAleatorio())

}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe){
		case 0: 
		return 'teemo1'

		case 1: 
		return 'teemo2'

		case 2: 
		return 'teemo3'
	}
	
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe){
		case 0: 
		return 'ladoA'

		case 1: 
		return 'ladoB'}
	
}




	

