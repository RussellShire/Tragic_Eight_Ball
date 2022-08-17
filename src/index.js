import Model from './mvc/model.js'
import View from './mvc/view.js'
import Controller from './mvc/controller.js'

import confetti from 'canvas-confetti';

confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });

function main() {
    const m = new Model()
    const v = new View()
    const c = new Controller(m, v)

    c.sayHelloFromEveryone() // prove to ourselves the wiring all works
}

main()

