// Forma 1º de fazer a tecla Pom tocar
// const pom = document.getElementById('Pom');
// const song = document.getElementById('som_tecla_pom');


// function tocaPom (){
//     song.play();
// };

// pom.addEventListener('click', tocaPom);
// FIM da Forma 1º de fazer a tecla Pom tocar

// --------------------------------------------------------------------------

// INICIO da Forma 2º de fazer a tecla Pom tocar
function tocaSom (idElementoAudio){
    
    document.querySelector(idElementoAudio).play();

}
// Variável para pegar todas as tags html que possuem a classe tecla



const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// Estrutura de repetição
while(contador < listaDeTeclas.length){
    
    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    
    contador += 1;

    console.log(contador);
}
// FIM da Forma 2º de fazer a tecla Pom tocar

