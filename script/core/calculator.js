export function appendValue(current, value) {
    return current + value;
}

export function evaluateExpression(expression) {
    try {
        return Function(`return ${expression}`)();
    } catch{
        return 'Error';
    }
}

export function clear() {
    return '';
}

export function deleteLast(calculation) {
    let updateValue = calculation.slice(0, -1);
    calculation = updateValue;
    return calculation;
}