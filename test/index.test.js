import { updateCalculation } from "../src/script.js";

describe("Test suite: Calculation logic", () => {
    test(updateCalculation(3, 4)).toBe(7);
})