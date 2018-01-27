Express Server Setup

Run the Express server PORT=3001 node bin/www Make sure you are within the following directory /react-backend.

Install express backend server using react-create-app

Run the following: npm install -g express-generator

Run within the terminal: express react-backend

cd react-backend install npm

Add the following within the react package json. Make sure this is not in the react-backened package json.

"scripts": { "start": "react-scripts start", "build": "react-scripts build", "test": "react-scripts test --env=jsdom", "eject": "react-scripts eject" }, "proxy": "http://localhost:3001"

Access the data on the express backend server:

http://localhost:3001/users

You can change users to api in the future within the express files.

Next steps will be converting the generated express code into ES6 code.
