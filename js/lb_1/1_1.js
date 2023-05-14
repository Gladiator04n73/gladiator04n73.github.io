"use strict";
function vozrast_pol() {
    let age,gender;
age = prompt('Сколько вам лет?');
gender = prompt('Вы мужчина или женщина?');
if ((age>=0 && age <= 17)&&(gender=='мужчина' || gender=='женщина')){
    alert('Вам работать ещё рано — учитесь!');
}  else if ((age>=18 && age <= 59) && gender=='мужчина'){
    alert('Вам ещё работать и работать!');
} else if ((age>=18 && age <= 54) && gender=='женщина'){
    alert('Вам ещё работать и работать!');
}else if ((age>=60 && age < 65) && gender=='мужчина'){
    alert('Скоро пенсия!');
} else if ((age>=55 && age < 60) && gender=='женщина'){
    alert('Скоро пенсия!');
}  else if (age >= 65 && gender=='мужчина'){
    alert('Вам пора на пенсию!');
} else if (age >= 60 && gender=='женщина'){
    alert('Вам пора на пенсию!');
}  else {
    alert('Да кто ты такой?')
}
}

function crow() {
    let num, message, mod;
    num = +prompt('Введите количество ворон', 1);
    mod = num % 100;
    if (mod > 10 && mod < 20 ) {
        message = `На ветке сидит ${num} ворон`;
    } 
    else {
        switch (num % 10) {
            case 1:
            message = `На ветке сидит ${num} ворона`;
                break;
            case 2:
            case 3:
            case 4:
            message = `На ветке сидит ${num} вороны`;
                break;
            default:
                message = `На ветке сидит ${num} ворон`;
                break;
        }

    }
    alert(message);
}