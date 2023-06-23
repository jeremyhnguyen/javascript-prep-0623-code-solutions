const number1 = 2;
const number2 = 3;
const product = number1 * number2;

console.log(product, typeof product);

const charge = 10;
const payment = 1;
const amountRemaining = charge - payment;

console.log(amountRemaining, typeof amountRemaining);

const tests = 3;
const assignments = 8;
const final = 1;
const grade = (tests + assignments + final) / 3;

console.log(grade, typeof grade);

const firstName = 'Jeremy';
const lastName = 'Nguyen';
const fullName = `${firstName} ${lastName}`;

console.log(fullName, typeof fullName);

const pH = 8;
const isAcidic = pH < 7;

console.log(isAcidic, typeof isAcidic);

const numberOfSoldiers = 10000;
const isSparta = numberOfSoldiers === 300;

console.log(isSparta, typeof isSparta);

let nickname = fullName;
nickname += ' is the GOAT';

console.log(nickname);
console.log('Jeremy Nguyen is the GOAT');
