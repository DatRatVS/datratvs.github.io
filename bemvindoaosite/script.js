const randomNumber = Math.floor(Math.random() * 3)

const videos = [
  "G",
  "Z",
  "V",
  "L",
  "T",
  "9C",
  "M"
]

let video = document.getElementById(videos[Math.floor(Math.random()*videos.length)])
console.log(video)

/*
if (randomNumber === 0) {
  video = document.getElementById("second-video")
  console.log('The random number is 0, playing "Z"')
} else if (randomNumber === 1) {
  video = document.getElementById("video")
  console.log('The random number is 1 playing "G"')
} else {
  video = document.getElementById("third-video")
  console.log('The random number is 2 playing "V"')
}
*/

function onClick() {

  video.style.width = window.innerWidth + 'px'
  video.style.height = window.innerHeight + 'px'
  video.style.display = 'block'

  if ("video" === video.id) {
    video.volume = 0.6
  }
  
  video.play()

  document.addEventListener('contextmenu', event => event.preventDefault());

  document.getElementById('a').style.display = 'none'

  video.addEventListener('ended', () => {
    window.close()
  })
}

window.addEventListener('resize', () => {
    video.style.width = window.innerWidth + 'px'
    video.style.height = window.innerHeight + 'px'
})