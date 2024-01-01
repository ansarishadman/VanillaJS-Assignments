setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    hourRotation = 30 * hours + mins / 2; // 30 degrees is for hours and 30/60 degrees is for mins
    minRotation = 6 * mins;
    secRotation = 6 * secs;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;
})