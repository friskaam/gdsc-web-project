const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// const homeImg = document.querySelector('.img-container');
// const imgContainer = document.querySelectorAll('.img-container img');

// let counter = 0
// const size = imgContainer[0].clientWidth;
  
// setInterval(() => {
//     console.log(homeImg);
//     homeImg.style.marginLeft = `-${counter}00%`;
//     counter += 1;
//     console.log(counter);
//     if (counter === imgContainer.length) {
//         counter = 0;
//     }
// }, 2000);