function add (a: number , b:number) :number{
    return a + b;
}
function subtract (a: number, b : number) : number{
    return a - b ;
}
function multiply (a:number, b:number) :number{
    return a * b; 
}
function divide (a : number , b : number) :number{
    return a / b ;
}

document.getElementById('add')!.addEventListener('click', () => performOperation(add));
document.getElementById('subtract')!.addEventListener('click', () => performOperation(subtract));
document.getElementById('multiply')!.addEventListener('click', () => performOperation(multiply));
document.getElementById('divide')!.addEventListener('click', () => performOperation(divide));

function performOperation(operation: Function) {
    const num1 = parseFloat((<HTMLInputElement>document.getElementById('num1')).value);
    const num2 = parseFloat((<HTMLInputElement>document.getElementById('num2')).value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    const result = operation(num1, num2);
    document.getElementById('result')!.textContent = `Result: ${result}`;
}