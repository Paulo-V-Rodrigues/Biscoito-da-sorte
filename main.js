const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const randomNumber = math.round(Math.random() * 10)
let xAttempts = 1

function handleTryClick (event){
    event.preventDefault() //não faça o padrao

//função callback
    const inputnumber = document.querySelector("#inputnumber")
    
    if(Number(inputnumber) == randomnumber) {

        document
        .querySelector(".screen2 h2")
        .innerText `acertou em ${xAttempts} tentativas`
    }

    inputnumber.value = ""
    xAttempts++
}

//eventos

const btnTry = document.querySelector("#btnTry")
const btnReaset = document.querySelector("btnReaset")

btnTry.addEventListener('click', handleTryClick)
btnReaset.addEventListener('click', function() {

    screen1.classList.remove("hide")
    screen2.classList.add("hide")

    xAttempts = 1
})