import  { Request, Response } from "express";

const takeUniq = (req:Request, res:Response) => {
  try {
    let array:any[] = req.body.array;
    let uniqArray:any[] = Array.from(new Set(array));
    let result = uniqArray;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default takeUniq;
