export default class EightBallContext {
  constructor() {
    this.stateName = '';
    this.userName = '';
    this.question = '';
    this.currentState = new WelcomeState(this);
  }

  speak() {
    // return a string
    return this.currentState.speak();
  }

  ponder(response) {
    // return a string
    this.currentState.ponder(response);
  }
}

export function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export class WelcomeState {
  constructor(eightBall) {
    this.stateName = 'welcomeState';
    this.eightBall = eightBall;
    this.welcomes = [
      'I am the 8ball, blessed with perfect predictive powers',
      'I am burdened by visions of the future, ask and I will share',
      'Another petitioner for my predictive powers',
      'Cursed with knowledge of the future, I already know your question will be dull',
      'I could do anything, yet this is the best they could think of',
      'Bow before the unfathomable knowledge of the 8ball',
    ];
    this.askName = [
      'Who comes before me?',
      'Who disturbs the allknowing?',
      'Who are you that disturbs my slumber?',
      'State your name mortal.',
      'State your name and I shall consider a request.',
    ];

    this.welcome = getRandomElement(this.welcomes);
    this.askWho = getRandomElement(this.askName);
    this.responses = [];
  }
  speak() {
    this.responses.push(this.welcome);
    this.responses.push(this.askWho);
    return this.responses;
  }

  ponder(response) {
    this.eightBall.userName = response;
    this.eightBall.currentState = new QuestionState(this.eightBall);
  }
}

export class QuestionState {
  constructor(eightBall) {
    this.stateName = 'questionState';
    this.eightBall = eightBall;
    this.questions = [
      `So, what do you want to know ${this.eightBall.userName}?`,
      `Do you have a question ${this.eightBall.userName}? I know it's hard but try not to be dull.`,
    ];
    this.responses = [];
  }
  speak() {
    this.responses.push(getRandomElement(this.questions));
    return this.responses;
  }

  ponder(response) {
    this.eightBall.question = response;
    this.eightBall.currentState = new AnswerState(this.eightBall);
  }
}

export class AnswerState {
  constructor(eightBall) {
    this.stateName = 'answerState';
    this.eightBall = eightBall;
    this.thinking = [
      'I shall think on this',
      'Patenice while I predict your pathetic future',
      `I knew you would ask that, classic ${this.eightBall.userName}`,
      'How unimaginative',
      'A question barely worth my talents, but money is money',
      'A most intriguing question. Makes a change',
      `How, novel, I shall investigate fate on your behalf`,
    ];

    this.answers = [
      'It is certain',
      'You already know this',
      'I sincererly hope not',
      'The answer is obvious',
      'Unfortunately, yes',
      'It is decidedly so',
      'Reply hazy try again',
      'Cannot predict now',
      'Do not count on it',
      'My sources say no',
      'Outlook not so good',
      'Signs point to yes',
    ];

    this.followUps = [
      `Do you have another question for me ${this.eightBall.userName}?`,
      `Is that all you wish to know ${this.eightBall.userName}?`,
      `Surely you can think of a more interesting question ${this.eightBall.userName}?`,
    ];

    this.thought = getRandomElement(this.thinking);
    this.answer = getRandomElement(this.answers);
    this.followUp = getRandomElement(this.followUps);

    this.responses = [];
  }
  speak() {
    this.responses.push(`${this.thought}...`);
    this.responses.push(
      `${this.eightBall.userName}, you asked '${this.eightBall.question}' and I say: ${this.answer}`,
    );
    this.responses.push(this.followUp);

    setTimeout(this.ponder(), 10);
    return this.responses;
  }

  ponder(response) {
    this.eightBall.currentState = new QuestionState(this.eightBall);
  }
}
