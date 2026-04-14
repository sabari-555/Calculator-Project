function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

export function appendValue(current, value) {
    let lastValue = current[current.length - 1];
    if(isOperator(value)) {
        if(isOperator(lastValue)) {
            return current.slice(0, -1) + value;
        }
    }
    return current + value;
}

function sum(a, b) {
    return a+b;
}

export function evaluateExpression(expression) {
    let lastValue = expression[expression.length - 1];
    if(isOperator(lastValue)) {
        expression = expression.slice(0, -1);
    }

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