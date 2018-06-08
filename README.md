# Otis Online Payment Portal

#### Intuit’s Coding Challenge (Front End)

* Exercise Difficulty: **Easy**
* How did you feel about the exercise itself? **10 - it's an awesome way to assess coding ability**
* How do you feel about coding an exercise as a step in the interview process?  **10 - it's an awesome way to assess coding ability**
* What would you change in the exercise and/or process? **I wish I had more to contribute but I think the project is a great way to assess someone's coding ability and had a blast working on it**

#### Requirements

Because of the limited time to complete this project, the following requirements are assumed:
* Mac OS X+
* Nodejs 8.4.0+
* Yarn 1.6.0+

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). For sake of brevity, I have not included the detailed README that Create React App normally provides. You can find the most recent version of that guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) and I would recommend reading through it for a broad overview of this project.

### First Steps
To start this project, simply run the following commands from the root of the project:

* `yarn`
* `yarn start`

If everything compiled successfully, you should see a message stating that the application is up and running on `http://localhost:3000/` and possibly a new browser window opened up and navigated to that host!

The first page you should see is a basic Login page. While everyone and anyone can "login", if you pick a unique string, we will use that to help seed the randomUser API so you can maintain the same user details between sessions.

After submitting the initial login form, you should be redirected to the dashboard with a new user loaded from the randomUser service.

On the left hand side of the screen, you will see a sidebar allowing you to navigate to different pages of the application.

### Testing
To run tests for this project, simply run the following commands from the root of the project:

* `yarn test`

### Prototyping
This project contains the Storybook project. Storybook provides an interface to be able to quickly prototype components and build components outside the scope of the application allowing the engineer to concentrate on the component api void of application state. To run Storybook simply type the following command from the root of the project:

* `yarn storybook`
