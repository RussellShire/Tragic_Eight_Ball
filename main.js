let userName = 'Russell';
let userQuestion = 'Will I win the lottery?';

// Arrays of text for 8 Ball to say
const eightBallAnswers = ['It is certain', 'You already know this', 'I sincererly hope not', 'Unfortunately, yes', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes']
const eightBallThinking = ['I shall think on this', 'Patenice while I predict your pathetic future', `I knew you would ask that, classic ${userName}`, 'How unimaginative', 'A question barely worth my talents, but money is money', 'A most intriguing question. Makes a change', 'How, novel, I shall investigate fate on your behalf']

// A function that takes an array and returns a random number between zero and the length of an array-1
const getRandArrayIndex = (array) => {
  return Math.floor(Math.random()*(array.length-1));
  }

// A function that takes the results of getRandArrayIndex and prints the corresponding array element
const logRandArrayElem = (array) => {
  return console.log(array[getRandArrayIndex(array)]);
  }



//userName != '' ? console.log(`Welcome ${userName}, what brings you before the fateweaver?`) : console.log('Welcome');

//console.log(`You're asking the almighty all-knowing magic 8 Ball '${userQuestion.replace(' I ', ` ${userName} `)}'`)

//logRandArrayElem(eightBallThinking);
//logRandArrayElem(eightBallAnswers);

const button = document.getElementById('button1');
const inputBox = document.getElementById('input');
let userInput = '';
const eightBallSpeak = document.querySelector('.edit-text')

// Assigns the input value to userInput when button is pressed, then clears the input box
button.addEventListener('click', function(userInput){
  userInput = inputBox.value
  inputBox.value = ''; // clears the box 
  speaking(`hello ${userInput}`)
});


function speaking(text) {
  eightBallSpeak.textContent = text;
}
