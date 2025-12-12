const ratings = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
const ratingsContainer = document.querySelector('.ratings-container');

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {

        removeActive()
         e.target.parentNode.classList.contains('active')

         selectedRating = e.target.nextElementSibling.innerHTML
    };

});

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML  = `
    <i class="fa-solid fa-heart"></i>
    <strong>Thankyou!</strong>
    <br/>
    <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})


function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    };
};