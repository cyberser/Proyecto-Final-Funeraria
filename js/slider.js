window.addEventListener('load', (event) => {
var l=0;
const d= document;

    
    const $siguiente=d.querySelector(".next"),
    $anterior=d.querySelector(".prev"),
    $slides=d.querySelectorAll(".slider-slide");

    let i=0;
    
    d.addEventListener("click", (e)=>{
        if (e.target===$anterior){
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;

            if (i<0) {
                i=$slides.length-1;
            }

            $slides[i].classList.add("active");

        }


        if (e.target===$siguiente){
           
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;

            if (i>=$slides.length) {
                i=0;
            }

    $slides[i].classList.add("active");

        }
        
    });
   
setInterval(function(){
   const $slides2=d.querySelectorAll(".slider-slide");
var j= $slides2.length;

 for(var i=0; i<j; i++){
 $slides2[i].classList.remove("active");
 }
if (l<j) {
 $slides2[l].classList.add("active");
    
}else{
l=0;
    $slides2[l].classList.add("active");

}
l++;
console.log(j);
console.log(l);
},7000);


});