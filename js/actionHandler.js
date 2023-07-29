//-- NAVIGATION BAR BUTTON FOR SMALLER DEVICES --
const toggle_button = document.querySelector('.toggle_button'); //navbar button for smaller devices
const content = document.getElementById('content'); //content area of the page

toggle_button.addEventListener('click', function() { //open-menu-button is clicked - show animation
	this.classList.toggle('is-active');

	//checks if navbar opened
	if(toggle_button.classList.value == "toggle_button is-active") {
        content.classList.add("blur");
	} else {
		content.classList.remove("blur");
	}
});

//-- IMAGES CONTROL --
const imgs = document.querySelectorAll('img');
imgs.forEach(img => {
	img.addEventListener("contextmenu", (e) => { e.preventDefault() }); //right click on an image is blocked
});

//-- IMAGE PREVIEW --
const imgPreview = document.getElementById('showImg'); //image preview container
const clickableImgs = document.querySelectorAll('.clickable'); //all clickable images

clickableImgs.forEach(img => {
	img.onclick = function() { //open image preview container
		imgPreview.style.transition = '0.6s';
		imgPreview.style.opacity = '1';
		imgPreview.src = img.src; //image url to show the clicked image
		console.log(imgPreview.src)
		imgPreview.style.visibility = 'visible';

		content.classList.add('blur');
	};
});

if(imgPreview) {
	imgPreview.onclick = function() { //close image preview container
		imgPreview.style.transition = '0.6s';
		imgPreview.style.opacity = '0';
		imgPreview.style.visibility = 'hidden';

		content.classList.remove('blur');
	};
}