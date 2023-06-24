import  { Request, Response } from "express";

const takeSumDivisible3and5 = (req:Request, res:Response) => {
  try {
    let array:number[] = req.body.array;
    let result:number = 0;
    for (const numb of array) {
      if (numb % 15 == 0) {
        result = result + numb;
      }
    }
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default takeSumDivisible3and5;
