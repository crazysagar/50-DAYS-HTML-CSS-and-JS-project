const container = document.querySelector('.container');

// Correct Picsum URL
const PicsumURL = 'https://picsum.photos/';

const rows = 10;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${PicsumURL}${getRandomSize()}`;
    container.appendChild(img);
}

console.log(getRandomSize());

function getRandomSize() {
    return `${getRandomNr()}/${getRandomNr()}`;  // width/height format
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300; // 300–309 random
}
