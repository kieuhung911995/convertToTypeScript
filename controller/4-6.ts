import  { Request, Response } from "express";

function maximumProduct(req:Request, res:Response) {
  try {
    let array:number[] = req.body.array;
    let max:number = -Infinity;
    for (let i = 0; i < array.length - 2; i++) {
      for (let j = i + 1; j < array.length - 1; j++) {
        for (let k = j + 1; k < array.length; k++) {
          let result:number = array[i] * array[j] * array[k];
          if (max < result) {
            max = result;
          }
        }
      }
    }
    let result = max;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
export default maximumProduct;
