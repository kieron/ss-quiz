# ss-quiz

Yarn: 1.22.5

Node: 18.18.2

Web Preview: https://ss-quiz.pages.dev/

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

```

The Nuxt application first takes a difficulty, which is stored in the QuizModule store - this is then used to fetch the questions with the given difficulty, which are also then kept in the store.

The user clicks through the questions, using the answers to navigate between each one, and if a question isnt answered, a null '' answer is set. Due to the timer, I did not add the option to go backwards in questions.

At the end of the quiz, the answers are checked against the store, and the appropriate feedback given.
