const randomNumber = Math.floor(Math.random() * 10)

let video

if (randomNumber === 5) {
  video = document.getElementById("second-video")
  console.log('The random number is 5, playing "Z"')
} else {
  video = document.getElementById("video")
  console.log('The random number is ' + randomNumber + ' playing "G"')
}

function onClick() {

  video.style.width = window.innerWidth + 'px'
  video.style.height = window.innerHeight + 'px'
  video.style.display = 'block'

  if ("video" === video.id) {
    video.volume = 0.8
  }
  
  video.play()

  document.addEventListener('contextmenu', event => event.preventDefault());

  document.getElementById('a').style.display = 'none'

  video.addEventListener('ended', () => {
    window.close()
  })
}

window.addEventListener('resize', () => {
  setTimeout(() => {
    video.style.width = window.innerWidth + 'px'
    video.style.height = window.innerHeight + 'px'
  }, 0)
})
