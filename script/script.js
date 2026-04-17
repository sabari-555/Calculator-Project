import { appendValue, evaluateExpression, clear, deleteLast } from "./core/calculator.js";
import { displayCalculation, themeDelay } from "./ui/display.js";
import { load, save } from "./services/storage.js";
/*import * as calculator from './core/calculator.js';
import * as display from './ui/display.js';
import * as storage from './services/storage.js';*/

let calculation = load();
displayCalculation(calculation);


document.querySelectorAll(".js-cals-button").forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.dataset.value;
        calculation = appendValue(calculation, value);
        displayCalculation(calculation);
        save(calculation);
    })
})


//code for equalTo button
document.querySelector(".equalto-js-btn").addEventListener("click", () => {
    calculation = evaluateExpression(calculation).toString();
    displayCalculation(calculation);
    save(calculation);
})

//code for clear button
document.querySelector(".js-clear-btn").addEventListener("click", () => {
    calculation = clear();
    displayCalculation(calculation);
    save(calculation);
})

//code for delete button
document.querySelector(".js-delete-btn").addEventListener("click", () => {
    calculation = deleteLast(calculation);
    displayCalculation(calculation);
    save(calculation);
})

//theme
document.querySelector(".js-theme-delay").addEventListener("click", () => {
    themeDelay();
})

//keyboard events

document.addEventListener("keydown", (event) => {

    switch(event.key) {
        case '1': case '2' : case '3': case '4': case '5':
        case '6': case '7' : case '8': case '9': case '0':
        case '+': case '-' : case '*': case '/': case '.':
            calculation = appendValue(calculation, event.key);
            displayCalculation(calculation);
            save(calculation);
            break;
        
        case 'Backspace':
            calculation = deleteLast(calculation);
            displayCalculation(calculation);
            save(calculation);
            break;
        case 'Enter':
            let updatedValue = evaluateExpression(calculation);
            calculation = updatedValue.toString();
            displayCalculation(calculation);
            save(calculation);
            return calculation;
        default:
            //break the condition if no one match
            break;
    }
});