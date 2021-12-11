function onClick() {
  let video = document.getElementById('video');
  video.style.display = 'block';
  video.volume = 0.05;
  video.play();
  setTimeout(() => {  window.location.href = "https://datratvs.github.io/bemvindoaosite/noredir/redir.md"; }, 15500);
}