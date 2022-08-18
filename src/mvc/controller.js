export default class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }

    hello() {
        return "Hello, I am the controller"
    }

    sayHelloFromEveryone() {
        console.log(this.hello())
        console.log(this.model.hello())
        console.log(this.view.hello())
    }

    mediator(userInput) {
        let state = 'welcome'

        switch (state){
            case 'welcome':
                // Call model functions with userInput
                state = 'greeting'
                break;
            case 'greeting':
                // Call model functions with userInput
                state = 'inviteQuestion'
                break;
            case 'inviteQuestion':
                // Call model functions with userInput
                state = 'thinking'
                break;
            case 'thinking':
                // Call model functions with userInput
                state = 'answer'
                break;
            case 'answer':
                // Call model functions with userInput
                state = 'inviteQuestion'
                break;    
            }
        
            const controller = this;
        this.view.render(controller, mediatorResponse) // taking output from the model + sending controller through
    
    }
}
