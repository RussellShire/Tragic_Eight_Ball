import EightBallContext from './mvc/model.js'
import View from './mvc/view.js'
import Controller from './mvc/controller.js'


function main() {
    const m = new EightBallContext()
    const v = new View()
    const c = new Controller(m, v)

    c.eightBallSpeaking()
}

main()
