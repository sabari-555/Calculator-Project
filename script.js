let calculation = localStorage.getItem('Calculation') || '';
displayCalculation();
function updateCalculation(value) {
    calculation += value;
    localStorage.setItem('Calculation', calculation);
    displayCalculation();
}

function displayCalculation() {
    document.querySelector(".display-result").innerHTML = calculation;
}

function themeDelay() {
    setTimeout(() => {
        document.querySelector(".js-cals-name").innerHTML = "Calculator";
    },1500);
    toggleButton();
    
}

function toggleButton() {
    const calsButton = document.querySelectorAll(".js-cals-button");
    document.body.classList.toggle("dark");
    calsButton.forEach(btn => {
        btn.classList.toggle("gray-button");
        btn.classList.toggle("gray-button-updated");
    })

    const jsResultToggle = document.querySelector(".js-result-toggle");
    jsResultToggle.classList.toggle("result-gray");
    jsResultToggle.classList.toggle("result-white");

    const modeImg = document.getElementById("theme-img");
    const jsCalsName = document.querySelector(".js-cals-name");
    if(modeImg.getAttribute("src") === "Assets/sun.svg") {
        modeImg.setAttribute("src", "Assets/moon.svg");
        jsCalsName.innerHTML = `<p style="font-size: 1.5rem;">Light Mode \u{1F31E}</p>`;
    } else {
        modeImg.setAttribute("src", "Assets/sun.svg");
        jsCalsName.innerHTML = `<p style="font-size: 1.5rem;">Dark Mode \u{1F319}</p>`;;
    }

    const gitImg = document.getElementById("github-img");

    if(gitImg.getAttribute("src") === "Assets/github-white.svg") {
        gitImg.setAttribute("src", "Assets/github.svg");
    } else {
        gitImg.setAttribute("src", "Assets/github-white.svg");
    }

}


//operations in Equal to Button "="
document.querySelector(".equalto-js-btn").addEventListener("click", () => {
    calculation = eval(calculation);
    localStorage.setItem('Calculation', calculation);
    displayCalculation();
})

//Clear Button
document.querySelector(".js-clear-btn").addEventListener("click", () => {
    document.querySelector('.display-result').innerHTML = '';
    calculation = '';
    localStorage.setItem('Calculation', calculation);
})

//Delete Button
document.querySelector(".js-delete-btn").addEventListener("click", () => {
    let updatedCal = calculation.slice(0, -1);
    calculation = updatedCal;
    localStorage.setItem('Calculation', calculation);
    displayCalculation()
})

