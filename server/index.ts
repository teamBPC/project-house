const express = require('express');
const cors = require('cors');
const { Request, Response } = require('express');
//import dotenv from 'dotenv';

//const config = dotenv.config();
//config.

var bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/login", loginRouter);
app.use("/", mainRouter);

app.listen(8066)