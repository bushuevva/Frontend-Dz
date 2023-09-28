// ---------------------Задача № 1---------------------
let spisok = [
    {name: 'Молоко', kolvo: '2 литра', kuplen: 'Нет'},
    {name: 'Хлеб', kolvo: '2 шт', kuplen: 'Да'},
    {name: 'Сыр', kolvo: '1 кг', kuplen: 'Да'},
    {name: 'Творог', kolvo: '3 шт', kuplen: 'Нет'},
    {name: 'Йогурт', kolvo: '4 шт', kuplen: 'Нет'},
    {name: 'Масло', kolvo: '1 л', kuplen: 'Да'},
];
let out = document.querySelector('.out');
let in1 = document.querySelector('.in1');
let but1 = document.querySelector('.but1');
let out1 = document.querySelector('.out1');

out.innerHTML = 'Список покупок выведен в консоль';
console.log(spisok);

function one () {
    for (let i = 0; i<spisok.length ; i++){
        if (in1.value == spisok[i].name && spisok[i].kuplen == 'Нет'){
            spisok[i].kuplen = 'Да';
            out1.innerHTML = in1.value + ' куплен(-о), список покупок обновлен и выведен в консоль'
            console.log(spisok)
        }
        else if (in1.value == spisok[i].name && spisok[i].kuplen == 'Да'){
            out1.innerHTML = in1.value + ' уже куплен(-о)'
        }
    }
}
but1.onclick = one;
    
// ---------------------Задача № 2---------------------
let receipt = [
    {name: 'Молоко', kolvo: 2, price: 70,},
    {name: 'Хлеб', kolvo: 2, price: 40,},
    {name: 'Сыр', kolvo: 1, price: 700,},
    {name: 'Творог', kolvo: 3, price: 100,},
    {name: 'Йогурт', kolvo: 4, price: 30,},
    {name: 'Масло', kolvo: 1, price: 120,},
];

let out2 = document.querySelector('.out2');
let but2 = document.querySelector('.but2');
let but3 = document.querySelector('.but3');
let but4 = document.querySelector('.but4');
let but5 = document.querySelector('.but5');

function two (){
    console.log(receipt);
    out2.innerHTML = 'Чек выведен в консоль'
}

function three (){
    let summa = 0;
    for (let i = 0; i < receipt.length; i++){
        let kol = receipt[i].kolvo;
        let pr = receipt[i].price;
        summa += kol*pr
    }
    out2.innerHTML = 'Общая сумма покупки: ' + summa + ' рублей';
}

function four(){
    let summa = 0;
    let nnname;
    for (let i = 0; i < receipt.length; i++){
        let pr = receipt[i].price;
        let nname = receipt[i].name;
        if (pr > summa){
            summa = pr;
            nnname = nname;
        }
    }
    out2.innerHTML = 'Самая дорогая покупка: ' + nnname + '<br><br>' + 'Стоимость товара: ' + summa + ' рублей';
}

function five(){
    let summa = 0;
    for (let i = 0; i < receipt.length; i++){
        let pr = receipt[i].price;
        summa += pr;
    }
    let sred = summa / 6;
    out2.innerHTML = 'Средняя стоимость товара: ' + sred + ' рублей';
}

but2.onclick = two;
but3.onclick = three;
but4.onclick = four;
but5.onclick = five;