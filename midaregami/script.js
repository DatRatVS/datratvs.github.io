const musicLinks = [
  "2dhV6VPKdqNg85vgv16xjo"
];

const getMusic = () => {
  return `https://open.spotify.com/embed/track/${
    musicLinks[Math.floor(Math.random() * musicLinks.length)]
  }`;
};

document.getElementById("changeMusic").src = getMusic();
