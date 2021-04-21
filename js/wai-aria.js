  function press(e){
    console.log(e.target.getAttribute("aria-pressed"));
    if (e.target.getAttribute("aria-pressed")=="false"){
      e.target.setAttribute("aria-pressed", "true");
    }else if(e.target.getAttribute("aria-pressed")=="true"){
      e.target.setAttribute("aria-pressed", "false");
    }
  } 
