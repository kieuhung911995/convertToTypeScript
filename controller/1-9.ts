import  { Request, Response } from "express";

const takeNumbOfWords = (req:Request, res:Response) => {
  try {
    let string:string = req.body.string;
    let result:number;
    let trimLeftRight:string = string.trim();
    let trimCenter:string = trimLeftRight.replace(/\s+/g, " ");
    let count:number = 1;
    if (!trimCenter) {
      result = 0;
    }
    for (const word of trimCenter) {
      if (word === " ") {
        count++;
      }
    }
    result = count;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default takeNumbOfWords;
