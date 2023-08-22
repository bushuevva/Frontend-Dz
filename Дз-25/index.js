// ----------------Задача 1----------------
let Age = document.querySelector('.age');
let Age_out = document.querySelector('.age_out');
let Opr = document.querySelector('.opr');
Opr.onclick = () => {
    if (Age.value <= 12){
        Age_out.innerHTML = "Вы ребенок";
    }
    if (Age.value > 12 && Age.value <= 18){
        Age_out.innerHTML = "Вы подросток";
    }
    if (Age.value > 18 && Age.value <= 60){
        Age_out.innerHTML = "Вы взрослый";
    }
    if (Age.value > 60) {
        Age_out.innerHTML = "Вы пенсионер";
    }
}
// ----------------Задача 2----------------
let Num = document.querySelector('.num');
let Ok = document.querySelector('.ok');
let Num_out = document.querySelector('.num_out');
Ok.onclick = () => {
    if (Num.value == 0) {
        Num_out.innerHTML = ")";
    }
    if (Num.value == 1) {
        Num_out.innerHTML = "!";
    }
    if (Num.value == 2) {
        Num_out.innerHTML = "@";
    }
    if (Num.value == 3) {
        Num_out.innerHTML = "#";
    }
    if (Num.value == 4) {
        Num_out.innerHTML = "$";
    }
    if (Num.value == 5) {
        Num_out.innerHTML = "%";
    }
    if (Num.value == 6) {
        Num_out.innerHTML = "^";
    }
    if (Num.value == 7) {
        Num_out.innerHTML = "&";
    }
    if (Num.value == 8) {
        Num_out.innerHTML = "*";
    }
    if (Num.value == 9) {
        Num_out.innerHTML = "(";
    }
}
// ----------------Задача 4----------------
let Year = document.querySelector('.year');
let Prov = document.querySelector('.prov');
let Year_out = document.querySelector('.year_out');
Prov.onclick = () => {
    if (Year.value % 4==0 && Year.value % 100 !=0 || Year.value % 400==0) {
        Year_out.innerHTML = 'Год високосный';
    }
    else {
        Year_out.innerHTML = 'Год не високосный';
    }
}
// ----------------Задача 7----------------
let Mon = document.querySelector('.mon');
let Vi = document.querySelector('.vi');
let Mon_out = document.querySelector('.mon_out');
Vi.onclick = () => {
    if (Mon.value < 200){
        Mon_out.innerHTML = 'Сумма покупки составляет: ' + Mon.value + ' руб.';
    }
    if (Mon.value >= 200 && Mon.value <= 300){
        let disc = Mon.value / 100 * 97;
        Mon_out.innerHTML = 'Скидка 3%, сумма покупки составляет: ' + disc + ' руб.';
    }
    if (Mon.value > 300 && Mon.value <= 500){
        let disc = Mon.value / 100 * 95;
        Mon_out.innerHTML = 'Скидка 5%, сумма покупки составляет: ' + disc + ' руб.';
    }
    else{
        let disc = Mon.value / 100 * 93;
        Mon_out.innerHTML = 'Скидка 7%, сумма покупки составляет: ' + disc + ' руб.';
    }
}