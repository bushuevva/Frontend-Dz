let koord = [];
let x1 = document.querySelector('.x1');
let y1 = document.querySelector('.y1');
let x2 = document.querySelector('.x2');
let y2 = document.querySelector('.y2');

// -----------------Задача № 1-----------------
let but1 = document.querySelector('.but1');
let out1 = document.querySelector('.out1');
but1.onclick = () => {
    koord[0] = +x1.value;
    koord[1] = +y1.value;
    koord[2] = +x2.value;
    koord[3] = +y2.value;
    // console.log(koord);
    // x1 = koord[0];
    // y1 = koord[1];
    // x2 = koord[2];
    // y2 = koord[3];
    out1.innerHTML = 'x1: ' + koord[0] + ' y1: ' + koord[1] + ' x2: ' + koord[2] + ' y2: ' + koord[3];
}
// -----------------Задача № 2-----------------
let but2 = document.querySelector('.but2');
let out2 = document.querySelector('.out2');
but2.onclick = () => {
    let wid = Math.abs(koord[2] - koord[0]);
    out2.innerHTML = 'Ширина прямоугольника: ' + wid;
}
// -----------------Задача № 3-----------------
let but3 = document.querySelector('.but3');
let out3 = document.querySelector('.out3');
let new_wid = document.querySelector('.new_wid');
let wid_raz = document.querySelector('.wid_raz');
but3.onclick = () => {
    if (wid_raz.value == 'увеличить' || wid_raz.value == 'Увеличить' ){
        let wid = Math.abs(koord[2] - koord[0]);
        let New_wid = +wid + +new_wid.value;
        out3.innerHTML = 'Новая ширина прямоугольника: ' + New_wid;
    }
    else if (wid_raz.value == 'уменьшить' || wid_raz.value == 'Уменьшить' ){
        let wid = Math.abs(koord[2] - koord[0]);
        let New_wid = +wid - +new_wid.value;
        out3.innerHTML = 'Новая ширина прямоугольника: ' + New_wid;
    }
}
// -----------------Задача № 4-----------------
let but4 = document.querySelector('.but4');
let out4 = document.querySelector('.out4');
let new_hei = document.querySelector('.new_hei');
let hei_raz = document.querySelector('.hei_raz');
but4.onclick = () => {
    if (hei_raz.value == 'увеличить' || hei_raz.value == 'Увеличить' ){
        let hei = Math.abs(koord[3] - koord[1]);
        let New_hei = +hei + +new_hei.value;
        out4.innerHTML = 'Новая высота прямоугольника: ' + New_hei;
    }
    else if (hei_raz.value == 'уменьшить' || hei_raz.value == 'Уменьшить'){
        let hei = Math.abs(koord[3] - koord[1]);
        let New_hei = +hei - +new_hei.value;
        out4.innerHTML = 'Новая высота прямоугольника: ' + New_hei;
    } 
}
// -----------------Задача № 5-----------------
let but5 = document.querySelector('.but5');
let out5 = document.querySelector('.out5');
let new_x = document.querySelector('.new_x');
let x_napr = document.querySelector('.x_napr');
but5.onclick = () => {
    x1 = koord[0];
    y1 = koord[1];
    x2 = koord[2];
    y2 = koord[3];

    if (x_napr.value == 'вправо' || x_napr.value == 'Вправо'){
        let new_x1 = +x1 + +new_x.value;
        let new_x2 = +x2 + +new_x.value;
        out5.innerHTML = 'Новые координаты прямоугольника: ' + ' x1: ' + new_x1 + ' y1: ' + y1 + ' x2: ' + new_x2 + ' y2: '+ y2;
    }
    else if (x_napr.value == 'влево' || x_napr.value == 'Влево'){
        let new_x1 = +x1 - +new_x.value;
        let new_x2 = +x2 - +new_x.value;
        out5.innerHTML = 'Новые координаты прямоугольника: ' + ' x1: ' + new_x1 + ' y1: ' + y1 + ' x2: ' + new_x2 + ' y2: '+ y2;
    }
}
// -----------------Задача № 6-----------------
let but6 = document.querySelector('.but6');
let out6 = document.querySelector('.out6');
let t_x = document.querySelector('.t_x');
let t_y = document.querySelector('.t_y');
but6.onclick = () => {
    x1 = koord[0];
    y1 = koord[1];
    x2 = koord[2];
    y2 = koord[3];
    if ( +t_x.value > x1 && +t_x.value < x2 && +t_y.value > y1 && +t_y.value < y2){
        out6.innerHTML = 'Точка находится внутри прямоугольника'
    }
    else{
        out6.innerHTML = 'Точка находится за пределами прямоугольника'
    }
}