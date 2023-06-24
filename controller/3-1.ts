import  { Request, Response } from "express";

const take2ndSmallest = (req:Request, res:Response) => {
  try {
    let array:number[] = req.body.array;
    let result:unknown;
    if (array.length <= 1) {
      result = "array's length input must greater than or equal to 2";
    }
    let ascArray:number[] = array.sort(function (a, b) {
      return a - b;
    });
    for (let i = 1; i < ascArray.length; i++) {
      if (ascArray[i] != ascArray[0]) {
        result = ascArray[i];
        break;
      }
      if (i === ascArray.length - 1) {
        result = "array hasn't second largest number";
        break;
      }
    }
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default take2ndSmallest;
