const birth = document.querySelector("input")
const button = document.querySelector("button")
const container = document.querySelector("main")

var output = document.createElement("p")
container.appendChild(output)

const date = new Date()

button.addEventListener("click", () => {
    if (birth.value.length == 0) {
        output.innerText = `Por favor, digite o seu ano de nascimento.`
    } else {
        var actualMonth = Number(date.getMonth()) + 1
        var yearOfBirth = birth.value.slice(0, 4)
        var monthOfBirth = birth.value.slice(5)
        var yearsOfLife = date.getFullYear() - Number(yearOfBirth)
        var differenceBetween = actualMonth - monthOfBirth


        if (yearsOfLife == 0) {
            console.log(differenceBetween)
            var daysOfLife = differenceBetween * 30
            console.log(daysOfLife)
        } else {
            if (Number(actualMonth) <= monthOfBirth) {
                
                if (differenceBetween !== 0) {
                    yearsOfLife--
                    var daysOfLife = yearsOfLife * 365
                    daysOfLife += (365 - (differenceBetween * 30))
                } else {
                    var daysOfLife = yearsOfLife * 365
                }
            }    
        }
        
        output.innerText = `Voce tem aproximadamente ${daysOfLife} dias de vida.`
    }
})