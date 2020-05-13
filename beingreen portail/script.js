var reduiresection = document.querySelector('.reduiresection');
window.addEventListener('scroll',function(){

    var value = window.scrollY/0.5 ;
   reduiresection.style.clipPath = "circle("+ value +"px at top)"
 
   
});



var section1 = document.getElementById("section");
window.addEventListener("scroll", function(){
section1.style.opacity = 1 -  +window.pageYOffset/500+ '';
value = window.pageYOffset;
section1.style.transform = "translateY( "+value+ "px)"


});
