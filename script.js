const weight = document.getElementById("weight")
const height = document.getElementById("height")
const calculateBtn = document.getElementById("calculate")
const resultContainer = document.getElementById("resultContainer")
const result = document.getElementById("result")
const bmiImage = document.getElementById("bmiImage")

resultContainer.style.display = "none"

calculateBtn.addEventListener("click", () => {
    let calc = weight.value / (height.value * height.value)
    resultContainer.style.display = "flex"
    result.innerHTML = Math.floor(calc)

    if(calc < 18){
        bmiImage.src = "/images/skinny.png"
    }
    else if(calc > 18 && calc < 24){
        bmiImage.src = "/images/normal.png"
    }
    else if(calc > 25 && calc < 29){
        bmiImage.src = "/images/overweight.png"
    }
    else if(calc > 30 && calc < 34){
        bmiImage.src = "/images/obese.png"
    }
    else if(calc > 35){
        bmiImage.src = "/images/extremelyobese.png"
    }
})