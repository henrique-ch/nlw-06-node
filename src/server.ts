import "reflect-metadata";
import express from "express";

import "./database";

const app = express();  

app.get('/', function (req, res) {
	res.send('Bem-vindo a NLW-06')
})



app.listen(3001, () => console.log("Server is running"));
