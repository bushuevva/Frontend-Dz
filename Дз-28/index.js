// --------------------Задача № 1--------------------
let resh = document.querySelector('.resh');
let but1 = document.querySelector('.but1');
let out = document.querySelector('.out');

but1.onclick = () => {
    let s = '';
    for (let i = 1; i <= resh.value ; i++){
        s = s + '#';
        out.innerHTML = s;
    }
}
// --------------------Задача № 2--------------------
let num = document.querySelector('.num');
let but2 = document.querySelector('.but2');
let out2 = document.querySelector('.out2');
but2.onclick = () => {
    for (let i = +num.value; i>=0; i--){
        console.log(i);
        out2.innerHTML = 'Последовательность выведена в консоль';
    }
}
// --------------------Задача № 3--------------------

let num2 = document.querySelector('.num2');
let but3 = document.querySelector('.but3');
but3.onclick = () => {
    do{
        if (+num2.value == 6){
            alert('Ответ верный');
        }
        else{
            alert('Ответ неправильный, попробуйте снова');
        }
        break
    } while (num2.value != 6)
}
// --------------------Задача № 4--------------------
let d1 = document.querySelector('.d1');
let d2 = document.querySelector('.d2');
let but4 = document.querySelector('.but4');
let out4 = document.querySelector('.out4');
but4.onclick = () => {
    for (let i = 0; i <= d2.value ; i += 4){
        console.log(i);
        out4.innerHTML = 'Последовательность выведена в консоль';
    }
}
