
let animado= document.querySelectorAll(".animado");
let paloma= document.querySelector(".delado");

function mostrar(){
	let scrollTop= document.documentElement.scrollTop;
	for (var i = 0; i<animado.length; i++) {
		let alturaAnimada= animado[i].offsetTop;
		if (alturaAnimada - 400 <scrollTop) {
			animado[i].style.opacity=1;
			// animado[paloma].classList.Add("delado");
			paloma.style.opacity=1;
			// if (alturaAnimada -) {
			// 	paloma.style.opacity=1;
			// }
		}
	}
}
window.addEventListener('scroll', mostrar);

// function mostrarPaloma(){
// 		let scrollTop2= document.documentElement.scrollTop;
// 	for (var i = 0; i<paloma; i++) {
// 		let alturaAnimada2= paloma.offsetTop;
// 		if (alturaAnimada2 - 500 <scrollTop2) {
// 			paloma.style.opacity=1;
// 		}
// 	}
// }
// window.addEventListener('scroll', mostrarPaloma);
