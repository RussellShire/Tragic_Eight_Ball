// export default class Model {
//     constructor() {
//         this.userInput = new Map();
//         this.eightBall = new Map();

//         // This will be a bit fat, could be in it's own module and fed in through a method?
//         this.eightBall.set('welcomes', ['1','2','3'])
//         this.eightBall.set('greetings', ['1','2','3'])
//         this.eightBall.set('questionInvites', ['1','2','3'])
//         this.eightBall.set('thoughts', ['1','2','3'])
//         this.eightBall.set('answers', ['1','2','3'])
//     }
    
//     hello() {
//         return "Hello, I am the model"
//     }

//     getRandomResponse() {
//        // Takes keyvalue from the eightBall Map and randomises response
//     }

//     setUserInput(userInput, state) {
//         // takes user input and adds it to the map depending on state
//         switch (state) {
//             case 'welcome':
//                 this.userInput.set('name', userInput)
//                 break;
//             case 'inviteQuestion':
//                 this.userInput.set('question', userInput)
        
//         }
//     }
// }

export class EightBallContext {
    constructor() {
        this.userName = ''
        this.question = ''
        this.currentState = new WelcomeState(this)
        }

    speak() {
        // return a string
        return this.currentState.speak()
    }

    ponder(response) {
        // return a string
        this.currentState.ponder(response)
    }
}

export function getRandomElement(array){
    return array[Math.floor(Math.random()*array.length)]
}

export class WelcomeState {
    constructor(eightBall){
        this.eightBall = eightBall
        this.welcomes = [
            'Who comes before me?', 
            'Who disturbs the allknowing?', 
            'Who are you that disturbs my slumber?', 
            'Another petitioner for my predictive powers, state your name mortal.', 
            'State your name and I shall consider a request.'
        ]
    }
    speak() {
        return getRandomElement(this.welcomes)
        // 'What is your name?'
    }

    ponder(response) {
        this.eightBall.userName = response
        this.eightBall.currentState = new QuestionState(this.eightBall)
    }
}

export class QuestionState {
    constructor(eightBall) {
        this.eightBall = eightBall
    }
    speak() {
        return `So, what do you want to know ${this.eightBall.userName}?`
    }

    ponder(response) {
        this.eightBall.question = response
        this.eightBall.currentState = new ThinkingState(this.eightBall)
    }
}

export class ThinkingState {
    constructor(eightBall) {
        this.eightBall = eightBall
        this.thinking = [
            'I shall think on this', 
            'Patenice while I predict your pathetic future', 
            `I knew you would ask that, classic ${this.eightBall.userName}`, 
            'How unimaginative', 
            'A question barely worth my talents, but money is money', 
            'A most intriguing question. Makes a change', 
            'How, novel, I shall investigate fate on your behalf'
        ]
        this.thought = getRandomElement(this.thinking)
    }

    speak() {
        this.ponder()
        // const answer = 
        return this.thought
        // add prompt for another question
    }

    ponder() {
        //this.eightBall.question = response
        const delay = () => {
            this.eightBall.currentState = new AnswerState(this.eightBall)
            // this.eightBall.speak()
        }
        
        setTimeout(delay, 3000) 
    }
}

export class AnswerState {
    constructor(eightBall) {
        this.eightBall = eightBall
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
            'Signs point to yes'
        ]
        this.answer = getRandomElement(this.answers)
    }
    speak() {
        this.ponder()
        return this.answer
        // add prompt for another question
    }

    ponder(response) {
        const delay = () => {
            this.eightBall.currentState = new FollowQuestionState(this.eightBall)
        }
        
        setTimeout(delay, 3000)
        
    }
}

export class FollowQuestionState {
    constructor(eightBall) {
        this.eightBall = eightBall
    }
    speak() {
        return `Do you have another question for me ${this.eightBall.userName}?`
    }

    ponder(response) {
        this.eightBall.question = response
        this.eightBall.currentState = new ThinkingState(this.eightBall)
    }
}