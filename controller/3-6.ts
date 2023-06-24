
import  { Request, Response } from "express";
const takeMedian2 = (req:Request, res:Response) => {
  try {
    let array1:number[] = req.body.array1;
    let array2:number[] = req.body.array2;
    let result:number;
    let array:number[] = [...array1, ...array2];
    let sortedArray:number[] = array.sort(function (a, b) {
      return a - b;
    });
    if (sortedArray.length % 2 != 0) {
      let medianIndex:number = (sortedArray.length - (sortedArray.length % 2)) / 2;
      result = sortedArray[medianIndex];
    } else {
      let median:number =
        (sortedArray[sortedArray.length / 2 - 1] +
          sortedArray[sortedArray.length / 2]) /
        2;
      result = median;
    }
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default takeMedian2;
