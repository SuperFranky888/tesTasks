let video = document.querySelector('video');
let counter = 0;

// запуск/остановка воспроизведения
video.onclick = () => {
    if (counter === 0) {
        video.play();
        counter = 1;
    } else if (counter === 1) {
        video.pause();
        counter = 0;
    }
    console.log(secondsToTime(video.currentTime));
    console.log(video.currentTime);
};
// останавливает и возвращает в начало видео 
video.onended = function () {
    video.currentTime = 0;
}
// отображает текущее время видео
video.ontimeupdate = function () {
    document.querySelector('.timing').textContent = secondsToTime(video.currentTime);
}

// конвертирует секунды в ч:м:с:мс
function secondsToTime(time) {

    var h = Math.floor(time / (60 * 60)),
        dm = time % (60 * 60),
        m = Math.floor(dm / 60),
        ds = dm % 60,
        s = Math.floor(ds);
    if (s === 60) {
        s = 0;
        m = m + 1;
    }
    if (s < 10) {
        s = '0' + s;
    }
    if (m === 60) {
        m = 0;
        h = h + 1;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (h === 0) {
        fulltime = m + ':' + s + ':' + Math.trunc((video.currentTime - Math.trunc(video.currentTime)) * 1000);;
    } else {
        fulltime = h + ':' + m + ':' + s;
    }
    return fulltime;
}