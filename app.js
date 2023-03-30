const typing_text = document.getElementById("para");
const inputField = document.querySelector('.container .input-field');
const errorTag = document.querySelector('.errors span');
const timeTag = document.querySelector('.time span');
const wpmTag = document.querySelector('.wpm span');
const cpmTag = document.querySelector('.cpm span');
const button = document.querySelector('button');
const urlSearchParams = new URLSearchParams(window.location.search);

// Get the value of the userInput parameter
const userInput = urlSearchParams.get("userInput");


let characterIndex = 0;
let errors = 0;
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let isTyping = 0;

var cursor = document.getElementById("cursor");
var paraText = para.innerHTML;
var index = 0;

setInterval(function() {
    if (index == paraText.length) {
        cursor.style.display = "none"; // hide the cursor when the text is fully displayed
        return;
    } else {
        cursor.style.display = "inline"; // show the cursor when there is still text to display
    }
    var char = paraText.charAt(index);
    typing_text.innerHTML += char;
    index++;
}, 100); // set the speed of the typing effect (in milliseconds)

function randomParagraph(){
    const randomNum = Math.floor(Math.random() * 6) + 1;
    var d = paragraphs[userInput][randomNum];
    typing_text.innerHTML = "";

    // d = d.replace("\n" , "<br>");
    d = d.replace(/\n/g, "\n");
    d.split("").forEach((span) => {
        let spanTag = `<span>${span}</span>`;
        console.log(span);
        typing_text.innerHTML += spanTag;
    });
    typing_text.innerHTML = "<pre>" + typing_text.innerHTML + "</pre>";
    typing_text.querySelectorAll('span')[0].classList.add('active');

    document.addEventListener('keydown', () => inputField.focus());
    typing_text.addEventListener('click', () => inputField.focus());
}
randomParagraph();

function initTyping(){
    const characters = typing_text.querySelectorAll('span');
    
    let typedCharacter = inputField.value.split("")[characterIndex];

    if(characterIndex < characters.length - 1 && timeLeft > 0){
        if(!isTyping){
            timer = setInterval(initTimer, 1000);
            isTyping = true;   
        }
    
        if(typedCharacter == null){//if user typed backspace
            characterIndex--;
    
            if(characters[characterIndex].classList.contains('incorrect')){
                errors--;
            }
    
            characters[characterIndex].classList.remove('correct', 'incorrect');
        }
        else{
            if(characters[characterIndex].innerText === typedCharacter){
                characters[characterIndex].classList.add('correct')
            }
            else{
                errors++
                characters[characterIndex].classList.add('incorrect')
            }
            characterIndex++;
        }
    
    
        characters.forEach(span => span.classList.remove('active'));
        characters[characterIndex].classList.add('active');
    
        errorTag.innerText = errors;
    
        cpmTag.innerText = characterIndex - errors;//cpm will not count errors
    
        let wpm = Math.round((((characterIndex - errors) / 5) / (maxTime - timeLeft)) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
        wpmTag.innerText = wpm;
    }
    else{
        inputField.value = "";
        clearInterval(timer);
    }
    
}

inputField.addEventListener('input', initTyping);

function initTimer(){
    if(timeLeft > 0){
        timeLeft--;
        timeTag.innerText = timeLeft;
    }else{
        clearInterval(timer);
    }
}

function resetGame(){
    randomParagraph()
    inputField.value = "";
    clearInterval(timer);
    timeLeft = maxTime;
    characterIndex = 0;
    errors = 0;
    isTyping = 0;
    timeTag.innerText = timeLeft;
    errorTag.innerText = errors;
    wpmTag.innerText = 0;
    cpmTag.innerText = 0;
}

button.addEventListener('click', resetGame);