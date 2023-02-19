import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  let name: string = "Dionei";
  let age: number = 50;
  let showOld: boolean = false;
  let products = [
    { title: "Produto X", price: 10 },
    { title: "Produto Y", price: 15 },
    { title: "Produto Z", price: 20 },
  ];

  if (age >= 90) {
    showOld = true;
  }

  res.render("home", {
    name,
    showOld,
    products,
  });
});

router.get("/contato", (req: Request, res: Response) => {
  res.send("Formulario de contato");
});

router.get("/sobre", (req: Request, res: Response) => {
  res.send("Pagina institucional sobre a empresa");
});

export default router;
