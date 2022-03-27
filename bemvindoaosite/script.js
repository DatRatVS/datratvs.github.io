const videos = ["G", "Z", "V", "L", "T", "9C", "M", "D"];

// const randomNumber = Math.floor(Math.random() * 3);
const wrapper = document.getElementById("wrapper");
const randomVideo = videos[Math.floor(Math.random() * videos.length)];
const videoElement = document.createElement("video");

console.log(randomVideo);

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
    videoElement.id = "video";
    videoElement.src = `./res/${randomVideo}.mp4`;
    videoElement.volume = 0.6;

    wrapper.appendChild(videoElement);
    videoElement.play();

    document.addEventListener("contextmenu", (event) => event.preventDefault());

    document.getElementById("a").style.display = "none";

    videoElement.addEventListener("ended", () => {
        window.close();
    });
}

window.addEventListener("resize", () => {
    videoElement.style.width = window.innerWidth + "px";
    videoElement.style.height = window.innerHeight + "px";
});
