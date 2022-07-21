// All my variables
let userName = '',
  userCounter = 0;

// Document
const button = document.getElementById('button1'),
  inputBox = document.getElementById('input'),
  eightBallSpeak = document.getElementById('edit-text-id');

// Arrays of text for 8 Ball to say
const eightBallAnswers = ['It is certain', 'You already know this', 'I sincererly hope not', 'The answer is obvious', 'Unfortunately, yes', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes']
const eightBallThinking = ['I shall think on this', 'Patenice while I predict your pathetic future', `I knew you would ask that, classic ${userName}`, 'How unimaginative', 'A question barely worth my talents, but money is money', 'A most intriguing question. Makes a change', 'How, novel, I shall investigate fate on your behalf']
const eightBallWelcome = [];
const eightBallGreeting = ['Who comes before me?', 'Who disturbs the allknowing?', 'Who are you that disturbs my slumber?', 'Another petitioner for my predictive powers, state your name mortal.', 'State your name and I shall consider a request.']
// an array of the arrays of text - so the counter can cycle through them
const speakingArray = [eightBallGreeting, eightBallWelcome,eightBallAnswers];

// A function that takes an array and returns a random item between zero and the length of the array
const logRandArrayElem = array => array[Math.floor(Math.random()*(array.length))]

// A function that sends text to the paragraph above the input box
const speaking = text => eightBallSpeak.textContent = text

/*BIG FUNCTION: Adds the user input to userCounter position in the array
If this is 0 or 1 it'll then +1 to userCounter
It then calls speakingArray[userCounter] moving the text forward one stage
If user counter is 2 then it records the input and doesn't move the counter forwards
This goes to 3 because there are currently 3 phases of speech in the speakingArray
This is my homebrew solution for using the same click on a button to do multiple things
*/
const setReply = () => {
  localStorage.setItem('userName', inputBox.value); //adds the input to the inputArray at the position of userCounter
  inputBox.value = '' // clears the input box
  eightBallWelcome.push(`Welcome ${localStorage.getItem('userName')}, what do you want to know?`) //pushing into array to get it to call out of scope, seems crazy but nothing else works
    speaking(logRandArrayElem(speakingArray[userCounter+1])) //returns a random statement from the array that matches user counter+1
  if(userCounter <= 1) { //if statement allows the first two questions to be saved, then stops the counter
        userCounter ++
  }};

// EVENT LISTENERS - two, one for button click and one for keypress Enter, both run big function run 
button.addEventListener('click', () => {
  setReply();  
  });

inputBox.addEventListener('keypress', function(e) {
 if (e.key === 'Enter') { 
  setReply()     
 }});

//QUESTION FOR GRAHAM: This is technically the start of my code. Where is best practice for it to be?
/*kicking off with a nested function
speaking - edits the Dom
logRandArrayElem - picks a random index from and array*/
speaking(logRandArrayElem(eightBallGreeting));

