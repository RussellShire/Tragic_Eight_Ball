export default class Model {
    constructor() {
        this.userInput = new Map();
        this.eightBall = new Map();

        // This will be a bit fat, could be in it's own module and fed in through a method?
        this.eightBall.set('welcomes', ['1','2','3'])
        this.eightBall.set('greetings', ['1','2','3'])
        this.eightBall.set('questionInvites', ['1','2','3'])
        this.eightBall.set('thoughts', ['1','2','3'])
        this.eightBall.set('answers', ['1','2','3'])
    }
    
    hello() {
        return "Hello, I am the model"
    }

    getRandomResponse() {
       // Takes keyvalue from the eightBall Map and randomises response
    }

    setUserInput(userInput, state) {
        // takes user input and adds it to the map depending on state
        switch (state) {
            case 'welcome':
                this.userInput.set('name', userInput)
                break;
            case 'inviteQuestion':
                this.userInput.set('question', userInput)
        
        }
    }
}
