const express = require('express');
const app = express();
const mongoose  = require('mongoose');
app.use(express.json());


app.listen(8080, () => {
    console.log('Server is running on port 8080');

})

