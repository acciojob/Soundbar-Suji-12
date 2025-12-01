//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let soundName = btn.innerText.trim();

        if (soundName === "stop") {
            stopSounds();
        } else {
            playSound(soundName);
        }
    });
});

function playSound(sound) {
    stopSounds(); 
    let audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
}

function stopSounds() {
    // Stop all currently playing sounds
    sounds.forEach(sound => {
        let audio = new Audio(`sounds/${sound}.mp3`);
        audio.pause();
        audio.currentTime = 0;
    });
}
