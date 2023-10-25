$(document).ready(function (){

    //навигация
    let links_show = true;
    $('.menu img').click(function () {
        if (links_show){
            $('.head_one .links').show(600);
        }
        else{
            $('.head_one .links').hide(600);
        }
        links_show = !links_show;

    })

    //модальное окно 1
    $('.se1 button').click(function () {
        $('.overlay').show(600);
    })
    $('.close-popup img').click(function () {
        $('.overlay').hide(500);
    })

    //модальное окно 2
    $('.buy').click(function () {
        $('.shop').show(600);
    })
    $('.close-popup-shop img').click(function () {
        $('.shop').hide(500);
        $('.overlay').hide(500);
    })


    $(function(){
        //отправка формы(в модальном окне), проверка заполнения полей

        $('.buy-shop').click(function() {
            // e.preventDefault(); 
            $('.txt').each(function() {
                if ($(this).val() == ''){
                    $(this).css({
                        'border' : '2px solid red',
                    })
                }
                else if ($('.txt').val() != ''){
                    $('.txt').attr('disabled', 'disabled');
                }
            });
                
                
            

            });
    })
    
// ---------------проверка заполнения полей формы---------------
    $('.Send').click(function(e){
        e.preventDefault(); 
        if ($('.name1').val() != '' && $('.email1').val() != '' && $('.phone1').val() != '' && $('textarea').val() != '') {
            alert('Поля формы успешно заполнены')
            $('.name1').attr('disabled', 'disabled');
            $('.email1').attr('disabled', 'disabled');
            $('.phone1').attr('disabled', 'disabled');
            $('textarea').attr('disabled', 'disabled');
        }
        else{
            alert('Заполните все поля формы');
        }
    
        $('.block2 input').each(function() {

            let flag = true;
            if (flag){
                if ($(this).is(':checked')){
                    $('.block2 input').each(function () {
                        $(this).attr('disabled', 'disabled');
                    })
                }
            }
            else{
                alert('Выберете способ связи');
            }

            flag = !flag;
        });

        $('.opt').each(function () {
            let flag = true; 
            if(flag) {
                if ($('.opt1').is(':checked')) {
                    $('.opt').each(function() {
                        $(this).attr('disabled', 'disabled');
                    })
                }
                if ($('.opt2').is(':checked')) {
                    $('.opt').each(function() {
                        $(this).attr('disabled', 'disabled');
                    })
                }
                if ($('.opt3').is(':checked')) {
                    $('.opt').each(function() {
                        $(this).attr('disabled', 'disabled');
                    })
                }
                if ($('.opt4').is(':checked')) {
                    $('.opt').each(function() {
                        $(this).attr('disabled', 'disabled');
                    })
                }
                if ($('.opt5').is(':checked')) {
                    $('.opt').each(function() {
                        $(this).attr('disabled', 'disabled');
                    })
                }
                if ($('.opt6').is(':checked')) {
                    $('.opt').each(function() {
                        $(this).attr('disabled', 'disabled');
                    })
                }
            }
            else{
                alert('Выберете тему');
            }
            flag = !flag;
        });
        
    });

    // -----------настройка галереи-----------
    $('.point a').click(function (e) {

        e.preventDefault();

        if ($('.gal_big img').attr('src') != $(this).attr('href')){
            $('.gal_big img').hide().attr('src' , $(this).attr('href')).fadeIn().css({
                width: '100%',
                height: '100%',
            })
        }
    });
    $('.point a img').mouseup(function() {
        $(this).fadeTo(2000, 0.6);
    });

    $(document).mouseup(function () {
        $('.point a img').fadeTo (0, 1);
    });

    // ----------------------
    $('.point1 a').click(function (e) {

        e.preventDefault();

        if ($('.gal_big1 img').attr('src') != $(this).attr('href')){
            $('.gal_big1 img').hide().attr('src' , $(this).attr('href')).fadeIn().css({
                width: '100%',
                height: '100%',
            })
        }
    });
    $('.point1 a img').mouseup(function() {
        $(this).fadeTo(2000, 0.6);
    });

    $(document).mouseup(function () {
        $('.point1 a img').fadeTo (0, 1);
    });
    // ----------------------
    $('.point2 a').click(function (e) {

        e.preventDefault();

        if ($('.gal_big2 img').attr('src') != $(this).attr('href')){
            $('.gal_big2 img').hide().attr('src' , $(this).attr('href')).fadeIn().css({
                width: '100%',
                height: '100%',
            })
        }
    });
    $('.point2 a img').mouseup(function() {
        $(this).fadeTo(2000, 0.6);
    });

    $(document).mouseup(function () {
        $('.point2 a img').fadeTo (0, 1);
    });
});