
const botonMenu= document.querySelector('.panel-btn'),
presionar= document.querySelector('#menu, a');

botonMenu.addEventListener("click", function(e){
	document.getElementById("menu").classList.toggle('active');

e.preventDefault();



presionar.addEventListener("click", function(){
	document.getElementById("menu").classList.remove('active');
})

})

