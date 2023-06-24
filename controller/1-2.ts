import  { Request, Response } from "express";
const takeLength = (req:Request, res:Response) => {
  try {
    let string:string = req.body.string;
    let result:number = string.length;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default takeLength;
