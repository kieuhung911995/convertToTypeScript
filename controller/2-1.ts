import  { Request, Response } from "express";

const take2ndLargest = (req:Request, res:Response) => {
  try {
    let array:number[] = req.body.array;
    let result:unknown;
    if (array.length <= 1) {
      result  = "array's length input must greater than or equal to 2";
    }
    let descArray:number[] = array.sort(function (a, b) {
      return b - a;
    });
    for (let i = 1; i < descArray.length; i++) {
      if (descArray[i] != descArray[0]) {
        result = descArray[i];
        break;
      }
      if (i === descArray.length - 1) {
        result = "array hasn't second largest number";
        break;
      }
    }
    console.log(result);
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default take2ndLargest;
