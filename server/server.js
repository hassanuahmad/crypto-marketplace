const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const multer = require("multer");

require("dotenv").config();

app.use(express.json());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

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

// Image upload
const upload = multer({ dest: "uploads/" });

app.get("/", (req, resp) => {
	resp.send("joe");
});

app.get("/user/:id", (req, resp) => {
	const q = `SELECT * FROM user WHERE wallet_address="${req.params.id}"`;
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
		if (error) {
			console.log(error);
			return;
		}
		if (error || !results || results.length === 0) {
			resp.sendStatus(404);
			return;
		}
		resp.send(results);
	});
});

// GET AD BY ID
app.get("/ad/:id", (req, resp) => {
	db.query(
		`SELECT id,title,description,category,price,image FROM ad WHERE id="${req.params.id}"`,
		(error, results, fields) => {
			if (error) {
				console.log(error);
				return;
			}
			if (error || !results || results.length === 0) {
				resp.sendStatus(404);
				return;
			}
			console.log("SINGLE AD RESULTS:", results);
			resp.send(results[0]);
		}
	);
});

// CREATE AD
app.post("/ad/create", upload.single('image'), (req, resp) => {
	const title = req.body.title;
	const description = req.body.title;
	const category = req.body.category;
	const price = req.body.title;
	const image = req.file;

	console.log(image);
	resp.sendStatus(200);
});

const port = 3001;
app.listen(process.env.PORT || port, () => {
	console.log(`Server is running! on ${port}`);
});
