let userScore=0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScoree= document.querySelector("#userScore");
let compScoree = document.querySelector("#compScore");

let generateCompChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    let randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

let drawGame = () =>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor =" #4a5759";

};

let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScoree.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoree.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

let playGame = (userChoice) =>{
    let compChoice = generateCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});