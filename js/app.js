document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is loaded")
    
    //submenu
    var list = document.querySelector(".menu > li");
    var submenu = document.querySelector('.submenu');
    
    list.addEventListener("mouseover", function() { 
        submenu.style.display = "block";
    });

    list.addEventListener("mouseout", function() { 
        submenu.style.display = "none";
    });
    
    
    //pictures in section
    var boxLeft = document.querySelector(".box.left");
    var boxCenter = document.querySelector(".box.center");
    var description = document.querySelector(".box.left .transparentBlock");
    var description1 = document.querySelector(".box.center .transparentBlock");
   
    boxLeft.addEventListener("mouseover", function() {
    description.style.display = "none";
    });     
    boxLeft.addEventListener("mouseout", function() {
    description.style.display = "block";
    });
     boxCenter.addEventListener("mouseover", function() {
     description1.style.display = "none";
    }); 
     boxCenter.addEventListener("mouseout", function() {
     description1.style.display = "block";   
    });  
    
    
   //slider
    var next = document.querySelector("#arrowRight");
    var prev = document.querySelector("#arrowLeft");
    var img = document.querySelectorAll(".chairs li");
    var index = 0;
    
    img[index].classList.add("visible");
    
    
    next.addEventListener("click", function(){
        img[index].classList.remove("visible");
        index++;
        if(index > img.length-1) {
            index = 0; 
        }
        
        img[index].classList.add("visible");
        
    });
    
    prev.addEventListener("click", function(){
        img[index].classList.remove("visible");
        index--;
        if(index < 0) {
            index = img.length-1; 
        }
        
        img[index].classList.add("visible");

});
});
