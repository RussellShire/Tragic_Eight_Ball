export default class View {
    hello() {
        return "Hello, I am the view"
    }

    render(controller, speech){

        let newContainer = ''
        if(document.querySelector('.container') === null) {
            newContainer = document.createElement('div')
            newContainer.classList.add('container')
            document.body.appendChild(newContainer)
        }


        const container = document.querySelector('.container')
        while (container.hasChildNodes()) {
            // Clears the rendering of tasks
            container.removeChild(container.firstChild);
        }

        // Speaking
        const output = document.createElement('span')
        output.classList.add('eightBall-output')
        output.textContent = speech
        container.appendChild(output)

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
          };
    
          form.addEventListener('submit', (ev) => userInput(ev));
    }
}
