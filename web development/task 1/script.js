const navbar = document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
	if(window.scrolly>50){
		navbar.classList.add('scrolled');
	}
	else{
		navbar.classList.remove('scrolled');
	}
});