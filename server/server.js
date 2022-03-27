const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const multer = require("multer");

require("dotenv").config();
app.use(express.static("."));

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

app.put("/user/update/:id", (req, resp) => {});

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
		`SELECT wallet_address,id,title,description,category,price,image FROM ad WHERE id="${req.params.id}"`,
		(error, results, fields) => {
			if (error) {
				console.log(error);
				return;
			}
			if (error || !results || results.length === 0) {
				resp.sendStatus(404);
				return;
			}
			resp.send(results[0]);
		}
	);
});

// CREATE AD
app.post("/ad/create", upload.single("image"), (req, resp) => {
	const wallet_address = req.body.wallet_address;
	const title = req.body.title;
	const description = req.body.description;
	const category = req.body.category;
	const price = req.body.price;
	const image = req.file;
	if (
		!wallet_address ||
		!title ||
		!description ||
		!category ||
		!price ||
		!image
	) {
		return resp.status(400).send("A field was missing!");
	}

	db.query(
		`INSERT INTO ad (id,wallet_address,title,description,category,price,image) VALUES
	 	(REPLACE(UUID_SHORT(),'-',''),?,?,?,?,?,?)`,
		[
			wallet_address,
			title,
			description,
			category,
			price,
			`/uploads/${image.filename}`,
		],
		(error, results, fields) => {
			if (error) {
				return console.log(error);
			}
			if (error || !results || results.length === 0) {
				resp.sendStatus(404);
				return;
			}
			resp.sendStatus(200);
			return;
		}
	);
});

app.delete("/ad/delete/:id", (req, resp) => {
	const id = req.params.id;
	db.query("DELETE FROM ad WHERE id = ?", id, (err, result) => {
		if (err) {
			console.log(err);
			return resp.sendStatus(400);
		}
		return resp.send(result);
	});
});

const port = 3001;
app.listen(process.env.PORT || port, () => {
	console.log(`Server is running! on ${port}`);
});
