import { debounce } from "./debounce.js";

const section = document.querySelectorAll('[data-anime]')

function animeScroll(){
	const topoPagina = window.pageYOffset + (window.innerHeight*4)/5;

	section.forEach(function(elemento){
		if(topoPagina > elemento.offsetTop){
			elemento.classList.add('anime');
		}else{
			elemento.classList.remove('anime');
		}
	})
}

window.addEventListener('scroll', debounce(animeScroll));