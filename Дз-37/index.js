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
    $('.button').click(function (e) {
        e.preventDefault();
        $('.forma').fadeIn();
        $(document).mouseup(function () {
            $('.forma').fadeOut();
        });
    });
});


