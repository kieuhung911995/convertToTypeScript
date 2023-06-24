import  { Request, Response } from "express";
const takeSum = (req:Request, res:Response) => {
  try {
    let a:number = req.body.a;
    let b:number = req.body.b;
    let result:number = a + b;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export default takeSum
