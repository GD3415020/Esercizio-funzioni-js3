let num = Number(prompt(`inserisci un numero`));

function cifra(number) {
    if (isNaN(number)) {
        console.log(`spiacente, accetto solo numeri`);
    } else if (!Number.isInteger(number)) {
        console.log(`spiacente, accettolo solo numeri interi`);
    } else if (number >= 0 && number < 10) {
        console.log(`${num}: 1 cifra`);
    } else if (number >= 10 && number < 100) {
        console.log(`${num}: 2 cifre`);
    } else if (number >= 100 && number < 1000) {
        console.log(`${num}: 3 cifre`);
    } else if (number >= 1000 && number < 10000) {
        console.log(`${num}: 4 cifre`);
    } else if (number > 9999) {
        console.log(`${num}: numero troppo grande, accetto solo numeri fino a 9999`);
    } else if (number < 0) {
        console.log(`${num}: numero troppo piccolo, accetto solo numeri positivi`);
    }
}

cifra(num);