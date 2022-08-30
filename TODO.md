### TODO

- [x] Define the concepts (and interactions) of the domain (in the language of the subject matter experts)
- [x] Logically test our definitions by explaining them
- [x] Use our conceptual definitions to create our model of the domain with psudocode
- [x] Implement our model (with unit tests)
- [x] Define our controller with psudocode
- [x] Logically test our defitionions by explaining them
- [x] Implement our controller
- [x] Define our view with psudocode
- [x] Logically test our definitions by explaining them
- [x] Implement our view
- [x] Perform user acceptence testing
- [x] Perform a retrospective

Defining concepts:

A magic 8 ball asks who is speaking. Greets them and invites them to ask a question. The 8ball thinks about the question and then returns an answer.

This can be broken down into phases:

Welcome:

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
