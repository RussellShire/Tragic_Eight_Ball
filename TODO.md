### TODO

- [ ] Define the concepts (and interactions) of the domain (in the language of the subject matter experts)
- [ ] Logically test our definitions by explaining them
- [ ] Use our conceptual definitions to create our model of the domain with psudocode
- [ ] Implement our model (with unit tests)
- [ ] Define our controller with psudocode
- [ ] Logically test our defitionions by explaining them
- [ ] Implement our controller
- [ ] Define our view with psudocode
- [ ] Logically test our definitions by explaining them
- [ ] Implement our view
- [ ] Perform user acceptence testing
- [ ] Perform a retrospective

Defining concepts:

A magic 8 ball asks who is speaking. Greets them and invites them to ask a question. The 8ball thinks about the question and then returns an answer.

This can be broken down into phases:

Introduction:

- User inputs their name

Greeting:

- 8Ball greets the user by name

Questioning:

- 8Ball invites user to ask a question
- User asks a question

Thinking:

- 8Ball muses on the question, possibly referencing the user's name or the question itself

Answering:

- 8Ball gives a response, from some randomly generated reponses >> Return to Questioning

Required Objects:

User responses:

- Name
- Question

8Ball Responses:

- Welcome
- Greetings (with user name)
- Inviting question
- Thinking (possibly referencing question)
- Answers

Methods:
randomising answer
adding user responses
