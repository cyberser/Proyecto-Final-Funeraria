/*Este codigo es de prueba para ver si puedo hacer aparecer cosas de forma dinámica por medio de scroll-spy y las etiquetas [data-scroll-spy]*/
const d= document;


d.addEventListener("DOMContentLoaded", e=>{
	
		const $sections= d.querySelectorAll("section[data-scroll-spy]");
		const cb=(entries)=>{
			console.log("entries", entries);
			entries.forEach((entry)=>{

//const id= entry.target.getAttribute("id");

		if(entry.isIntersecting){
			d.querySelector('#titulo-sedes').classList.Add(".active");
			}else{
			console.log("MAL");
		}


	});
}
		
	

});
	