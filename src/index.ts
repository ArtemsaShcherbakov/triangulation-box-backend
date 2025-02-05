import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { triangulateBox } from "./triangulation";
import IBody from "./interface";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/triangulate", (req: Request, res: Response) => {
  const { length, width, height }: IBody = req.body;

  const vertices = triangulateBox(length, width, height);

  res.json(vertices);
});

app.listen(PORT, () => {
  console.log(`Server running`);
});
