import  { Request, Response } from "express";

const findSmallest = (req:Request, res:Response) => {
  try {
    let array:number[] = req.body.array;
    let sortArray:number[] = array.sort(function (a, b) {
      return a - b;
    });
    let rest:number = 1;
    for (let i = 0; i < sortArray.length && sortArray[i] <= rest; i++) {
      rest = rest + sortArray[i];
    }
    let result = rest;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default findSmallest
