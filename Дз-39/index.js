$(document).ready(function () {

    $('.small a').mouseover(function (e) { 
        e.preventDefault();

        if ($('.big img').attr('src') != $(this).attr('href')) {
            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }

    });
// -------------модальное окно 1-------------
    $('.button').click(function (e) {
        e.preventDefault();
        $('.forma').fadeIn();
    });

    $('.close-mdl1').click(function (e) {
        e.preventDefault();
        $('.forma').fadeOut();
    });
// -------------модальное окно 2-------------
    $('.button2').click(function () {
        alert('Спасибо за заказ! Наш менеджер свяжется с вами в ближайшее время для уточнения деталей')
    })
    $('.mdl2').click(function (e) {
        e.preventDefault();
        $('.modal2').fadeIn();
    });
    $('.close-mdl2').click(function (e) {
        e.preventDefault();
        $('.modal2').fadeOut();
    });
// -------------------меню-------------------
    let menu = true;

    $('.menu img').click(function (){
        if (menu){
            $('nav .he2, .he3').show(500);
        }else{
            $('nav .he2, .he3').hide(500);
        }
        menu = !menu;
    });

});