// ----------------Задача 1----------------
let Numb = document.querySelector('.number');
let But = document.querySelector('.stepen');
But.onclick = () => {
    let a = +Numb.value;
    alert('Число ' + a + ' во второй степени равно: ' + a**2);
}
// ----------------Задача 2----------------
let Num1 = document.querySelector('.num1');
let Num2 = document.querySelector('.num2');
let Sredn = document.querySelector('.sredn');
Sredn.onclick = () => {
    let b = +Num1.value;
    let c = +Num2.value;
    alert('Среднее арифметическое чисел ' + b + ' и '+ c + ' равно: ' + (b+c)/2);
}
// ----------------Задача 3----------------
let Dlina = document.querySelector('.dlina');
let Pl = document.querySelector('.pl');
Pl.onclick = () => {
    let d = +Dlina.value;
    alert('Площадь квадрата равна: ' + d**2)
}
// ----------------Задача 4----------------
let Km = document.querySelector('.km');
let Konv = document.querySelector('.konv');
const mili = 0.621371;
Konv.onclick = () => {
    let e = +Km.value;
    alert(e + ' км равно: ' + e*mili + ' миль')
}
// ----------------Задача 6----------------
let Num_a = document.querySelector('.a');
let Num_b = document.querySelector('.b');
let But_x = document.querySelector('.x');
But_x.onclick = () => {
    let f = +Num_a.value;
    let g = +Num_b.value;
    alert('X равен: ' + -g/f)
}
// ----------------Задача 7----------------
let Hour = document.querySelector('.hour');
let Min = document.querySelector('.min');
let Time = document.querySelector('.time');
const hourr = 23;
const minn = 60;
Time.onclick = () => {
    let h = +Hour.value;
    let i = +Min.value;
    alert('До начала следующего дня осталось: ' + (hourr-h) + ' час(-ов) и ' + (minn-i) + ' минут(-а)');
}
// ----------------Задача 10----------------
let Sal = document.querySelector('.sal');
let Salary = document.querySelector('.salary');
Salary.onclick = () => {
    let j = +Sal.value;
    let k = 250 + j/100*10;
    alert('Ваша зарплата составляет: $' + k);
}