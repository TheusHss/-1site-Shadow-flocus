function carousel(){
    $('.proj ul').slick({
        dots: false,
        infinite: true,
        arrows: true,
        // autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    })
}

// function move() {
//     $('.w3-light-grey').scroll(function(){

//         var elem = document.getElementById("myBar");   
//         var width = 20;
//         var id = setInterval(frame, 10);
//         function frame() {
//             if (width >= 100) {
//                 clearInterval(id);
//             } else {
//                 width++; 
//                 elem.style.width = width + '%'; 
//                 elem.innerHTML = width * 1  + '%';
//             }
//         }
//     });
// }

function scrollTop() {
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.scrolTop').fadeIn(200)
        } else{
            $('.scrolTop').fadeOut(200)
        }
    });
    
    $('.scrolTop').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
}

function openHeader() {
    $('#openHeader').on('click', function(){
        $('#mobNav').toggleClass('is--active')
    })
}
function scrollSob(){
    $("#navSobreScroll").on('click',function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#sobreScroll").offset().top
        }, 1000);
    });
}
function scrollExp(){
    $("#navExpScroll").on('click',function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#expScroll").offset().top
        }, 1000);
        console.log('iha');
        
    });
}
function scrollMain(){
    $("#navMainScroll").on('click',function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#mainScroll").offset().top
        }, 1000);
    });
}
function scrollProj(){
    $("#navProjScroll").on('click',function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#projScroll").offset().top
        }, 1000);
    });
}
function scrollCtto(){
    $("#navCttoScroll").on('click',function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#cttoScroll").offset().top
        }, 1000);
    });
}


//scrollMob
function scrollSobMob(){
    $("#navSobreScrollMob").on('click',function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#sobreScroll").offset().top
        }, 1000);
        $('#mobNav').removeClass('is--active')
    });
}
function scrollExpMob(){
    $("#navExpScrollMob").on('click',function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#expScroll").offset().top
        }, 1000);
        $('#mobNav').removeClass('is--active')
    });
}
function scrollMainMob(){
    $("#navMainScrollMob").on('click',function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#mainScroll").offset().top
        }, 1000);
        $('#mobNav').removeClass('is--active')
    });
}
function scrollProjMob(){
    $("#navProjScrollMob").on('click',function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#projScroll").offset().top
        }, 1000);
        $('#mobNav').removeClass('is--active')
    });
}
function scrollCttoMob(){
    $("#navCttoScrollMob").on('click',function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#cttoScroll").offset().top
        }, 1000);
        $('#mobNav').removeClass('is--active')
    });
}


function writer(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 95 * i);
    });
}
const titulo = document.querySelector('.main-subtitle');



$(document).ready( function(){
    scrollTop();
    writer(titulo);
    carousel();
    // move();
    openHeader();
    scrollSob();
    scrollExp();
    scrollMain();
    scrollProj();
    scrollCtto();
    scrollSobMob();
    scrollExpMob();
    scrollMainMob();
    scrollProjMob();
    scrollCttoMob();
    
});