import express from "express";
import mongoSetup from "./config/mongo-config.js";
import jogos from "./router/jogos-router.js"


const port = process.env.PORT || 3000;
const server = express();

server.use(express.json())
mongoSetup()

server.listen(port, async () => {
	console.log(`Server is running at port ${port}`)
	server.use("/jogos",jogos )
})
