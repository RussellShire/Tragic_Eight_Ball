import EightBallContext from '../mvc/model.js';
import { getRandomElement } from '../mvc/model.js';

describe('eightBallContext', () => {
  const eightBall = new EightBallContext();

  it.skip('speaks', () => {
    console.log(eightBall.speak());
    eightBall.ponder('Russ');
    console.log(eightBall.speak());
    eightBall.ponder('What is going on');
    console.log(eightBall.speak());
  });
});

describe('AnswerState', () => {
  const eightBall = new EightBallContext();

  it('changes state', () => {
    expect(eightBall.currentState.stateName).toBe('welcomeState')
    
    eightBall.ponder('Russ');
    expect(eightBall.currentState.stateName).toBe('questionState')
    
    eightBall.ponder('What is going on');
    expect(eightBall.currentState.stateName).toBe('answerState')

    eightBall.ponder('What else is going on');
    expect(eightBall.currentState.stateName).toBe('questionState')
  });
});

describe('getRandomElement', () => {
  it('returns a random array element', () => {
    const array = [
      'I shall think on this',
      'Patenice while I predict your pathetic future',
      `I knew you would ask that, classic`,
      'How unimaginative',
      'A question barely worth my talents, but money is money',
      'A most intriguing question. Makes a change',
      `How, novel, I shall investigate fate on your behalf`,
    ];
    const random = getRandomElement(array);
    // console.log(random);
    expect(random).toBe(array.filter((elm) => elm === random)[0]);
  });
});
