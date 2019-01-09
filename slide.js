let sliderImages = document.querySelectorAll('.slide');
let	arrowLeft = document.querySelector('#arrowLeft');
let	arrowRight = document.querySelector('#arrowRight');
let	current = 0;
let time = 9000;

//Set Images
function setImage(){
	for(let i = 0; i < sliderImages.length; i++){
		document.querySelector('.slide'+(i+1)).style.backgroundImage = "url('Graphics/"+(i+1)+".jpg')";
	}
}

//Clear all images
function reset(){
	for(let i = 0; i < sliderImages.length; i++){
		sliderImages[i].style.display = 'none';
	}
}

//Init slider
function startSlide(){
	reset();
	sliderImages[0].style.display = 'block';
	autoNext();
}

//show prev
function slideLeft(){
	reset();
	sliderImages[current - 1].style.display = 'block';
	current--;
}

//show next
function slideRight(){
	reset();
	sliderImages[current + 1].style.display = 'block';
	current++;
}

//Left arrow click
arrowLeft.addEventListener('click', function(){
	if(current === 0){
		current = sliderImages.length;
	}
	slideLeft();
})

//Right arrow click
arrowRight.addEventListener('click', function(){
	if(current === sliderImages.length - 1){
		current = -1;
	}
	slideRight();
})

//Auto next
function autoNext(){
	if(current === sliderImages.length - 1){
		current = -1;
	}
	slideRight();
	setTimeout("autoNext()", time)
}

//set rightArrow to position
arrowRight.style.left = (document.querySelector('#slider').offsetWidth - 63)+'px';

setImage();
startSlide();