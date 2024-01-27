let user = 0;
let comp =  0;

const choices = document.querySelectorAll(".choice")
const message = document.querySelector("#msg")
const userScore = document.querySelector("#user-score")
const compScore = document.querySelector("#comp-score")

choices.forEach((choice) =>{
    console.log(choice)
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice)
        playGame(userChoice)

    })
})
const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"]
    const RandIdx = Math.floor(Math.random() * 3)
    return options[RandIdx]
}

const drawGame = () =>{
    console.log("Game is draw")
    message.innerText = "Game is draw , Try Again";
    message.style.backgroundColor = "blue"
}

const showWinner = (userWin) =>{
    if(userWin) {
        user++ 
        userScore.innerText = user;
        console.log("You Are Winner")
        message.innerText = `You Are Winner`;
        message.style.backgroundColor = "green"
    }
    else{
        comp++;
        compScore.innerText = comp;
        console.log("You Lose the Game")
        message.innerText = `You Lose!!`;
        message.style.backgroundColor = "red"
    }
}

const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice)
    //Generate computer choice
    const compChoice =  genCompChoice();
    console.log("Computer choice = ",compChoice)

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
      } else {
        let userWin = true;
        if (userChoice === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userWin = compChoice === "scissor" ? false: true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice, compChoice);
      }

}
