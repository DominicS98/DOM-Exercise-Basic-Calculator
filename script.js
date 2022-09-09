
let resultBar = document.querySelector("data");
let resultMath = null;
let lastTimeAdding = false;
let lastTimeSubtracting = false;
let lastTimeMultiplying = false;
let lastTimeDivide = false;
//selecting Numbers
let oneButton = document.getElementById("oneButton");
oneButton.addEventListener("click", () => {
    if (resultBar.innerText === "Welcome") {
        resultBar.innerText = null;
    }
    resultBar.innerText = resultBar.innerText + "1";
})
let twoButton = document.getElementById("twoButton");
twoButton.addEventListener("click", () => {
    if (resultBar.innerText === "Welcome") {
        resultBar.innerText = null;
    }
    resultBar.innerText = resultBar.innerText + "2";
})
let threeButton = document.getElementById("threeButton");
threeButton.addEventListener("click", () => {
    if (resultBar.innerText === "Welcome") {
        resultBar.innerText = null;
    }
    resultBar.innerText = resultBar.innerText + "3";
})
let fourButton = document.getElementById("fourButton");
fourButton.addEventListener("click", () => {
    if (resultBar.innerText === "Welcome") {
        resultBar.innerText = null;
    }
    resultBar.innerText = resultBar.innerText + "4";
})
let fiveButton = document.getElementById("fiveButton");
fiveButton.addEventListener("click", () => {
    if (resultBar.innerText === "Welcome") {
        resultBar.innerText = null;
    }
    resultBar.innerText = resultBar.innerText + "5";
})
let sixButton = document.getElementById("sixButton");
sixButton.addEventListener("click", () => {
    if (resultBar.innerText === "Welcome") {
        resultBar.innerText = null;
    }
    resultBar.innerText = resultBar.innerText + "6";
})
let sevenButton = document.getElementById("sevenButton");
sevenButton.addEventListener("click", () => {
    if (resultBar.innerText === "Welcome") {
        resultBar.innerText = null;
    }
    resultBar.innerText = resultBar.innerText + "7";
})
let eightButton = document.getElementById("eightButton");
eightButton.addEventListener("click", () => {
    if (resultBar.innerText === "Welcome") {
        resultBar.innerText = null;
    }
    resultBar.innerText = resultBar.innerText + "8";
})
let nineButton = document.getElementById("nineButton");
nineButton.addEventListener("click", () => {
    if (resultBar.innerText === "Welcome") {
        resultBar.innerText = null;
    }
    resultBar.innerText = resultBar.innerText + "9";
})
let zeroButton = document.getElementById("zeroButton");
zeroButton.addEventListener("click", () => {
    if (resultBar.innerText === "Welcome") {
        resultBar.innerText = null;
    }
    resultBar.innerText = resultBar.innerText + "0";
})
let dotButton = document.getElementById("dotButton");
dotButton.addEventListener("click", () => {
    if (resultBar.innerText === "Welcome") {
        resultBar.innerText = null;
    }
    if (resultBar.innerText.includes(".") === false) {
        resultBar.innerText = resultBar.innerText + ".";
    } else
        console.log("Dot already contained");
})
let deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
    resultBar.innerText = null;
    resultMath = null;
})
let plusButton = document.getElementById("plusButton");
plusButton.addEventListener("click", () => {
    resultMath += parseFloat(resultBar.innerText);;
    console.log(`adding, total ${resultMath}`)
    resultBar.innerText = null;
    lastTimeAdding = true;
    lastTimeSubtracting = false;
    lastTimeMultiplying = false;
    lastTimeDivide = false;
}
)
let minusButton = document.getElementById("minusButton");
minusButton.addEventListener("click", () => {
    if (resultMath === null) {
        resultMath = parseFloat(resultBar.innerText);
    } else
        resultMath = resultMath - parseFloat(resultBar.innerText);
    console.log(`subtracting, total ${resultMath}`)
    resultBar.innerText = null;
    lastTimeSubtracting = true;
    lastTimeAdding = false;
    lastTimeMultiplying = false;
    lastTimeDivide = false;
}
)
let multiplyButton = document.getElementById("multiplyButton");
multiplyButton.addEventListener("click", () => {
    if (resultMath === null) {
        resultMath = parseFloat(resultBar.innerText);
    } else
        resultMath = resultMath * parseFloat(resultBar.innerText);
    console.log(`multiplying, total ${resultMath}`)
    resultBar.innerText = null;
    lastTimeSubtracting = false;
    lastTimeAdding = false;
    lastTimeMultiplying = true;
    lastTimeDivide = false;
}
)
let divideButton = document.getElementById("divideButton");
divideButton.addEventListener("click", () => {
    if (resultMath === null) {
        resultMath = parseFloat(resultBar.innerText);
    } else
        resultMath = resultMath / parseFloat(resultBar.innerText);
    console.log(`multiplying, total ${resultMath}`)
    resultBar.innerText = null;
    lastTimeSubtracting = false;
    lastTimeAdding = false;
    lastTimeMultiplying = false;
    lastTimeDivide = true;
}
)
let negativeButton = document.getElementById("negativeButton");
negativeButton.addEventListener("click", () => {
    resultBar.innerText = - + resultBar.innerText;
}
)

let equalButton = document.getElementById("equalButton");
equalButton.addEventListener("click", () => {
    if (resultBar.innerText === "Welcome") {
        resultBar.innerText = null;
    }
    if (lastTimeAdding === true) {
        resultBar.innerText = resultMath + parseFloat(resultBar.innerText);
        resultMath = null;
        lastTimeAdding == false;
    }
    if (lastTimeSubtracting === true) {
        resultBar.innerText = resultMath - parseFloat(resultBar.innerText);
        resultMath = null;
        lastTimeSubtracting = false;
    }
    if (lastTimeMultiplying === true) {
        resultBar.innerText = resultMath * parseFloat(resultBar.innerText);
        resultMath = null;
        lastTimeMultiplying = false;
    }
    if (lastTimeDivide === true) {
        resultBar.innerText = resultMath / parseFloat(resultBar.innerText);
        resultMath = null;
        lastTimeDivide = false;
    }
})
