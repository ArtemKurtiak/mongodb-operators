const express = require('express');
const mongoose = require('mongoose');

const {usersRouter} = require("./router");
const {PORT, MONGO_URL} = require("./constants");

mongoose.connect(MONGO_URL);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
