let currentScene = 0;

function nextScene() {
    const scenes = document.querySelectorAll(".scene");
    if (currentScene < scenes.length - 1) {
        scenes[currentScene].classList.remove("active");
        scenes[currentScene].classList.add("hidden");
        currentScene++;
        scenes[currentScene].classList.remove("hidden");
        scenes[currentScene].classList.add("active");
    }
}

function showGift() {
    const gift = document.getElementById("gift");
    gift.classList.remove("hidden");
    gift.classList.add("active");
}

