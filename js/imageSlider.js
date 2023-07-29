//available software
const software = [
    "Template"
];

//variables
const next = document.querySelector('.next'); //next-button
const prev = document.querySelector('.prev'); //previous-button
const animationBtn = document.querySelector('.animationBtn'); //animation on/off button

const imageContainer = document.getElementById('image-container'); //image container
const images = imageContainer.querySelectorAll('img'); //all images
const label = document.getElementById('softwarename'); //software name label

let currentImg = 1; //showed image
let timeout; //how long the current image will be shown

//animation paused / played button
function animationOnOff() {
    animationBtn.classList.toggle('play');
}

//next image
next.addEventListener('click', () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
});

//previous image
prev.addEventListener('click', () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
});

//update image
updateImg();

function updateImg() {
    //endless slider
    if(currentImg > images.length) {
        currentImg = 1;
    } else if(currentImg < 1) {
        currentImg = images.length;
    }

    imageContainer.style.transform = `translateX(-${(currentImg-1) * imageContainer.offsetWidth}px)`; //animation
    label.innerHTML = software[currentImg-1]; //software name label

    timeout = setTimeout(() => { //show every 3 seconds a new image
        if(!animationBtn.classList.contains('play')) {
            currentImg++;
        }
        updateImg();
    }, 3000);
}