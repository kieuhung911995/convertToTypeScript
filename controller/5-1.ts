import  { Request, Response } from "express";

const reverseArray = (req:Request, res:Response) => {
  try {
    let array:[] = req.body.array;
    let result:[] = array.reduce(
      (reversedArr:any, currentElement) => [currentElement, ...reversedArr],
      []
    );
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default reverseArray;
