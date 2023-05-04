const btnRules = document.querySelector('#btn-rules');
const btnCloseRules = document.querySelector('#btn-close-rules');

btnRules.addEventListener('click', () => {

    const rulesClass = document.querySelector('.rules');

    rulesClass.style.visibility = "visible";
});

btnCloseRules.addEventListener('click', () => {

    const rulesClass = document.querySelector('.rules');

    rulesClass.style.visibility = "hidden";
});