/*nota: El css con las propiedades esta en el normalize*/
let animado= document.querySelectorAll(".animado");
let paloma= document.querySelector(".ave");

function mostrar(){
	let scrollTop= document.documentElement.scrollTop;
	for (var i = 0; i<animado.length; i++) {
		let alturaAnimada= animado[i].offsetTop;
		if (alturaAnimada - 400 <scrollTop) {
			animado[i].style.opacity=1;
			animado[i].classList.add("arriba");
			if (alturaAnimada - 200 <scrollTop) {
				paloma.classList.add("delado");
			}
		}

	}
}
window.addEventListener('scroll', mostrar);

