const testimonialContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },

  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },

  {
    name: 'Jonathan Núnfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: "He delivered excellent work and even earlier than expected. Very professional attitude. Highly recommended for long-term projects.",
  },

  {
    name: 'Sofia Andersson',
    position: 'Marketing Specialist',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    text: "Amazing experience working with him. The communication was smooth, and he understood exactly what I wanted. Will definitely hire again!",
  },
];

let idx = 1

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)