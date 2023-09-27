$(document).ready(function(){
    let news = document.querySelectorAll('.news');
    
    init();

    news.forEach(function (element) {
        element.onclick = showNews;
    });

    function init() {
        let newBody = document.querySelectorAll('.new-body');
        for (let i = 1; i < newBody.length; i++) {
            newBody[i].style.display = 'none';
        }
    }

    function showNews () {
        let data = this.getAttribute('data');
        let newBody = document.querySelectorAll('.new-body');
        for (let i = 0; i < newBody.length; i++){
            newBody[i].style.display = 'none';
        }

        document.querySelector(`.new-body[data="${data}"]`).style.display = 'block';
    }

    $('.lenta div').mouseover(function () {

        $(this).css(
            {
                'font-weight': 'bold',
            }
        )

    });
    $('.lenta div').mouseout(function () {

        $(this).css(
            {
                'font-weight': 'normal',
            }
        )

    });



});