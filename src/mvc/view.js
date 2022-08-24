export default class View {
   
    renderContainer(){
        let newContainer = ''
        if(document.querySelector('.container') === null) {
            newContainer = document.createElement('div')
            newContainer.classList.add('container')
            document.body.appendChild(newContainer)
        }

        const container = document.querySelector('.container')
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
    }

    renderSpeech(speech){
        const container = document.querySelector('.container')
        
        // Creating speaking element 
        const output = document.createElement('div')
        output.classList.add('eightBall-output')
        container.appendChild(output)

        // Speaking by looping through the array with a delay
        speech.forEach((speechPart, delay) => {
            setTimeout(() => {
                output.textContent = speechPart
            }, (delay * (3000+speechPart.length * 20)));
        })
    }

    renderEightBall(){
        const container = document.querySelector('.container')

        const eightBallDiv = document.createElement('div')
        const blackCircle = document.createElement('div')
        const whiteCircle = document.createElement('div')

        eightBallDiv.classList.add('ball-div')
        blackCircle.classList.add('black-circle')
        whiteCircle.classList.add('white-circle')

        whiteCircle.textContent = '8'

        eightBallDiv.appendChild(blackCircle)
        eightBallDiv.appendChild(whiteCircle)
        container.appendChild(eightBallDiv)

    }

    renderForm(controller){
        const container = document.querySelector('.container')
        
        // form
        const form = document.createElement('form')
        form.classList.add('form')
        
        // input box
        const formInput = document.createElement('input');
        formInput.setAttribute('type', 'text');
        formInput.setAttribute('name', 'user-input');
        formInput.setAttribute('placeholder', 'Communicate with fate here');
        formInput.classList.add('form-input');
        form.appendChild(formInput);

        // add the button
        const formButton = document.createElement('button');
        formButton.setAttribute('type', 'submit');
        formButton.textContent = 'begin';
        formButton.classList.add('form-button', 'button-styling');
        form.appendChild(formButton);

        // add form to body
        container.appendChild(form)

        // event listener
        const userInput = (ev) => {
            const userInput = formInput.value;
            form.reset();
            ev.preventDefault();
            controller.eightBallListening(userInput);

            const blackCircle = document.querySelector('.black-circle')
            const whiteCircle = document.querySelector('.white-circle')

            blackCircle.classList.add('circle')
            whiteCircle.classList.add('circle')
          };
    
          form.addEventListener('submit', (ev) => userInput(ev));
    }

    render(controller, speech){

        this.renderContainer()
        this.renderEightBall()
        this.renderSpeech(speech)
        this.renderForm(controller)
    }
}
