const background = document.querySelector('#background'); 
const thumbnail = document.querySelector('#thumbnail');
const song = document.querySelector('.song'); 

const songArtist = document.querySelector('.song-artist'); 
const songTitle = document.querySelector('.song-title'); 
const progressBar = document.querySelector('#progress-bar'); 
let pPause = document.querySelector('.play'); 
let playPrev = document.querySelector('.play-prev');
let playNext = document.querySelector('.play-next');
const volumeMut = document.querySelector('.volume-mute');
let songIndex = 0;
let songs = ['./assets/sounds/Aqua Caelestis.mp3', './assets/sounds/Ennio Morricone.mp3', './assets/sounds/River Flows In You.mp3', './assets/sounds/Summer Wind.mp3']; 
let songTitles = ["Aqua Caelestis", "Ennio Morricone", "River Flows In You", "Summer Wind"]; // название композиций

// функция, в которой элемент pp (воспроизведение-пауза) изменяется в зависимости от воспроизведения логического значения - если нажата кнопка воспроизведения, изменится pp.src на кнопку паузы и вызовет song.play() и наоборот.
let playing = true;
song.volume = 0.5;
let batMut = song.volume;
function playPause() {
    if (playing) {
    

        pPause.style.backgroundImage = 'url("./assets/svg/pause.svg")';
        songTitle.textContent = songTitles[songIndex];
        var range = document.getElementById('range');
range.onchange = function(){
    
  if (this.value == this.min){
    song.volume = 0;
    batMut = song.volume;
    volumeMut.style.backgroundImage = 'url("./assets/svg/volume-2.svg")'
    console.log(sthis.min);
  } else if(this.value == this.max){
    song.volume = 1;
    batMut = song.volume;
    volumeMut.style.backgroundImage = 'url("./assets/svg/volume-1.svg")'
    
  } else{
    song.volume = this.value / 100;
    batMut = song.volume;
    volumeMut.style.backgroundImage = 'url("./assets/svg/volume-1.svg")'
  }
}

        
        song.play();
        playing = false;
    } else {
        pPause.style.backgroundImage = 'url("./assets/svg/play.svg")'
        
        
        song.pause();
        playing = true;
    }
}
pPause.addEventListener('click', playPause);
// автоматически воспроизводить следующую песню 
song.addEventListener('ended', function(){
    nextSong();
});

// функция, в которой songIndex увеличивается, название песни изменяется на следующее значение индекса, а playPause() запускается для воспроизведения следующей дорожки
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0; 
    };
    song.src = songs[songIndex];
    songTitle.textContent = songTitles[songIndex];
    
    playing = true;
    playPause();
}
playNext.addEventListener('click', nextSong);

// функция, в которой songIndex уменьшается, название песни изменяется на предыдущее значение индекса, а playPause() запускается для воспроизведения предыдущей дорожки
function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 3;
    };
    song.src = songs[songIndex];
    songTitle.textContent = songTitles[songIndex];

    playing = true;
    playPause();
}
playPrev.addEventListener('click', previousSong);

// обновить progressBar.max до продолжительности объекта песни, то же самое для progressBar.value, обновить currentTime

function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
    }
};

// преобразовать song.currentTime и song.duration в формат MM:SS
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};
let mute = true;
function volMut(){
    if(mute){
        volumeMut.style.backgroundImage = 'url("./assets/svg/volume-2.svg")'
        range.value = 0;
        song.volume = 0;
        mute = false;
    }else{
        volumeMut.style.backgroundImage = 'url("./assets/svg/volume-1.svg")'
        song.volume = batMut;
        range.value = batMut * 100;
        mute = true;
    }
}
volumeMut.addEventListener('click', volMut);

// запускать функцию updateProgressValue каждые 1/2 секунды, чтобы показать изменения в progressBar и song.currentTime
setInterval(updateProgressValue, 500);

// функция, в которой progressBar.value изменяется при перетаскивании ползунка без автоматического воспроизведения звука
function changeProgressBar() {
    song.currentTime = progressBar.value;
};



