import "reflect-metadata";
import express from "express";
import { router  } from "./routes";

import "./database";

const app = express();  

app.use(express.json())
app.use(router);

app.get('/', function (req, res) {
	res.send('Bem-vindo a NLW-06')
})



app.listen(3001, () => console.log("Server is running"));
