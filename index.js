const express = require('express');
const app = express();
const port = 3000;

//GET
app.get('/greetings', (request, response) => {
    return response.send('Hello Martha')
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
