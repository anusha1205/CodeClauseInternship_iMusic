let progress = document.getElementById("progress");
let player = document.getElementById("player");
let controlIcon = document.getElementById("controlIcon");

player.onloadedmetadata = function () {
      progress.max = player.duration;
      progress.value = player.currentTime;
}
function playPause() {
      if (controlIcon.classList.contains("fa-pause")) {
            player.pause();
            controlIcon.classList.remove("fa-pause");
            controlIcon.classList.add("fa-play");
      }
      else {
            player.play();
            controlIcon.classList.add("fa-pause");
            controlIcon.classList.remove("fa-play");
      }
}

if (player.play()) {
      setInterval(() => {progress.value = player.currentTime;}, 500)
}
progress.onchange = function () {
      player.play();
      player.currentTime = progress.value;
      controlIcon.classList.add("fa-pause");
      controlIcon.classList.remove("fa-play");
}