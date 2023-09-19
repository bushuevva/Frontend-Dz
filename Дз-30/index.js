// -------------------Задача № 1-------------------
let n1 = document.querySelector('.n1');
let n2 = document.querySelector('.n2');
let but1 = document.querySelector('.but1');
let out1 = document.querySelector('.out1');
function one () {
    if (n1.value < n2.value){
        out1.innerHTML = "-1"
    }
    if (n1.value > n2.value){
        out1.innerHTML = "1"
    }
    if (n1.value == n2.value){
        out1.innerHTML = "0"
    }
}
but1.onclick = one;
// -------------------Задача № 3-------------------
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let num3 = document.querySelector('.num3');
let but2 = document.querySelector('.but2');
let out2 = document.querySelector('.out2');

function two () {
    let Num1 = +num1.value;
    let Num2 = +num2.value;
    let Num3 = +num3.value;
    out2.innerHTML = (''+Num1+Num2+Num3);
}
but2.onclick = two;
// -------------------Задача № 5-------------------
let numm = document.querySelector('.numm');
let but3 = document.querySelector('.but3');
let out3 = document.querySelector('.out3');

function five(){

    let summa = 0;
    for (let i = 1; i <= numm.value; i++){
        if (numm.value % i == 0){
            summa +=i;
            if (summa = numm.value){
                out3.innerHTML = 'Число совершенное';
            }
            else{
                out3.innerHTML = 'Число несовершенное';
            }
        }
        else{
            out3.innerHTML = 'Число несовершенное';
        }

    }
}
but3.onclick = five;
// -------------------Задача № 7-------------------
let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let but4 = document.querySelector('.but4');
let out4 = document.querySelector('.out4');
function seven(){
    out4.innerHTML= (hour.value + ':' + min.value + ':' + sec.value);
}
but4.onclick = seven;