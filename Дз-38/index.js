$(document).ready(function() {

    $('.forma :submit').click(function(e) {
        e.preventDefault(); 
            
            if ($('.tx').val() == "" || $('.tx1').val() == "" || $('.tx2').val() == "" || $('.tx3').val() == "" || $('.tx4').val() == ""){
                alert('Заполните все поля');
            }
            else{
                $('.tx').attr('disabled', 'disabled');
                $('.tx1').attr('disabled', 'disabled');
                $('.tx2').attr('disabled', 'disabled');
                $('.tx3').attr('disabled', 'disabled');
                $('.tx4').attr('disabled', 'disabled');
                alert('форма отправлена');
            }
    });

});
