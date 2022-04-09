const buttons = document.querySelectorAll("button")
const positionsTop = [5, 10, -50, 10]
const positionsRight = [5, 10, -50, 10]
const positionsLeft = [15, 0]

const paragraph = document.querySelector("p")

var position = 0

buttons.forEach(button => {
    button.addEventListener("click", e => {
        if (e.target.classList.contains("no")) {
            button.style.top = `${positionsTop[position]}px`
            button.style.right = `${positionsRight[position]}px`
            position++
            if (position > positionsTop.length) {
                position = 0
                button.style.left = `${positionsLeft[position]}px`

            }
        } else {
            paragraph.innerText = "I knew it! :3"
            const buttons = document.querySelector(".buttons")
            buttons.style.display = "none"
        }
    })
})