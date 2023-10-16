const second = document.querySelector('.second');
const minutes = document.querySelector('.minutes');
const time = document.querySelector('.time');

setInterval(() => {
    const secReal = new Date().getSeconds();
    const minutReal = new Date().getMinutes();
    const timeReal = new Date().getHours();
    second.style.transform = `rotateZ(${secReal * 6}deg)`;
    minutes.style.transform = `rotateZ(${minutReal * 6}deg)`;
    time.style.transform = `rotateZ(${((timeReal % 12) * 30) + minutReal / 2}deg)`;
}, 1000)