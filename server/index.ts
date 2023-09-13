import express, { Request, Response } from "express";
import cors from 'cors';
import loginRouter from "./routes/login";
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

app.listen(3000)