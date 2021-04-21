
const botonMenu= document.querySelector('.panel-btn'),
presionar= document.querySelector('#menu, a');

botonMenu.addEventListener("click", function(e){
	document.getElementById("menu").classList.add('active');
	
e.preventDefault();

presionar.addEventListener("click", function(){
	document.getElementById("menu").classList.remove('active');
})

})

/*si baja pero solo con inicio y no me deja seleccionar todos los menu a ni con querySelectorAll, el css .active esta en header,css linea 104 */