// ---------------Задача №1---------------
let Num = document.querySelector('.num');
let Prov = document.querySelector('.prov');
Prov.onclick = () => {
    let Numm = +Num.value;
    if (Numm > 0){
        alert('число положительное');
    }
    else if (Numm < 0){
        alert('число отрицательное');
    }
    else if (Numm==0){
        alert('число равно нулю');
    }
    else{
        alert('Данные некорректны')
    }
}
// ---------------Задача №2---------------
let Age = document.querySelector('.age');
let Prover = document.querySelector('.prover');
Prover.onclick = () => {
    let Agee = +Age.value;
    if (Agee >= 0 && Agee <= 120) {
        alert('Данные корректны');
    }
    else if (Agee > 120) {
        alert('Вы долгожитель!');
    }
    else{
        alert('Данные некорректны');
    }

}
// ---------------Задача №3---------------
let Numb = document.querySelector('.numb');
let Find = document.querySelector('.find');
Find.onclick = () => {
    let a= Math.abs(Numb.value);
    alert('Модуль числа равен: ' + a);
}

// ---------------Задача №4---------------
let Hour = document.querySelector('.hour');
let Min = document.querySelector('.min');
let Sec = document.querySelector('.sec');
let Pr = document.querySelector('.pr');
Pr.onclick = () => {
    let Hourr = +Hour.value;
    let Minn = +Min.value;
    let Secc = +Sec.value;
    if ( Hourr <= 24 && Minn <= 60 && Secc <= 60){
        alert('Данные корректны');
    }
    else{
        alert('Данные некорректны')
    }
}
// ---------------Задача №5---------------
let Num1 = document.querySelector('.num1');
let Num2 = document.querySelector('.num2');
let Oper = document.querySelector('.oper');
let Vi = document.querySelector('.vi');
Vi.onclick = () => {
    let N1 = +Num1.value;
    let N2 = +Num2.value;
    switch(Oper.value){
        case 1 :
            let s = N1+N2
            alert(s);
            break;
        case 2:
            alert(N1 - N2)
            break;
        case 3 :
            alert(N1 * N2);
            break;
        case 4:
            alert(N1 / N2)
            break;
        default:
            alert('Данные некорректны')
    }
}
// ---------------Задача №6---------------
let Planeta = document.querySelector('.planeta');
let Plan = document.querySelector('.plan');
Plan.onclick = () => {
    if (Planeta.value=="Земля" || Planeta.value=="земля"){
        alert('Привет, Землянин!');
    }
    else{
        alert('Привет, инопланетянин!');
    }
}