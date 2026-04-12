export function save(value) {
    localStorage.setItem('Calculation', value);
}

export function load() {
    return localStorage.getItem('Calculation') || ' ';
}