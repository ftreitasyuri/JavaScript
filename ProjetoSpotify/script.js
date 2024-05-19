
// Variável para receber o ID de song-name do HTML
const songName = document.getElementById('song-name');

// Acionando o texto do elemento e alterando o texto
// songName.innerText = 'Apocalyptie Love'

// song representa a tag de audio no html
const song = document.getElementById('audio');

// play representa id do botão play-music no html
const play = document.getElementById('play-music');

// Variável para controlar o nome da banda
const bandName = document.getElementById('band-name');

// Variável para controlar a capa do almbum
const cover = document.getElementById('cover')

// 
const next = document.getElementById('next');

// 
const previous = document.getElementById('previous');

// 
let titleSong = document.getElementById('playlist-title');

// 
let likeSong = document.getElementById('like');

// 
const currentProgress = document.getElementById('current-progress');

// 
const progressContainer = document.getElementById('progress-container');

// Música 1
const cartoon = {

    songName : 'On & On',
    artist : 'Cartoon - feat. Daniel Levi ',
    file : 'musica1'
    
};
// Música 2
const circleDance = {

    songName : 'Circle Dance',
    artist : 'DKM',
    file : 'musica2'

};
// Música 3
const pluckAndPlay = {

    songName : 'Pluck and Play',
    artist : 'DKM',
    file : 'musica3'

};

// Variável auxiliar
let isPlaying = false


// ==========================================
// Array para criar uma lista de musicas
const playList = [cartoon, circleDance, pluckAndPlay];
let index = 0;
// ==========================================


// Função para dar play na música e trocar o icone do botão
function playSong(){    
    play.querySelector('.bi').classList.remove("bi-play");
    play.querySelector('.bi').classList.add('bi-pause');
    song.play();
    isPlaying = true;
}

// Função para dar pausa na música e trocar o icone do botão
function pauseSong(){    
    play.querySelector('.bi').classList.remove("bi-puase");
    play.querySelector('.bi').classList.add('bi-play');
    song.pause();
    isPlaying = false;
}

// Função para decidir se está tocando a música ou não
function playPauseDecider(){
    
    if(isPlaying === true){
        pauseSong();
    }
    else{
        playSong();
    }
        
}

// 

function initializeSong (){
    cover.src = `nImages/${playList[index].file}.jpg`;
    song.src = `songs2/${playList[index].file}.mp3`;
    songName.innerText = playList[index].songName;
    bandName.innerText = playList[index].artist;
    titleSong.innerText = playList[index].songName;
}

// Votlar música
function previouSong(){
    if(index === 0){
        index = playList.length - 1;
    }
    else{
        index = index - 1;
    }
    initializeSong();
    playSong();
}

// Avançar música
function nextSong(){
    if(index === playList.length - 1){
        index = 0
    }
    else{
        index = index + 1;
    }
    initializeSong();
    playSong();
}

// EM CONSTRUÇÃO
function liked (){
    likeSong.querySelector('.bi').classList.remove('bi-heart');
    likeSong.querySelector('.bi').classList.add('bi-suit-heart-fill');
}

// Progress bar
function updateProgressBar(){

    song.currentTime
    song.duration

    const barwidth = (song.currentTime/song.duration)*100;
    
    currentProgress.style.setProperty('--progress', `${barwidth}%`);



}

function jumpTo (event){

    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition/width) * song.duration;
    song.currentTime = jumpToTime;
}

// FIM FUNÇÕES


initializeSong()

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previouSong);
next.addEventListener('click', nextSong);
likeSong.addEventListener('click', liked);
song.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', jumpTo);