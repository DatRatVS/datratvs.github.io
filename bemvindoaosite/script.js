let video = document.getElementById('video')

function onClick() {

  video.style.width = window.innerWidth + 'px'
  video.style.height = window.innerHeight + 'px'
  video.style.display = 'block'
  video.volume = 0.02
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
