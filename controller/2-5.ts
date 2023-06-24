import  { Request, Response } from "express";

const maxSubArraySum = (req:Request, res:Response) => {
  try {
    let array:number[] = req.body.array;
    let currentSum:number = 0;
    let maxSum:number = -Infinity;
    for (const numb of array) {
      currentSum = currentSum + numb;
      if (maxSum < currentSum) {
        maxSum = currentSum;
      }
      if (currentSum < 0) {
        currentSum = 0;
      }
    }
    let result = maxSum;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default maxSubArraySum;
