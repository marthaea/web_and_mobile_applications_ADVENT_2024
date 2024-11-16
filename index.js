//loading the environment variable
require('dotenv').config();

const express = require('express');
const myBusinessLogic = require('express');
const app = express();
//Using the environment variable
const port = process.env.PORT ||3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/greetings', (request, respond) => {
respond.send('Hello Martha!');
});

// list of friends
let friends = [
   {"id":1,"name":"Tabby"},
   {"id":2,"name":"Bruno"}, 
   {"id":3,"name": "Kapesh"},
   {"id":4,"name": "Lolo"},
   {"id":5,"name": "Simon"}];
app.get('/friends', (request, response) => {
    console.log("I got here too")
   return response.status(200).send(myBusinessLogic.getFriends(request)); 
});

app.get('/friends-by-id/:id', (request, response) => {
    console.log("Logging, request params", request.params.id);
    return response.status(200).send(myBusinessLogic.getFriendsByID(request));

});

//POST
app.post('/sign-up', (request, response) => {

    console.log("Logging request params", request.body);
    return response.status(200).send("Hey we are using post method")
})
app.get("/get-all-the-students")

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});
