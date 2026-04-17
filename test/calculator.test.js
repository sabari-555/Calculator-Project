import { appendValue, evaluateExpression, clear, deleteLast } from "../script/core/calculator.js";

describe("Test suite: appendValue()", () => {
    test("appends numbers to existing value", () => {
        expect(appendValue('2+','3')).toBe('2+3');
        expect(appendValue("2-3+","5")).toBe("2-3+5");
    });

    test("adds operator after number", () => {
        expect(appendValue("12", "+")).toBe("12+");
    });

    test("Replace if operator is repeated", () => {
        expect(appendValue("4+", "+")).toBe("4+");
        expect(appendValue("2+", "-")).toBe("2-");
        expect(appendValue("2*", "-")).toBe("2-");
    });

    test("Handles single operator inputs", () => {
        expect(appendValue("-","+")).toBe("+");
    });

    test("Add number to empty string", () => {
        expect(appendValue(null, "3")).toBe("3");
    });
});

describe("Test suite: evaluateExpression()", () => {
    test("Evaluate simple addition", () => {
        expect(evaluateExpression("2+3")).toBe(5);
    });

    test("Evaluate complex expression", () => {
        expect(evaluateExpression("10/2 + 3*2")).toBe(11);
    });

    test("Last value is operator then skip it", () => {
        expect(evaluateExpression("4+5+")).toBe(9);
    });

    test("operation in first", () => {
        expect(evaluateExpression("+3+3")).toBe(6);
    });

    test("throw an error if one operator and value", () => {
        expect(evaluateExpression("*9")).toBe("Error! clear and use");
    });
});

describe("Test Suite: clear()", () => {
    test("check value has Cleared ", () => {
        expect(clear()).toBe('');
    });

    test("check value has Cleared ", () => {
        expect(clear()).not.toBe('2');
    });

});

describe("Test Suite: deleteLast() function", () => {
    test("Deleting the last number", () => {
        expect(deleteLast("1+23")).toBe("1+2");
    });

    test("Deleting the single number or operator", () => {
        expect(deleteLast("1")).toBe("");
    });
})