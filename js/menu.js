
const menu= document.querySelector('.panel-btn');
const touch= document.querySelector('#menu a');
menu.addEventListener("click", function(e){
	document.getElementById("menu").classList.toggle('active');
	e.preventDefault();
touch.addEventListener("click", function(){
	document.getElementById("menu").classList.remove('active');
})

})