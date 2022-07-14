// All my variables
let inputArray = ['', ''];
let userName = inputArray[0];
let userCounter = 0;
let userInput = inputArray[userCounter];

const button = document.getElementById('button1');
const inputBox = document.getElementById('input');
const eightBallSpeak = document.querySelector('.edit-text');

// Arrays of text for 8 Ball to say
const eightBallAnswers = ['It is certain', 'You already know this', 'I sincererly hope not', 'Unfortunately, yes', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes']
const eightBallThinking = ['I shall think on this', 'Patenice while I predict your pathetic future', `I knew you would ask that, classic ${userName}`, 'How unimaginative', 'A question barely worth my talents, but money is money', 'A most intriguing question. Makes a change', 'How, novel, I shall investigate fate on your behalf']
const eightBallWelcome = [`Welcome ${userName} what knowledge do you seek?`]
const eightBallGreeting = ['Who comes before me?', 'Who disturbs the allknowing?', 'Who are you that distrubs my slumber?']

// an array of the arrays of text - so the counter can cycle through them
const speakingArray = [eightBallGreeting, eightBallWelcome,eightBallAnswers];

// A function that takes an array and returns a random number between zero and the length of an array-1
const getRandArrayIndex = array => Math.floor(Math.random()*(array.length));

// A function that takes the results of getRandArrayIndex and prints the corresponding array element
const logRandArrayElem = array => array[getRandArrayIndex(array)];

// A function that sends text to the paragraph above the input box
const speaking = text => eightBallSpeak.textContent = text;

/*BIG FUNCTION: Adds the user input to userCounter position in the array
If this is 0 or 1 it'll then +1 to userCounter
It then calls speakingArray[userCounter] moving the text forward one stage
If user counter is 2 then it records the input and doesn't move the counter forwards
This goes to 3 because there are currently 3 phases of speech in the speakingArray
This is my homebrew solution for using the same click on a button to do multiple things
*/
//QUESTION FOR GRAHAM - Why isn't name being assigned? I think it's a scope issue?
/*QUESTION FOR GRAHAM: defined a function within a function, is that bad practice? 
I did it so it's right there and you can see it in one place*/

const run = function() {
  inputArray[userCounter] = inputBox.value //adds the input to the inputArray at the position of userCounter
      userName = inputArray[0];
      if(userCounter <= 1) { //if statement allows the first two questions to be saved, then stops the counter
        userCounter ++
        const inputSave = function() { // creating this as a function so it can be resued in the else statment below
        userInput = inputArray[userCounter] //necessary to assign the value outside the function
        inputBox.value = '' // clears the input box
        speaking(logRandArrayElem(speakingArray[userCounter]))};
      } else {
        inputSave();
      }
};

//QUESTION FOR GRAHAM: This is technically the start of my code. Where is best practice for it to be?
/*kicking off with a nested function
speaking - edits the Dom
logRandArrayElem - picks a random index from and array*/
speaking(logRandArrayElem(eightBallGreeting));

//QUESTION FOR GRAHAM: Can I combine two event listeners that trigger the same event?
// EVENT LISTENERS - two, one for button click and one for keypress Enter, both run big function run 
button.addEventListener('click', () => {
  run();  
  });

inputBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') { 
    run();  
    }});