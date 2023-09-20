import express, { Request, Response } from "express";
import cors from 'cors';
import loginRouter from "./routes/login";
import userRouter from "./routes/user";
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
app.use("/user", userRouter);

app.listen(20492)