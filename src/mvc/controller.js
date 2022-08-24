export default class Controller {
    constructor(model, view) {
        this.eightBall = model
        this.view = view
        this.controller = this
    }

    // stateMonitoring(){
    //     let state = this.eightBall.currentState
        
    //     const stateCheck = () => {
            
    //         let counter = 0
    //         clearInterval(stateCheckInterval)
    //         if(counter === 1) {
    //             clearInterval(stateCheckInterval)
    //         }

    //         if(state != this.eightBall.currentState){
    //             // clearInterval(stateCheckInterval)
    //             state = this.eightBall.currentState
    //             counter =+ 1
    //             const speech = this.eightBall.speak()
    //             this.view.render(this.controller, speech)                
    //         }
    //         //clearInterval(stateCheckInterval)
    //     }
    //     const stateCheckInterval = setInterval(stateCheck, 5000)
    // }
                                      
    eightBallSpeaking(){
        const speech = this.eightBall.speak()
        
        this.view.render(this.controller, speech)
    }

    eightBallListening(response){
        this.eightBall.ponder(response)
        
        this.eightBallSpeaking()
    }

    // mediator(userInput) {
    //     let state = 'welcome'

    //     switch (state){
    //         case 'welcome':
    //             // Call model functions with userInput
    //             state = 'greeting'
    //             break;
    //         case 'greeting':
    //             // Call model functions with userInput
    //             state = 'inviteQuestion'
    //             break;
    //         case 'inviteQuestion':
    //             // Call model functions with userInput
    //             state = 'thinking'
    //             break;
    //         case 'thinking':
    //             // Call model functions with userInput
    //             state = 'answer'
    //             break;
    //         case 'answer':
    //             // Call model functions with userInput
    //             state = 'inviteQuestion'
    //             break;    
    //         }
        
        // const controller = this;
    //     this.view.render(controller, mediatorResponse) // taking output from the model + sending controller through
    // }
}
