// npm run watch
const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config();

app.use(cors());
app.use(express.json());

// DATABASE SETUP
const db = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DATABASE,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

app.get("/", (req, resp) => {
	resp.send("joe");
});

app.get("/user/:id", (req, resp) => {
	const q = `SELECT * FROM user WHERE wallet_address="${req.params.id}"`;
	console.log(q);
	db.query(q, function (error, results, fields) {
		// error will be an Error if one occurred during the query
		// results will contain the results of the query
		// fields will contain information about the returned results fields (if any)
		if (error || !results || results.length === 0) {
			resp.sendStatus(404);
			return;
		}
		resp.send(results);
	});
});

// GET ALL ADS
app.get("/ad", (req, resp) => {
	db.query("SELECT * FROM ad", (error, results, fields) => {
		console.log(error);
		if (error || !results || results.length === 0) {
			resp.sendStatus(404);
			return;
		}
		console.log(results);
		resp.send(results);
	});
});

// GET AD BY ID
app.get("/ad/:id", (req, resp) => {
	db.query(
		`SELECT * FROM ad WHERE id=${req.params.id}`,
		(error, results, fields) => {
			if (error || !results || results.length === 0) {
				resp.sendStatus(404);
				return;
			}
			resp.send(results);
		}
	);
});

// CREATE AD
app.post("/ad/create", (req, resp) => {
	const post_body = req.body;
	const title = post_body.title;
	const description = post_body.title;
	const price = post_body.title;
	const image = post_body.title;

	console.log(req.body);
	resp.sendStatus(200);
});

const port = 3001;
app.listen(process.env.PORT || port, () => {
	console.log(`Server is running! on ${port}`);
});
