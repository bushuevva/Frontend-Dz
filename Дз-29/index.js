// -------------------Задача № 1-------------------
let Num1 = document.querySelector('.num1');
let Num2 = document.querySelector('.num2');
let Out = document.querySelector('.out');
let Pos = document.querySelector('.pos');
Pos.onclick = () => {
    let summa = 0;
    for (let i = +Num1.value; i <= +Num2.value; i++ ){
        summa += i;
    }
    Out.innerHTML = summa;
}
// -------------------Задача № 2-------------------
let But = document.querySelector('.but');
let Out1 = document.querySelector('.out1');
let Out2 = document.querySelector('.out2');
let Out3 = document.querySelector('.out3');
let Out4 = document.querySelector('.out4');
let Out5 = document.querySelector('.out5');
let posit = 0;
let negat = 0;
let zero = 0;
let chet = 0;
let nechet = 0;
But.onclick = () => {
    for( let i = 1; i <= 10; i++) {
        const num = prompt('Введите число');
        if (num > 0){
            posit ++;
        }
        if (num < 0){
            negat ++;
        }
        if (num == 0){
            zero ++;
        }
        if (num % 2 == 0){
            chet ++;
        }
        if (num % 2 != 0){
            nechet ++;
        }   
    }
    Out1.innerHTML = posit;
    Out2.innerHTML = negat;
    Out3.innerHTML = zero;
    Out4.innerHTML = chet;
    Out5.innerHTML = nechet;
}
// -------------------Задача № 3-------------------
let Num = document.querySelector('.num');
let But2 = document.querySelector('.but2');
let Outt = document.querySelector('.outt');
But2.onclick = () =>{
    for( let i = 1; i <= 100; i++){
        if (i % Num.value == 0) {
            console.log(i);
            Outt.innerHTML = "Числа кратные " + Num.value + " выведены в консоль";
        }
    }
}
// -------------------Задача № 4-------------------
let Numm = document.querySelector('.numm');
let But3 = document.querySelector('.but3');
let Oout = document.querySelector('.Out');
But3.onclick = () => {
    let prost = +Numm.value;
    if (prost > 1 ){
        for (let i = 2; i < prost; i++){
            if ( prost % i === 0){
                Oout.innerHTML = "Число не является простым"
                i++
            }
            else {
                Oout.innerHTML = "Число является простым"
            }
        }
    }
    else{
        Oout.innerHTML = "Введите число больше 1"
    }
    
}