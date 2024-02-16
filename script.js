const second = document.querySelector('.second');
const minutes = document.querySelector('.minutes');
const hour = document.querySelector('.hour');
const sound = document.querySelector('audio');

setInterval(() => {
    const secReal = new Date().getSeconds();
    const minutReal = new Date().getMinutes();
    const hourReal = new Date().getHours();
    second.style.transform = `rotateZ(${secReal * 6}deg)`;
    minutes.style.transform = `rotateZ(${minutReal * 6}deg)`;
    hour.style.transform = `rotateZ(${((hourReal % 12) * 30) + minutReal / 2}deg)`;
    sound.play()
}, 1000)