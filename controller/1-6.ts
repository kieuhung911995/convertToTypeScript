import  { Request, Response } from "express";
const sortAsc = (req:Request, res:Response) => {
  try {
    let array:number[] = req.body.array;
    let sortResult:number[] = array.sort(function (a, b) {
      return a - b;
    });
    res.status(200).send(JSON.stringify(sortResult));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default sortAsc;
