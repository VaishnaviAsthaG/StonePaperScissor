let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#message")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};    

const drawGame = () => {
    console.log("Game is draw");
    msg.innerText = "Game is draw . Play Again!!";
    msg.style.backgroundColor = "#021526";
};

const showWin = (userWin , userChoice , compChoice) => {
    if(userWin === "true")
    {
        console.log("You win !");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!! :) . Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        }
    else{
        console.log("You loose! , Computer Won!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`Computer won! , you lose :( . computer ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    console.log("user choice =" , userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =" , compChoice);
    if(userChoice === compChoice){
        //Draw game
        drawGame();
    }
    else{
        let userWin = "true";
        if(userChoice === "rock")
        {
            //comp choice --> scissor , paper
            // userWin = compChoice === "paper" ? false : true;
            if(compChoice === "paper")
            {
                userWin = "false";
            }
            else{
                userWin= "true";
            }
        }
        else if(userChoice === "paper")
        {
            //comp choice --> scissor , rock 
            // userWin = compChoice === "scissors"?  false : true ;
            if(compChoice === "scissors")
            {
                userWin = "false";
            }
            else 
            {
                userWin = "true";
            }
        }
        else 
        {
            //comp choice --> rock , paper 
            // userWin = compChoice === "rock" ? false : true;     
            if(compChoice === "rock")
                {
                    userWin = "false";
                }  
            else{
                userWin = "true";
            }    
        }

        showWin(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked" , userChoice);
        playGame(userChoice);
    });
});

