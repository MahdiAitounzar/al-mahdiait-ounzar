var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

var slidesCount = sliderImages.length;

var currentSlide = 1;

var slideNumberElement = document.getElementById('');
var next = document.querySelector('.fa-angle-right');
var prev = document.querySelector('.fa-angle-left');

/*
var pagination = document.createElement('.ul');
//set id on created elkement 
pagination.setAttribute('id','pagination-ul');
for(var i=1; i<= slidesCount; i++){
     var paginationItems = document.createElement('li');

     paginationItems.setAttribute('data-index', i);

     paginationItems.appendChild(document.createTextNode(i));

     pagination.appendChild(paginationItems);
}
*/
var bullet = document.getElementById('bl');

function nextSlide(){
     console.log('next');
}

function prevSlide(){
     console.log('prev');
}
next.onclick = nextSlide;
prev.onclick = prevSlide;

function theChecker(){
     sliderImages[currentSlide - 1].classList.add('active');
     bullet.children[currentSlide - 1].classList.add('active');
}

const btnScroll = document.querySelector('#btnsScroll');

btnScroll.addEventListener("click", function(){
    // window.scrollTo(0, 0);

    window.scrollTo({
         top : 0,
         left: 0,
         behavior : "smooth"
    });
    //$("html, body").animate({scrollTop : 0}, slow)
});