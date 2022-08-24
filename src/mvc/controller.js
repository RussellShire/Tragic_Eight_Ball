export default class Controller {
    constructor(model, view) {
        this.eightBall = model
        this.view = view
        this.controller = this
    }

    eightBallSpeaking(){
        const speech = this.eightBall.speak()
        
        this.view.render(this.controller, speech)
    }

    eightBallListening(response){
        this.eightBall.ponder(response)
        
        this.eightBallSpeaking()
    }
}
