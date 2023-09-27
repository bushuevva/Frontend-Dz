$(function(){
    $('.Text').mouseover(function(){ 
        $('.Text').animate({
            'font-size': '24pt',
        }, 2000);
    }).mouseout(function(){ 
        $('.Text').animate({
            'font-size': '12pt',
        }, 2000);
    })
});

$('.but1').click(function start (){
    $('.img1')
        .animate({
            opacity: 0.7,
            marginLeft: '50%'
        },1000) 
        .animate({
            opacity: 1,
            marginLeft: '0%'
        },1000, start)
});
