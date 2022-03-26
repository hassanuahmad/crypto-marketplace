// npm run watch
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const port = process.env.HTTP_PORT;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running! on ${process.env.PORT}`);
});
