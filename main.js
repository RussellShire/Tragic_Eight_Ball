let userName = 'Russell';
const userQuestion = 'Will I win the lottery?';

const eightBallAnswers = ['It is certain', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now', 'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes']

const eightBallThinking = ['I shall think on this', 'Patenice while I predict your pathetic future', `I knew you would ask that, classic ${userName}`, 'How unimaginative', 'A question barely worth my talents, but money is money', 'A most intrieging question. Makes a change', 'How, novel, I shall investigate fate on your behalf']


const randArrayElement = (array) => {
  return Math.floor(Math.random()*(array.length-1));
  }

const randArrayLog = (array) => {
  return console.log(array[randArrayElement(array)]);
  }

userName != '' ? console.log(`Welcome ${userName}, what brings you before the fateweaver?`) : console.log('Welcome');

console.log(`You're asking the almighty all-knowing magic 8 Ball '${userQuestion.replace(' I ', ` ${userName} `)}'`)

randArrayLog(eightBallThinking)
randArrayLog(eightBallAnswers)