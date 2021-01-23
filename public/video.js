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
