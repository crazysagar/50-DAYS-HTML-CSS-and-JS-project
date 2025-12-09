const container =document.getElementById('container');
// Removed the extra apostrophe here V           and here V
const colors = ['#f51010ff', '#05f449ff', '#0813edff', '#a61616ff', '#f77300ff'];

const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
};

function removeColor(element) {
    element.style.background = '#1d1d1d'
     element.style.boxShadow = '0 0 2px #000'
};

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow =  `0 0 2px ${color}, 0 0 10px ${color}`
    
};

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
};
