export function displayCalculation(calculation) {
    document.querySelector(".display-result").innerHTML = calculation;
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
    if(modeImg.getAttribute("src") === "../Assets/sun.svg") {
        modeImg.setAttribute("src", "../Assets/moon.svg");
        jsCalsName.innerHTML = `<p style="font-size: 1.5rem;">Light Mode \u{1F31E}</p>`;
    } else {
        modeImg.setAttribute("src", "../Assets/sun.svg");
        jsCalsName.innerHTML = `<p style="font-size: 1.5rem;">Dark Mode \u{1F319}</p>`;;
    }

    const gitImg = document.getElementById("github-img");

    if(gitImg.getAttribute("src") === "../Assets/github-white.svg") {
        gitImg.setAttribute("src", "../Assets/github.svg");
    } else {
        gitImg.setAttribute("src", "../Assets/github-white.svg");
    }

}

export function themeDelay() {
    setTimeout(() => {
        document.querySelector(".js-cals-name").innerHTML = "Calculator";
    },1500);
    toggleButton();
}

