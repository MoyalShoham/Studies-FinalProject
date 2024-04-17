const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const userRouter = require('./routes/user-routes');
const port = process.env.PORT || 3000;

app.use('/user', userRouter);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


