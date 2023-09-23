const musicLinks = [
  "5hVghJ4KaYES3BFUATCYn0", // Tyler, the Creator - EARFQUAKE
  "7KA4W4McWYRpgf0fWsJZWB", // Tyler, the Creator - See you Again (feat. Kali Uchis)
  "5TxRUOsGeWeRl3xOML59Ai", // Tyler, the Creator - ARE WE STILL FRIENDS?
  "11kDth1aKUEUMq9r1pqyds", // Travis Scott - 5% TINT
  "0TlLq3lA83rQOYtrqBqSct", // Drake - Nonstop
  "466cKvZn1j45IpxDdYZqdA", // Drake - Toosie Slide
  "2SAqBLGA283SUiwJ3xOUVI", // Drake - Laugh Now Cry Later (feat. Lil Durk)
  "3yfqSUWxFvZELEM4PmlwIR7", // Eminem - The Real Slim Shady
  "7FIWs0pqAYbP91WWM0vlTQ", // Eminem - Godzilla
  "5gAYHuWkL18ccsxM6akJXP", // Denzel Curry - Troubles [Feat. T-Pain]
  "74tLlkN3rgVzRqQJgPfink", // Kendrick Lamar, Jay Rock - Money Trees
  "1begxJWaxv4vExDn3lWku0", // Convexity - Steadfast
];

const getMusic = () => {
  return `https://open.spotify.com/embed/track/${
    musicLinks[Math.floor(Math.random() * musicLinks.length)]
  }`;
};

document.getElementById("changeMusic").src = getMusic();
