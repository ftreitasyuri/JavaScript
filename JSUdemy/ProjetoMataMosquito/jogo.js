// Recuperando a altura e largura disponivel na página

var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500

var level = window.location.search
level = level.replace('?', '')

if(level === 'normal'){
    criaMosquitoTempo = 2000
}else if(level === 'dificil'){
    criaMosquitoTempo = 1000
}else if(level === 'chcu'){
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()


var cronometro = setInterval(function(){
    tempo -= 1
    

    if(tempo < 0){

        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    
    
}, 1000)


function posicaoRandomica() {

    // removendo o mosquito anterior caso exista:

    var existe = document.getElementById('mosquito')

    if (existe) {
        existe.remove()
        
            if (vidas > 3) {
                window.location.href = 'fim_de_jogo.html'
                
            }else{
                
                // console.log('v' + vidas)
                document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
                vidas++
            }
        

    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    // tratando um possível problema, que seria caso a posição for menor que 0
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)


    // Criando um elemento HTML
    var mosquito = document.createElement('img')
    // aplicando o src no elemento
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    // mosquito.width = '50'
    // mosquito.height = '50'

    // aplicando a posição randomica na imagem
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'

    // Para que a posição seja randomica, é necessário
    // que a posição da imagem seja absoluta
    mosquito.style.position = 'absolute'

    mosquito.id = 'mosquito'

    mosquito.onclick = function () {
        this.remove()
    }

    // FIM DO Criando um elemento HTML

    // Incluindo o elemento no body via js
    document.body.appendChild(mosquito)
    // tamanhoAleatorio()

    // ladoAleatorio()
}


// Função para mudar o tamanho do mosquito baseado na classe
/*
function tamanhoAleatorio(mosca){
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)
    if(classe === 1){
        mosca.className = 'mosquito2'
    }
    else if(classe === 2){
        mosca.className = 'mosquito3'
    }
}
*/
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)

    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}
// FIM da Função para mudar o tamanho do mosquito baseado na classe

// Função para mudar o lado da escala da imagem
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }

}

// FIM da Função para mudar o lado da escala da imagem

// Função para retornar a página
function retorno(){
    window.location.href = 'index.html'
}