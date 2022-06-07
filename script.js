// visuals

const rockSel= document.querySelector('.pRock');
const paperSel= document.querySelector('.pPaper');
const scissorsSel= document.querySelector('.pScissors');
const restart = document.querySelector('button');

restart.addEventListener('click', function() {
    console.log('CLEAR');
    rockSel.classList.remove('active');
    paperSel.classList.remove('active');
    scissorsSel.classList.remove('active');
})



// game logic
const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;

options.forEach((option) => {
    option.addEventListener("click", function () {

        let pInput;

        rockSel.style.opacity = 0.4;
        paperSel.style.opacity = 0.4;
        scissorsSel.style.opacity = 0.4;

        const cSelectRock = document.querySelector(".cRock");
        const cSelectPaper = document.querySelector(".cPaper");
        const cSelectScissors = document.querySelector(".cScissors");


        cSelectRock.style.opacity=0.4;
        cSelectPaper.style.opacity=0.4;
        cSelectScissors.style.opacity=0.4;

        if(this.classList.contains("pRock")) {
            this.style.opacity = 1
            pInput = 'rock';
        } else if(this.classList.contains("pPaper")) {
            this.style.opacity = 1;
            pInput = 'paper';
        } else if(this.classList.contains("pScissors")) {
            this.style.opacity = 1;
            pInput = 'scissors';
        }

        const cOptions = ['rock', 'paper', 'scissors'];
        const cInput = cOptions[Math.floor(Math.random()*cOptions.length)];



        if(cInput == 'rock') {
            cSelectRock.style.opacity=1;
        } else if (cInput == 'paper') {
            cSelectPaper.style.opacity=1;
        } else if (cInput == 'scissors') {
            cSelectScissors.style.opacity=1;
        }

        playRound(pInput, cInput);
        updateScore();
        checkWinner(pScore,cScore);
    })

    

})


function playRound(pInput, cInput) {

    // const pOptions = ['rock', 'paper', 'scissors'];
    // const pInput = pOptions[Math.floor(Math.random()*3)];

    // const cOptions = ['rock', 'paper', 'scissors'];
    // const cInput = cOptions[Math.floor(Math.random()*3)];

    if(pInput === cInput){
        return;
    }
    if(pInput === 'rock') {
        if(cInput === 'scissors'){
            pScore++;//player win
        }
        else {
            cScore++;//computer win
        }
    }
    else if(pInput === 'paper') {
        if(cInput === 'rock'){
            pScore++;//player win
        }
        else {
            cScore++;//computer win
        }
    }
    else if(pInput === 'scissors') {
        if(cInput === 'paper'){
            pScore++; //player win
        }
        else {
            cScore++; //computer win
        }
    }

}


function updateScore() {
    document.getElementById("pScore").textContent = pScore;
    document.getElementById("cScore").textContent = cScore;

}

function checkWinner(pScore, cScore) {
    if(pScore === 5){

        alert('PLAYER WINS!')

    } else if (cScore === 5){

        alert('COMPUTER WINS!')
    }

    
}

