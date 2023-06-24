import  { Request, Response } from "express";
const takeSquare = (req:Request, res:Response) => {
  try {
    let number:number = req.body.number;
    let result:number = Math.pow(number, 2);
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default takeSquare;
