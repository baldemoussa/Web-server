// 1. Import the express library
import express from 'express';
//const {add, substract} = require('./utils/index');
import  {add, substract} from './utils/index.js';
import path from 'path';

console.log(add(1, 2));
console.log(substract(1, 2));


// 2. Create an instance of an Express application
const app = express();

// 3. Define the port the server will run on
const port = 3000;

//Mount middleware
app.use(express.static(path.join(process.cwd(), 'public')));

// 4. Define a route handler for GET requests to the root URL ('/')
app.get('/v1', (req, res) => {
    console.log(`Incoming req --> ${req.method} ${req.url}`);
    res.send('Hello, World!');
});

// 5. Start the server and have it listen for incoming connections
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});