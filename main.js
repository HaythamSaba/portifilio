// Display List When Clicking On The Bar Icon
let bar = document.querySelector(".header .container .menu"),
links = document.querySelector(".header .container ul"),
secondBar = document.querySelector(".menu span:nth-child(2)")
console.log(secondBar)
bar.addEventListener('click', event =>{
  event.preventDefault()
  links.classList.toggle("show-list") // toggle class to display or hide the list 
  secondBar.classList.toggle("d-none")
})

// Do Gyrosing When Hovering on the img
let imageToTilt = document.querySelector(".header .image")
VanillaTilt.init(imageToTilt, {
	reverse: true,
	max: 20,
	speed: 400,
	reset: true,
	perspective: 500,
	transition: true,
	"max-glare": 0.75,
	"glare-prerender": false,
	gyroscope: true,
	gyroscopeMinAngleX: -45,
	gyroscopeMaxAngleX: 45,
	gyroscopeMinAngleY: -45,
	gyroscopeMaxAngleY: 45
});

// Circular Progress Bar Movement
let skillsSectionReached = false;
let skills = document.querySelector(".skills")
let circularProgress = document.querySelectorAll(".progress"),
		progressValue = document.querySelectorAll(".progress .progress-value");
		
window.onscroll = function() {
	if (window.scrollY >= skills.offsetTop - 50) {
		if(!skillsSectionReached){
			console.log("Section Reached")
			circularProgress.forEach((one) => {
				let start = 0;
				let progress = setInterval(() =>{
					start++;
					if (start == one.dataset.progress){
						clearInterval(progress)
					}
					one.style.background = `conic-gradient(var(--two-main-color) ${start * 3.6}deg ,var(--one-main-color) 0deg)`;
				}
				)
			}, 2000)
		}
		skillsSectionReached = true;
}
}