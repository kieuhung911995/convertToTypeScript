import  { Request, Response } from "express";

const takeMaximumDifference = (req:Request, res:Response) => {
  try {
    let array:number[] = req.body.array;
    let result:number = Math.max(...array) - Math.min(...array);
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default takeMaximumDifference;
