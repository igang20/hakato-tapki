const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const cors = require('./middlewares/cors');

const connectToDatabase = require('./database/connect');
const { vacanciesRouter, authRouter, userRouter } = require('./routes');

const app = express();
const PORT = process.env.PORT;

connectToDatabase();

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    vacanciesRouter,
    userRouter
);
app.use("/auth", authRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
