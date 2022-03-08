// <p id="nr">20, 50, 60, 0, -42, -2, 100</p>
// <p id="one">500</p>
// <input id="favorite" type="number" value="50">

// paimti reiksme is p#one ir prie jos prideti 100 ir gauti rezultata
const pOne = document.getElementById('one');
let result = +pOne.textContent + 100;
result = Number(pOne.textContent) + 100;
result = parseInt(pOne.textContent) + 100;
console.log('result ===', result);

// paimti reiksme is ivesties lauko ir prideti 50
// atsakyma isvesti i nauja el po input
// atsakyma atnaujinti kei keiciasi reikme ivesties lauke

// pagaminti masyva is // <p id="nr">20, 50, 60, 0, -42, -2, 100</p> el reiksmiu
// masyvo reiksmes padvigubinti ir ikelti i nauja paragrafa po esamu
