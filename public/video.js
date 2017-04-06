if (window.mobileAndTabletcheck()) {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
    document.getElementsByTagName('video')[0].style.display = 'none';
} else {
    var x = 0;
    document.getElementsByTagName('video')[0].addEventListener('loadedmetadata', function() {
        if (x == 0) {
            var now = Math.floor((Date.now() / 1000) % 1550);
            this.currentTime = now;
            document.getElementsByTagName('video')[0].style.display = 'inline-block';
            document.getElementsByTagName('pre')[0].style.display = 'none';
            document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
            x += 1;
        }
    }, false);
}
