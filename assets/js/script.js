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

const pgResultClass = document.querySelector('.result-game');

let housePickArr = ['paper', 'scissors', "rock"];



/*     -----Events-----     */
btnPaper.addEventListener('click', () => {    

    pgPickClass.style.visibility = "hidden";
    pgResultClass.style.visibility = "visible";

    userPickLoad('paper', './assets/images/icon-paper.svg');

    setTimeout(() => {  housePickRandon('paper'); }, 1000);
});

btnScissors.addEventListener('click', () => {

    pgPickClass.style.visibility = "hidden";
    pgResultClass.style.visibility = "visible";  

    userPickLoad('scissors', './assets/images/icon-scissors.svg');

    setTimeout(() => {  housePickRandon('scissors'); }, 1000);
});

btnRock.addEventListener('click', () => {

    pgPickClass.style.visibility = "hidden";
    pgResultClass.style.visibility = "visible";  

    userPickLoad('rock', './assets/images/icon-rock.svg');

    setTimeout(() => {  housePickRandon('rock'); }, 1000);
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


/*
0 - Paper
1 - Scissor
2 - Rock
*/

function validationGame(userPick, housePick) {

    if(userPick == housePick) {
        console.log("Empate");

    } else if((userPick == 'paper') && (housePick == 'rock')) {

        console.log("usuário ganha");

    } else if ((userPick == 'paper') && (housePick == 'scissors')) {

        console.log("usuário perde");

    } else if ((userPick == 'scissors') && (housePick == 'paper')) {

        console.log("usuário ganha");

    } else if ((userPick == 'scissors') && (housePick == 'rock')) {

        console.log("usuário perde");

    } else if ((userPick == 'rock') && (housePick == 'scissors')) {

        console.log("usuário ganha");

    } else if ((userPick == 'rock') && (housePick == 'paper')) {

        console.log("usuário perde");

    }
}