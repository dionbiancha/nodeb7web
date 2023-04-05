import { Router, Request, Response } from "express";
import { Product } from "../models/Product";

export const home = (req: Request, res: Response) => {
  let name: string = "Dionei";
  let age: number = 50;
  let showOld: boolean = false;

  let list = Product.getAll();

  if (age >= 90) {
    showOld = true;
  }

  res.render("pages/home", {
    name,
    showOld,
    products: list,
  });
};
