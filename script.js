//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        const sound = btn.innerText.trim();

        if (sound === "stop") {
            stopAll();
        } else {
            playSound(sound);
        }
    });
});

function playSound(name) {

    stopAll(); // stop any currently playing sound

    const audio = document.getElementById(name);
    audio.currentTime = 0;
    audio.play();
}

function stopAll() {
    sounds.forEach(s => {
        const audio = document.getElementById(s);
        audio.pause();
        audio.currentTime = 0;
    });
}
