function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
document.getElementById('add').addEventListener('click', function () { return performOperation(add); });
document.getElementById('subtract').addEventListener('click', function () { return performOperation(subtract); });
document.getElementById('multiply').addEventListener('click', function () { return performOperation(multiply); });
document.getElementById('divide').addEventListener('click', function () { return performOperation(divide); });
function performOperation(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }
    var result = operation(num1, num2);
    document.getElementById('result').textContent = "Result: ".concat(result);
}
