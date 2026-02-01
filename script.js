const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const card = document.getElementById("card");
const video = document.getElementById("valentineVideo");

const messages = [
    "Nice try 😜",
    "Almost 😂",
    "Nope 😏",
    "You can’t say no 💕",
    "Just click YES ❤️"
];

let escaped = false;

function escapeNo(e) {
    e.preventDefault(); // 🚫 block click on mobile

    if (!escaped) {
        const rect = noBtn.getBoundingClientRect();
        noBtn.style.position = "fixed";
        noBtn.style.left = rect.left + "px";
        noBtn.style.top = rect.top + "px";
        escaped = true;
    }

    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    message.innerText =
        messages[Math.floor(Math.random() * messages.length)];
}

/* Desktop */
noBtn.addEventListener("mouseenter", escapeNo);

/* Mobile */
noBtn.addEventListener("touchstart", escapeNo);
noBtn.addEventListener("touchmove", escapeNo);

/* Block clicking NO completely */
noBtn.addEventListener("click", (e) => e.preventDefault());

yesBtn.addEventListener("click", () => {
    card.style.display = "none";
    video.style.display = "block";
    video.play();
});

