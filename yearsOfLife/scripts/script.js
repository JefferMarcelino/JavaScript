const yearOfBith = document.querySelector("input")
const button = document.querySelector("button")
const container = document.querySelector("main")

var output = document.createElement("p")
container.appendChild(output)

const date = new Date()

button.addEventListener("click", () => {
    var yearsOfLife = date.getFullYear() - Number(yearOfBith.value)
    var daysOfLife = yearsOfLife * 365

    output.innerText = `Voce tem aproximadamente ${daysOfLife} dias de vida.`
})