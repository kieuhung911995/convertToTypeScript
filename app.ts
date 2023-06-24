import express, { Request, Response } from "express";
import routes from "./routes/routes";
const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req:Request, res:Response) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
