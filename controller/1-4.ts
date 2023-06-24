import  { Request, Response } from "express";
const takeMax = (req:Request, res:Response) => {
  try {
    let list:number[] = req.body.list;
    let result:number = Math.max(...list);
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default takeMax;
