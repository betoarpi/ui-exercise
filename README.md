# Salesloft UI Excercise

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Developer notes about the assessment
This app was built with React, React Router, Redux and Sass. You can see that the UI is simillar to Gmail's web interface. 

Once you run the app, it will fetch the data from a fake API (notes on how to run it below) and it will display all the available messages. You can click on a subject to read the full message. The sidebar is displaying the available tags within the messages. The UI is responsive.

These are some of the things left to improve:
- Search
- Filter by tag
- Actions on selected items

## Available Scripts

In the project directory, you can run:

### `npx json-server emails.json --port 3004`

Runs a fake API server in the port: 3004. 
Open [http://localhost:3004/messages](http://localhost:3004/messages) to view the data that is going to be fethched in the app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
