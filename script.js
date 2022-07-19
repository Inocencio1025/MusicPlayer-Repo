const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('.#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// Song titles
const songs = ['cityEscape', 'metallicMadness' , 'pumpkinHill', 'x5Intro']

// keep track of songs
let songIndex = 0

// Initially loads 
LoadSong(songs[songIndex])

// Update song details
function LoadSong(song){
    title.innerText = song
    audio.src = `Music/${song}.mp3`
    cover.src = `Images/${song}.jpg`
}


function PlaySong(){
musicContainer.classList.add('play')
playBtn.querySelector('i.fas').classList.remove('fa-play')
playBtn.querySelector('i.fas').classList.add('fa-pause')

audio.play()
}


function PauseSong(){
playBtn.querySelector('i.fas').classList.remove('fa-pause')
playBtn.querySelector('i.fas').classList.add('fa-play')

audio.pause()
}

// Event listeners
playBtn.addEventListener('click', () =>{
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        PauseSong()
    } else {
        PlaySong()
    }
})