import EightBallContext from '../mvc/model.js';
import { getRandomElement } from '../mvc/model.js';

describe('EightBall', () => {
  const eightBall = new EightBallContext();

  it('changes state in correct order', () => {
    expect(eightBall.currentState.stateName).toBe('welcomeState');

    eightBall.ponder('Russ');
    expect(eightBall.currentState.stateName).toBe('questionState');

    eightBall.ponder('What is going on');
    expect(eightBall.currentState.stateName).toBe('answerState');

    eightBall.ponder('What else is going on');
    expect(eightBall.currentState.stateName).toBe('questionState');
  });

  it('speaks and ponders', () => {
    const eightBall = new EightBallContext();

    expect(Array.isArray(eightBall.speak())).toBeTruthy();

    eightBall.ponder('Russ');
    expect(Array.isArray(eightBall.speak())).toBeTruthy();

    eightBall.ponder('What is going on');
    expect(Array.isArray(eightBall.speak())).toBeTruthy();

    eightBall.ponder('What else is going on');
    expect(Array.isArray(eightBall.speak())).toBeTruthy();

    eightBall.ponder('is there anything else is going on');
    expect(Array.isArray(eightBall.speak())).toBeTruthy();
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
    expect(random).toBe(array.filter((elm) => elm === random)[0]);
  });
});
