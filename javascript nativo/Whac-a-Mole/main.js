const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
let time = document.querySelector("#time")
let score = document.querySelector("#result")

let result = 0;
let hit;
let currentTime = 60;
let timerId = null

function ramdonSquare(){
    squares.forEach(square =>{
        square.classList.remove("mole")
    })

    let ramdonPosition = squares[Math.floor(Math.random()*9)]
    ramdonPosition.classList.add("mole")

    hit = ramdonPosition.id
}

squares.forEach(square =>{
    square.addEventListener("mousedown", ()=>{
        if(square.id ==  hit){
            result++
            score.textContent = result
            hit = null;
        }
    })
})

function moveMole(){
    
    timerId = setInterval(
        ramdonSquare, 600);
}
moveMole()

function countDown(){
    currentTime--
    time.textContent = currentTime

    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("GAME OVER! Tu puntaje final es: " + result)
    }
}

let countDownTimerId = setInterval(countDown,1000)


