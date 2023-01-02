let computer = document.getElementById("computer-choice")
let person = document.getElementById("person-choice")
let result = document.getElementById("result")
let possibleChoice = document.querySelectorAll("button")
let personChoice;
let computerChoice;
possibleChoice.forEach(elemnt => elemnt.addEventListener("click", (e)=>{
  personChoice = e.target.id
    person.innerHTML = personChoice
    selectComputerChoice()
    getResult()
}))

function selectComputerChoice(){
   let ramdonNumber = Math.floor(Math.random()*3) +1;
   if(ramdonNumber === 1){
   computerChoice = "Piedra";
   }
   if (ramdonNumber === 2){
    computerChoice = "Papel";
   }
   else{
    computerChoice = "Tijera";
   }
   computer.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === personChoice){
        result.innerHTML = "Empate"
    }
    if(computerChoice === "Piedra" && personChoice === "Papel"){
        result.innerHTML = "Ganaste!"
    }
    if(computerChoice === "Piedra" && personChoice === "Tijera"){
        result.innerHTML = "Perdiste!"
    }
    if(computerChoice === "Papel" && personChoice === "Tijera"){
        result.innerHTML = "Ganaste!"
    }
    if(computerChoice === "Papel" && personChoice === "Piedra"){
        result.innerHTML = "Perdiste!"
    }
    if(computerChoice === "Tijera" && personChoice === "Piedra"){
        result.innerHTML = "Ganaste!"
    }
    if(computerChoice === "Tijera" && personChoice === "Papel"){
        result.innerHTML = "Perdiste!"
    }
}