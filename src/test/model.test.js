import Model from '../mvc/model.js'
import { EightBallContext } from '../mvc/model.js'
import { getRandomElement } from '../mvc/model.js'

// describe("model", () => {
//     const model = new Model()

//     it("says hello pass example", () => {
//         expect(model.hello()).toBe("Hello, I am the model")
//     })

//     it.skip("says hello fail example", () => {
//         expect(model.hello()).toBe("Yo") // how uncouth
//     })
// })

describe("eightBallContext", () => {
    const eightBall = new EightBallContext()

    it("speaks", () => {
        console.log(eightBall.speak())
        eightBall.ponder('Russ')
        console.log(eightBall.speak())
        eightBall.ponder('What is going on')
        console.log(eightBall)
    })

    // it("ponders", () => {
    //     eightBall.ponder('Russell')
    //     console.log(eightBall)
    // })

describe("getRandomElement", () => {
    it("returns a random array element", () => {
        const array = ['zero', 'one', 'two', 'three']
        const random = getRandomElement(array)
        
        expect(random).toBe(array.filter(elm => elm === random)[0])  
    })
})



})
