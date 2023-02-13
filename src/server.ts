import express, { Request, Response } from "express";
import mainRouts from "./routes";
import painelRouts from "./routes/painel";

const server = express();

server.use(mainRouts);

server.use("/painel", painelRouts);

server.use((req: Request, res: Response) => {
  res.status(404).send("Pagina nao encontrada");
});

server.listen(3000);
