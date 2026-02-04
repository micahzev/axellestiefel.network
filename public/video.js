const videoElement = document.getElementById('my-video');
const unmuteButton = document.getElementById('unmute-button');

unmuteButton.addEventListener('click', () => {
    videoElement.muted = !videoElement.muted;
    // Optional: Update the button text based on the muted state
    if (videoElement.muted) {
        unmuteButton.textContent = 'Unmute';
    } else {
        unmuteButton.textContent = 'Mute';
    }
});

var x = 0;
document.getElementsByTagName('video')[0].addEventListener('loadedmetadata', function() {
    if (x == 0) {
        // 1540 is the number of seconds in the video
        var now = Math.floor((Date.now() / 1000) % 1540);
        this.currentTime = now;
        document.getElementsByTagName('video')[0].style.display = 'inline-block';
        document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
        x += 1;
    }
}, false);
