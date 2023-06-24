import  { Request, Response } from "express";

const trimString = (req:Request, res:Response) => {
  try {
    let string:string = req.body.string;
    let trimLeftRight:string = string.trim();
    let trimCenter:string = trimLeftRight.replace(/\s+/g, " ");
    let result:string = trimCenter;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default trimString;
