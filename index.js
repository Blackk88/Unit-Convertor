const units = {
    Lenght: ["meter", "feet", 3.281],
    Volume: ["liter", "gallon", 0.264],
    Mass: ["kilogram", "pound", 2.204]}
    
const convertBtn = document.getElementById("convert-btn")
const inputUnit = document.getElementById("input-unit")
const results = document.getElementById("res-containter")

const numOfUnits = Object.keys(units).length

convertBtn.addEventListener("click", function() {
    createOutputElements()
    for (let i = 0; i < numOfUnits; i++) {
        let key = Object.keys(units)[i]
        output = document.getElementById(key)
            convertedNumOne = (inputUnit.value * units[key][2]).toFixed(3)
            convertedNumTwo = (inputUnit.value / units[key][2]).toFixed(3)
            output.innerHTML = `<h2>${key} (${units[key][0]}/${units[key][1]})</h2>
                                <p>${inputUnit.value} ${units[key][0]} = ${convertedNumOne} ${units[key][1]}  |   
                                 ${inputUnit.value} ${units[key][1]} = ${convertedNumTwo} ${units[key][0]}</p>`
    }
})

    // Create container elements for results
function createOutputElements() {
    let resultContainer = ""
    for (let i = 0; i < numOfUnits; i++) {                           
    resultContainer += `<div class="results" id="${Object.keys(units)[i]}"></div>`
    results.innerHTML = resultContainer           
    }
}


