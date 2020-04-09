//Callbacks
function suma(num1, num2) {
    return num1 + num2
}
function calculadora(num1, num2, callback) {
    return callback(num1, num2)
}

console.log('suma', calculadora(1, 2, suma))
console.log(calculadora(1, 8, suma))

function printCallback(newDate) {
    console.log(newDate)
}

function date(callback) {
    console.log(new Date())
    setTimeout(function () {
        let date = new Date()
        callback(date)
    }, 3000)
}

date(printCallback)