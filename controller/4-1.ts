import  { Request, Response } from "express";

const bubbleSort = (req:Request, res:Response) => {
  try {
    let array:number[] = req.body.array;
    let count:number = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          let t = array[j];
          array[j] = array[j + 1];
          array[j + 1] = t;
          count++;
        }
      }
    }
    let result = count;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default bubbleSort;
