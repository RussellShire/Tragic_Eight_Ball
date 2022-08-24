import EightBallContext from '../mvc/model.js'
import { getRandomElement }  from '../mvc/model.js'

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

    it.skip("speaks", () => {
        console.log(eightBall.speak())
        eightBall.ponder('Russ')
        console.log(eightBall.speak())
        eightBall.ponder('What is going on')
        console.log(eightBall)
    })
})

describe("AnswerState", () => {
    const eightBall = new EightBallContext()
    
    it("answers correctly", () => {
        eightBall.ponder('Russ')
        // console.log(eightBall.name)
        eightBall.ponder('What is going on')
        console.log(eightBall.currentState)
    })
})
    
describe("getRandomElement", () => {
    it("returns a random array element", () => {
        const array = [
            'I shall think on this', 
            'Patenice while I predict your pathetic future', 
            `I knew you would ask that, classic`, 
            'How unimaginative', 
            'A question barely worth my talents, but money is money', 
            'A most intriguing question. Makes a change', 
            `How, novel, I shall investigate fate on your behalf`
        ]
        const random = getRandomElement(array)
        console.log(random)
        expect(random).toBe(array.filter(elm => elm === random)[0])  
    })
})