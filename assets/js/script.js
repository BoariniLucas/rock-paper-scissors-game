const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');
const btnRock = document.querySelector('#btn-rock');

const btnRules = document.querySelector('#btn-rules');
const btnCloseRules = document.querySelector('#btn-close-rules');

const pgPickClass = document.querySelector('.pick-page');
const userPick = document.querySelector('#user-pick');
const userPickImg = document.querySelector('#user-pick-img');
const housePick = document.querySelector('#house-pick');
const housePickImg = document.querySelector('#house-pick-img');
const housePickedClass = document.querySelector('.house-picked');

const resultClass = document.querySelector('.result');
const resultText = document.querySelector('.result-text');
const btnPlayAgain = document.querySelector('#btn-play-again');

const pgResultClass = document.querySelector('.result-game');
const scoreNumber = document.querySelector('.score-number');

let housePickArr = ['paper', 'scissors', "rock"];
let score = 0;

loadPage();


/*     -----Events-----     */
btnPaper.addEventListener('click', () => {    

    pgPickClass.style.visibility = "hidden";
    pgResultClass.style.visibility = "visible";

    userPickLoad('paper', './assets/images/icon-paper.svg');

    setTimeout(() => { housePickRandon('paper'); }, 1000);
    setTimeout(() => { showResult(); }, 2000);
});

btnScissors.addEventListener('click', () => {

    pgPickClass.style.visibility = "hidden";
    pgResultClass.style.visibility = "visible";  

    userPickLoad('scissors', './assets/images/icon-scissors.svg');

    setTimeout(() => {  housePickRandon('scissors'); }, 1000);
    setTimeout(() => { showResult(); }, 2000);
});

btnRock.addEventListener('click', () => {

    pgPickClass.style.visibility = "hidden";
    pgResultClass.style.visibility = "visible";  

    userPickLoad('rock', './assets/images/icon-rock.svg');

    setTimeout(() => {  housePickRandon('rock'); }, 1000);
    setTimeout(() => { showResult(); }, 2000);
});

btnPlayAgain.addEventListener('click', () => {

    resetGame();

});

btnRules.addEventListener('click', () => {

    const rulesClass = document.querySelector('.rules');

    rulesClass.style.visibility = "visible";
});

btnCloseRules.addEventListener('click', () => {

    const rulesClass = document.querySelector('.rules');

    rulesClass.style.visibility = "hidden";
});



/*     -----Functions-----     */

function userPickLoad(pick, url) {

    userPick.classList.add(pick);
    userPickImg.setAttribute('src', url);
}

function housePickLoad(pick, url) {

    housePick.classList.add(pick);
    housePickImg.setAttribute('src', url);
}

function housePickRandon(userPick) {

    let housePick = Math.floor(Math.random() * housePickArr.length);

    if(housePickArr[housePick] == "paper") {

        housePickedClass.style.visibility = "visible";
        housePickLoad('paper', './assets/images/icon-paper.svg');

        validationGame(userPick, housePickArr[housePick]);

    } else if(housePickArr[housePick] == "rock") {

        housePickedClass.style.visibility = "visible";
        housePickLoad('rock', './assets/images/icon-rock.svg');

        validationGame(userPick, housePickArr[housePick]);

    } else {

        housePickedClass.style.visibility = "visible";
        housePickLoad('scissors', './assets/images/icon-scissors.svg');

        validationGame(userPick, housePickArr[housePick]);
    }
}

function validationGame(varUserPick, varHousePick) {

    if(varUserPick == varHousePick) {
        resultText.innerHTML = "try again";       

    } else if((varUserPick == 'paper') && (varHousePick == 'rock')) {

        resultText.innerHTML = "you win";
        userPick.classList.add('winner');

        score += 1;

    } else if ((varUserPick == 'paper') && (varHousePick == 'scissors')) {

        resultText.innerHTML = "you lose";
        housePick.classList.add('winner');

    } else if ((varUserPick == 'scissors') && (varHousePick == 'paper')) {

        resultText.innerHTML = "you win";
        userPick.classList.add('winner');

        score += 1;

    } else if ((varUserPick == 'scissors') && (varHousePick == 'rock')) {

        resultText.innerHTML = "you lose";
        housePick.classList.add('winner');

    } else if ((varUserPick == 'rock') && (varHousePick == 'scissors')) {

        resultText.innerHTML = "you win";
        userPick.classList.add('winner');

        score += 1;

    } else if ((varUserPick == 'rock') && (varHousePick == 'paper')) {

        resultText.innerHTML = "you lose";
        housePick.classList.add('winner');
    }

    scoreNumber.innerHTML = score;
    saveScore();
}

function showResult() {

    resultClass.style.display = "flex";
}

function resetGame() {

    resultText.innerHTML = "";
    resultClass.style.display = "none";

    housePick.classList.remove('winner');
    userPick.classList.remove('winner');

    userPick.classList.remove('paper');
    userPick.classList.remove('scissors');
    userPick.classList.remove('rock');

    housePick.classList.remove('paper');
    housePick.classList.remove('scissors');
    housePick.classList.remove('rock');

    housePickedClass.style.visibility = "hidden";
    pgPickClass.style.visibility = "visible";
    pgResultClass.style.visibility = "hidden"; 
}

function saveScore() {
    localStorage.setItem("score", score);
}

function loadPage() {
    let scoreLS = localStorage.getItem("score");
    let scoreConv = JSON.parse(scoreLS);

    if(scoreConv == null) {
        score = 0;
    } else {
        score = scoreConv;
        scoreNumber.innerHTML = score; 
    }
}