const videos = ["G", "Z", "V", "L", "T", "9C", "M", "D", "C", "CA"];

const wrapper = document.getElementById("wrapper");
const randomVideo = videos[Math.floor(Math.random() * videos.length)];
const videoElement = document.createElement("video");

console.log(randomVideo);

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
