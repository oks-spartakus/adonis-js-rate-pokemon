<p align="center">
  <a href="https://adonisjs.com/" target="blank"><img src="https://avatars.githubusercontent.com/u/13810373?s=200&v=4" width="200" alt="Adonis Logo" /></a>
  <a href="." target="blank"><img src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png" width="200" alt="Pokeball" /></a>
</p>

  <p align="center">Voting for you favorite Pokemon.Written in <a href="https://github.com/adonisjs" target="_blank">AdonisJs</a> - a fully featured web framework for <a href="http://nodejs.org" target="_blank">Node.js</a>.</p>
    <p align="center">
</p>

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev
#or
$ node ace serve --watch

```

## Test

There are no tests written for this project.

## API Documentation

### Swagger

```bash
# development
$ npm run dev
```

then go to [http://127.0.0.1:3333/docs](http://127.0.0.1:3333/docs)

## Comparison

### Basic Info

- npm weekly downloads - 13,2k
- last publish - 21 days ago
- issues - 7
- PRs - 2
- last commit - 21 days ago
- forks - 598
- github stars - 13,3k
- written in - Typescript
- intended for - Typescript
- best for - MVC, fullstack app, API

### Pros

- ```npm ace``` CLI
- CLI is asking you what are you going to work on BE or fullstack and generated projects are different regarding you answer
- official plugins have commands to configure them - i.e. ```node ace configure @adonisjs/auth``` - this added needed code, creates folders and prints tips, if anything has to be added manually, in terminal or web browser (you can pick where to print tips while executing configure command)
- tips during configuration, and during setting new project up too, are pointing exact file in which change has to be done, what change it is, what code and where it has to be placed (e.g. "paste this line of code in file file.ts in object obj")
- routes have possibility to give them aliases
- creating routes is super easy, especially the CRUD ones (resourceful routes), controllers are injected out of the box
- super easy authorization - two commands - install, configure and it is ready to use
- errors are being wrapped and customized - very good and easy to understand and find the cause of problem

### Cons

- controllers are passed to routes as strings - ```Route.post('/signup', 'UsersController.signup').as('auth.signup')```
- swagger has to be created manually
- in some places FE related files are being generated even when choosing to develop API