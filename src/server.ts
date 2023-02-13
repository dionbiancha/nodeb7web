import express from "express";
import mainRouts from "./routes";
import painelRouts from "./routes/painel";

const server = express();

server.use(mainRouts);
server.use("/painel", painelRouts);

server.listen(3000);
