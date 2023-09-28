const videos = ["G", "Z", "V", "L", "T", "9C", "M", "D", "C", "CA", "AAA", "ZAA", "HL", "GRAU", "H", "S", "GOD", "GOD2", "VELHA", "REM", "PROCE", "MV", "L2"];

const wrapper = document.getElementById("wrapper");

const getParams = new URLSearchParams(window.location.search);
const param = getParams.get("force");

const getVideo = param && videos.indexOf(param) !== -1 ? param : videos[Math.floor(Math.random() * videos.length)];
const videoElement = document.createElement("video");

console.log(getVideo);

const onClick = () => {
    videoElement.id = "video";
    videoElement.src = `./res/${getVideo}.mp4`;
    videoElement.volume = 0.6;

    wrapper.appendChild(videoElement);
    videoElement.play();

    document.addEventListener("contextmenu", (event) => event.preventDefault());

    document.getElementById("a").style.display = "none";

    resizeVideo();

    videoElement.addEventListener("ended", () => {
        window.close();
    });
}

window.addEventListener("resize", () => {
    resizeVideo();
});

const resizeVideo = () => {
    videoElement.style.width = window.innerWidth + "px";
    videoElement.style.height = window.innerHeight + "px";
}
