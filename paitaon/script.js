function onClick() {
    new Audio('res/audio.mp3').play();
    let video = document.getElementById('video');
    video.style.display = 'block';
    video.play();
  }