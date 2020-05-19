





var imgCollectionTop1 = document.querySelector('.img-collection-top-1 img');
var imgCollectionTop2 = document.querySelector('.img-collection-top-2 img');
var imgCollectionbottom1 = document.querySelector('.img-collection-bottom-1 img');
var imgCollectionbottom2 = document.querySelector('.img-collection-bottom-2 img');


var containCollectionTop1 = document.querySelector('.img-collection-top-1');
var containCollectionTop2 = document.querySelector('.img-collection-top-2');
var containCollectionbottom1 = document.querySelector('.img-collection-bottom-1');
var containCollectionbottom2 = document.querySelector('.img-collection-bottom-2');

// imgCollectionTop1

imgCollectionTop1.addEventListener('mouseover', function(){

    imgCollectionTop2.classList.toggle("img-effect");
    imgCollectionbottom1.classList.toggle("img-effect");
    imgCollectionbottom2.classList.toggle("img-effect");

    containCollectionTop2.classList.toggle("contain-effect")
    containCollectionbottom1.classList.toggle("contain-effect")
    containCollectionbottom2.classList.toggle("contain-effect")
  
});

imgCollectionTop1.addEventListener('mouseleave', function(){

    imgCollectionTop2.classList.toggle("img-effect");
    imgCollectionbottom1.classList.toggle("img-effect");
    imgCollectionbottom2.classList.toggle("img-effect");

    
    containCollectionTop2.classList.toggle("contain-effect")
    containCollectionbottom1.classList.toggle("contain-effect")
    containCollectionbottom2.classList.toggle("contain-effect")
  
});


// imgCollectionTop2


imgCollectionTop2.addEventListener('mouseover', function(){

    imgCollectionTop1.classList.toggle("img-effect");
    imgCollectionbottom1.classList.toggle("img-effect");
    imgCollectionbottom2.classList.toggle("img-effect");

    containCollectionTop1.classList.toggle("contain-effect")
    containCollectionbottom1.classList.toggle("contain-effect")
    containCollectionbottom2.classList.toggle("contain-effect")
  
});

imgCollectionTop2.addEventListener('mouseleave', function(){

    imgCollectionTop1.classList.toggle("img-effect");
    imgCollectionbottom1.classList.toggle("img-effect");
    imgCollectionbottom2.classList.toggle("img-effect");

    containCollectionTop1.classList.toggle("contain-effect")
    containCollectionbottom1.classList.toggle("contain-effect")
    containCollectionbottom2.classList.toggle("contain-effect")
  
});


// imgCollectionTop2




imgCollectionbottom1.addEventListener('mouseover', function(){

    imgCollectionTop1.classList.toggle("img-effect");
    imgCollectionTop2.classList.toggle("img-effect");
    imgCollectionbottom2.classList.toggle("img-effect");

    containCollectionTop1.classList.toggle("contain-effect")
    containCollectionTop2.classList.toggle("contain-effect")
    containCollectionbottom2.classList.toggle("contain-effect")
  
});

imgCollectionbottom1.addEventListener('mouseleave', function(){

    imgCollectionTop1.classList.toggle("img-effect");
    imgCollectionTop2.classList.toggle("img-effect");
    imgCollectionbottom2.classList.toggle("img-effect");

    containCollectionTop1.classList.toggle("contain-effect")
    containCollectionTop2.classList.toggle("contain-effect")
    containCollectionbottom2.classList.toggle("contain-effect")

  
});


imgCollectionbottom2.addEventListener('mouseover', function(){

    imgCollectionTop1.classList.toggle("img-effect");
    imgCollectionTop2.classList.toggle("img-effect");
    imgCollectionbottom1.classList.toggle("img-effect");

    containCollectionTop1.classList.toggle("contain-effect")
    containCollectionTop2.classList.toggle("contain-effect")
    containCollectionbottom1.classList.toggle("contain-effect")
  
});

imgCollectionbottom2.addEventListener('mouseleave', function(){

    imgCollectionTop1.classList.toggle("img-effect");
    imgCollectionTop2.classList.toggle("img-effect");
    imgCollectionbottom1.classList.toggle("img-effect");

    
    containCollectionTop1.classList.toggle("contain-effect")
    containCollectionTop2.classList.toggle("contain-effect")
    containCollectionbottom1.classList.toggle("contain-effect")

  
});
