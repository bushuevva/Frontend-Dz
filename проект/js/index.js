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
            alert('Заполните поля формы');
        }
    
        $('.block2 input').each(function() {
            if($(this).is(':checked')){
                $('.block2 input').each(function () {
                    $(this).attr('disabled', 'disabled');
                    flag = true;
                })
            }
        });
        
        if (!flag){
            alert('Выберете способ связи');
        }
    

    });


});