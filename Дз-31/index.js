let col = document.querySelector('.col');
let but1 = document.querySelector('.but1');
let but2 = document.querySelector('.but2');

let out = document.querySelector('.out');
let out1 = document.querySelector('.out1');
let out2 = document.querySelector('.out2');
let out3 = document.querySelector('.out3');

let card = document.querySelector('.card');
let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');
let card4 = document.querySelector('.card4');

let forma = document.querySelector('.forma');
but1.onclick = () => {
    but1.style.backgroundColor = col.value;
    but2.style.backgroundColor = col.value;
    forma.style.backgroundColor = col.value;
}
but2.onclick = () => {
    out.innerHTML = 'Номер карты: ' + card.value;
    out1.innerHTML = 'Владелец карты: ' + card1.value;
    out2.innerHTML = 'Срок действия карты: ' + card2.value + '  ' + card3.value;
    out3.innerHTML = 'CVV/CVN код: ' + card4.value;
}