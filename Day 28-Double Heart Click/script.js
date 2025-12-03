const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickCount = 0;

loveMe.addEventListener('dblclick', (e) => {
    createHeart(e);
});

function createHeart(e) {
    const heart = document.createElement('i');
    heart.classList.add('fa-solid', 'fa-heart');

    const xInside = e.offsetX;
    const yInside = e.offsetY;

    heart.style.left = xInside + 'px';
    heart.style.top = yInside + 'px';

    loveMe.appendChild(heart);

    setTimeout(() => heart.remove(), 600);

    clickCount++;
    times.innerText = clickCount;

    console.log("Click at", xInside, yInside);
}
