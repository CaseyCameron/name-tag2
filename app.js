const userName = document.getElementById('name');
const userNameInput = document.getElementById('change-name-input');
const nameButton = document.getElementById('change-name-button');
const nameCounter = document.getElementById('counter');
let counter = 1;

const userPronoun = document.getElementById('pronouns')
const pronounButton = document.getElementById('change-pronoun-button');
const userPronounInput = document.getElementById('change-pronoun-input');

const changeColorButton = document.getElementById('change-color-button');
const changeFontButton = document.getElementById('change-font-button');


nameButton.addEventListener('click', () => {
    const userTyped = userNameInput.value;
    userName.textContent = userTyped;
    userNameInput.value = '';
    nameCounter.textContent = counter ++ + ' times';
    console.log(counter);
})

pronounButton.addEventListener('click', () => {
    const userTyped = userPronounInput.value;
    userPronoun.textContent = userTyped;
    userPronounInput.value = '';
})

changeColorButton.addEventListener('click', () => {
    const userTyped = userPronounInput.value;
    userPronoun.textContent = userTyped;
    userPronounInput.value = '';
})

changeColorButton.addEventListener('click', () => {
    const randomColor = Math.floor(Math.random()*15777215).toString(16);
    document.getElementById('top-section').style.backgroundColor = "#" + randomColor;
    document.getElementById('bottom-section').style.backgroundColor = "#" + randomColor;
})

changeFontButton.addEventListener('click', () => {
    const newFont = ["Georgia", "Verdana", "Helvetica"];
    const randomFont = Math.floor(Math.random()*3);
    document.getElementById('name').style.fontFamily =newFont[randomFont];
})
