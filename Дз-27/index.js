// -------------------Задача № 9-------------------
let One = document.querySelector('.one');
let Two = document.querySelector('.two');
let Three = document.querySelector('.three');
let Prov = document.querySelector('.prov');
Prov.onclick = () => {
    let summa = 0;
    if (One.value == 1){
        summa += 2;
    }
    if (Two.value == 2){
        summa += 2;
    }
    if (Three.value == 3){
        summa += 2;
    }
    alert('Количество набранных очков: ' + summa)
}
// -------------------Задача № 10-------------------
let Day = document.querySelector('.day');
let Month = document.querySelector('.month');
let Year = document.querySelector('.year');
let But = document.querySelector('.but');
let D_out = document.querySelector('.d_out');
let M_out = document.querySelector('.m_out');
let Y_out = document.querySelector('.y_out');
But.onclick = () => {
    if (Month.value == 1 || Month.value == 3 || Month.value == 5 || Month.value == 7 || Month.value == 8 || Month.value == 10 ) {
        if (Day.value == 31){
            D_out.innerHTML = 1;
            M_out.innerHTML = +Month.value + 1;
            Y_out.innerHTML = +Year.value;
        }
        if (Day.value > 31){
            D_out.innerHTML = "Ошибка";

        }
        if (Day.value < 31) {
            D_out.innerHTML = +Day.value + 1;
            M_out.innerHTML = +Month.value;
            Y_out.innerHTML = +Year.value;
        }
    }
    if (Month.value == 12){
        if (Day.value == 31){
            D_out.innerHTML = 1;
            M_out.innerHTML = 1;
            Y_out.innerHTML = +Year.value + 1;
        }
        if (Day.value > 31){
            D_out.innerHTML = "Ошибка";
        }
        if (Day.value < 31){
            D_out.innerHTML = +Day.value + 1;
            M_out.innerHTML = +Month.value;
            Y_out.innerHTML = +Year.value;
        }
    }
    if (Month.value == 4 || Month.value == 6 || Month.value == 9 || Month.value == 11 ){
        if (Day.value == 30){
            D_out.innerHTML = 1;
            M_out.innerHTML = +Month.value + 1;
            Y_out.innerHTML = +Year.value;
        }
        if (Day.value > 30){
            D_out.innerHTML = "Ошибка";
        }
        if (Day.value < 30){
            D_out.innerHTML = +Day.value + 1;
            M_out.innerHTML = +Month.value;
            Y_out.innerHTML = +Year.value;
        }
    }
    if (Month.value == 2){
        if (Year.value % 4 ==0 && Year.value % 100 !=0 || Year.value % 400 ==0){
            if (Day.value == 28) {
                D_out.innerHTML = 29;
                M_out.innerHTML = +Month.value;
                Y_out.innerHTML = +Year.value;
            }
            if (Day.value == 29){
                D_out.innerHTML = 1;
                M_out.innerHTML = +Month.value + 1;
                Y_out.innerHTML = +Year.value;
            }
            if (Day.value > 29){
                D_out.innerHTML = "Ошибка";
            }
            if (Day.value < 29){
                D_out.innerHTML = +Day.value + 1;
                M_out.innerHTML = +Month.value;
                Y_out.innerHTML = +Year.value;
            }
        }
        else{
            if (Day.value == 28){
                D_out.innerHTML = 1
                M_out.innerHTML = +Month.value + 1;
                Y_out.innerHTML = +Year.value;
            }
            if (Day.value > 28){
                D_out.innerHTML = "Ошибка";
            }
            if (Day.value < 28){
                D_out.innerHTML = +Day.value + 1;
                M_out.innerHTML = +Month.value;
                Y_out.innerHTML = +Year.value;
            }
        }
    }
    if (Month.value > 12){
        M_out.innerHTML = "Ошибка";
    }
}