import  { Request, Response } from "express";

const takeNumbOfString = (req:Request, res:Response) => {
  try {
    let array:string[] = req.body.array;
    let count:number = 0;
    for (const string of array) {
      if (string.includes("a")) {
        count++;
      }
    }
    let result = count;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default takeNumbOfString;
