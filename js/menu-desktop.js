let ubicacionPrincipal  = window.pageYOffset;
//cada movimiento del scroll equivale a 100, pageYOffset=arri-abaj y pageXOffset=izq-der
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
       
        document.getElementById('prueba').style.top = '0';
        //console.log(Desplazamiento_Actual);
    
    }
    else{
        document.getElementById('prueba').style.top = '-500px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;//1732

}

