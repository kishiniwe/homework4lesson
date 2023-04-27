// ---1---
// Перепишіть функцію, використовуючи '?' або '||'

/* function checkAge(age) {
    if (age > 18) {
    return true;
        } else {
        return confirm('Батьки дозволили?');
    }
} */

/* function checkAge(age) {
    if (age) {
        return (age > 18) ? console.log(true) : console.log("Батьки дозволили?");
    }
}
checkAge(16); */


// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.


/* function minOfNumbers(a, b) {
    if (a < b)
        console.log(a);
    else {
        console.log(b);
    }
} */




// --- 3-- -
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
/*  function ask(question, yes, no) {
    if (confirm(question)) yes();
        else no();
}
ask(
"Ви згодні?",
    function() { alert("Ви погодились."); },
    function() { alert("Ви скасували виконання."); }
);
*/



/* const aask = (question, yes, no) => {
    if (confirm(question)) {
        return yes();
    } else {
        return no();
    }
}

aask(
"Ви згодні?",
    function() { alert("Ви погодились."); },
    function() { alert("Ви скасували виконання."); }
); */