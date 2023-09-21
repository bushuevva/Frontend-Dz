// ------------------Задача № 1------------------
let arr1 = [];
let out1 = document.querySelector('.out1');
let but1 = document.querySelector('.but1');
function one(){
    arr1[0] = +document.querySelector('.el_1').value;
    arr1[1] = +document.querySelector('.el_2').value;
    arr1[2] = +document.querySelector('.el_3').value;
    arr1[3] = +document.querySelector('.el_4').value;
    arr1[4] = +document.querySelector('.el_5').value;
    arr1[5] = +document.querySelector('.el_6').value;
    arr1[6] = +document.querySelector('.el_7').value;
    arr1[7] = +document.querySelector('.el_8').value;
    arr1[8] = +document.querySelector('.el_9').value;
    arr1[9] = +document.querySelector('.el_10').value;
    out1.innerHTML = arr1;
}
but1.onclick = one
// ------------------Задача № 2------------------
let arr2 = [];
let out2 = document.querySelector('.out2');
let but2 = document.querySelector('.but2');
function two(){
    arr2[0] = +document.querySelector('.al_1').value;
    arr2[1] = +document.querySelector('.al_2').value;
    arr2[2] = +document.querySelector('.al_3').value;
    arr2[3] = +document.querySelector('.al_4').value;
    arr2[4] = +document.querySelector('.al_5').value;
    arr2[5] = +document.querySelector('.al_6').value;
    arr2[6] = +document.querySelector('.al_7').value;
    arr2[7] = +document.querySelector('.al_8').value;
    arr2[8] = +document.querySelector('.al_9').value;
    arr2[9] = +document.querySelector('.al_10').value;
    for (let i = 0; i < arr2.length; i++){
        if (arr2[i] % 2 == 0){
            out2.innerHTML = 'четные элементы массива выведены в консоль';
            console.log(arr2[i]);
        }
    }
}
but2.onclick = two
// ------------------Задача № 3------------------
let arr3 = [];
let out3 = document.querySelector('.out3');
let but3 = document.querySelector('.but3');
function three(){
    arr3[0] = +document.querySelector('.l_1').value;
    arr3[1] = +document.querySelector('.l_2').value;
    arr3[2] = +document.querySelector('.l_3').value;
    arr3[3] = +document.querySelector('.l_4').value;
    arr3[4] = +document.querySelector('.l_5').value;
    arr3[5] = +document.querySelector('.l_6').value;
    arr3[6] = +document.querySelector('.l_7').value;
    arr3[7] = +document.querySelector('.l_8').value;
    arr3[8] = +document.querySelector('.l_9').value;
    arr3[9] = +document.querySelector('.l_10').value;
    let summa = 0;
    for (let i = 0; i < arr3.length; i++){
        summa += arr3[i];
        out3.innerHTML = 'Сумма элементов массива: ' + summa;
    }
}
but3.onclick = three

// ------------------Задача № 4------------------
let arr4 = [];
let out4 = document.querySelector('.out4');
let but4 = document.querySelector('.but4');
function four(){
    arr4[0] = +document.querySelector('.ll_1').value;
    arr4[1] = +document.querySelector('.ll_2').value;
    arr4[2] = +document.querySelector('.ll_3').value;
    arr4[3] = +document.querySelector('.ll_4').value;
    arr4[4] = +document.querySelector('.ll_5').value;
    arr4[5] = +document.querySelector('.ll_6').value;
    arr4[6] = +document.querySelector('.ll_7').value;
    arr4[7] = +document.querySelector('.ll_8').value;
    arr4[8] = +document.querySelector('.ll_9').value;
    arr4[9] = +document.querySelector('.ll_10').value;
    let maximum = 0;
    for (let i = 0; i < arr4.length; i++){
        if (maximum < arr4[i]){
            maximum = arr4[i];
        }
        out4.innerHTML = 'Максимальный элемент массива: ' + maximum;
    }
}
but4.onclick = four