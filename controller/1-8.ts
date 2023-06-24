import  { Request, Response } from "express";

const takeMedian = (req:Request, res:Response) => {
  try {
    let array:number[] = req.body.array;
    let result:number;
    let sortedArray:number[] = array.sort(function (a, b) {
      return a - b;
    });

    if (sortedArray.length % 2 != 0) {
      let medianIndex = (sortedArray.length - (sortedArray.length % 2)) / 2;
      result = sortedArray[medianIndex];
    } else {
      let median =
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
export default takeMedian;
