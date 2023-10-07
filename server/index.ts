import express, { Request, Response } from "express";
import cors from 'cors';
import loginRouter from "./routes/login";
import userRouter from "./routes/user";
import session from 'express-session';

var bodyParser = require('body-parser');
const app = express();

const fileStore = require("session-file-store")(session);
app.use(
    session({
        secret: "@house",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: true
        },
        store: new fileStore(),
    })
)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/login", loginRouter);
app.use("/user", userRouter);

app.listen(20492)