document.fonts.load("1em Abel").then(() => {
  document.body.style.visibility = "visible";
});

const video = document.getElementById("my-video");
const app = document.getElementById("video-wrapper");
const loader = document.getElementById("loader");

// 1540 is the number of seconds in the video
var now = Math.floor((Date.now() / 1000) % 1540);

video.currentTime = now; // forces first frame decode

const dots = document.getElementById("dots");
let count = 0; // start from 0
let direction = 1; // 1 = increasing, -1 = decreasing

setInterval(() => {
  dots.textContent = ".".repeat(count);

  count += direction;

  if (count === 3) direction = -1; // reverse at max
  if (count === 0) direction = 1; // reverse at min
}, 400);

var x = 0;
document.getElementsByTagName("video")[0].addEventListener(
  "loadedmetadata",
  function () {
    if (x == 0) {
      this.currentTime = now;
      document.getElementsByTagName("video")[0].style.display = "inline-block";
      document.getElementsByTagName("body")[0].style.backgroundColor = "black";
      x += 1;
    }
  },
  false,
);

video.addEventListener("loadeddata", () => {
  video.play(); // start decoding/rendering
  video.addEventListener(
    "playing",
    () => {
      app.classList.remove("hidden");
      loader.style.display = "none";
    },
    { once: true },
  );
});

const videoElement = document.getElementById("my-video");
const unmuteButton = document.getElementById("unmute-button");

unmuteButton.addEventListener("click", () => {
  videoElement.muted = !videoElement.muted;

  // Update the button text based on the muted state
  if (videoElement.muted) {
    unmuteButton.textContent = "Unmute";
  } else {
    unmuteButton.textContent = "Mute";
  }
});
