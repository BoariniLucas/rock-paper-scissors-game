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

const pgResultClass = document.querySelector('.result-game');

let housePickArr = ['paper', 'scissors', "rock"];



/*     -----Events-----     */
btnPaper.addEventListener('click', () => {    

    pgPickClass.style.visibility = "hidden";
    pgResultClass.style.visibility = "visible";

    userPickLoad('paper', './assets/images/icon-paper.svg');

    
});

btnScissors.addEventListener('click', () => {

    pgPickClass.style.visibility = "hidden";
    pgResultClass.style.visibility = "visible";  

    userPickLoad('scissors', './assets/images/icon-scissors.svg');

    housePickRandon();
});

btnRock.addEventListener('click', () => {

    pgPickClass.style.visibility = "hidden";
    pgResultClass.style.visibility = "visible";  

    userPickLoad('rock', './assets/images/icon-rock.svg');

    housePickRandon();
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

function housePickRandon() {

    let housePick = Math.floor(Math.random() * housePickArr.length);

    if(housePickArr[housePick] == "paper") {

        housePickLoad('paper', './assets/images/icon-paper.svg');

    } else if(housePickArr[housePick] == "rock") {

        housePickLoad('rock', './assets/images/icon-rock.svg');

    } else {
        housePickLoad('scissors', './assets/images/icon-scissors.svg');
    }
}