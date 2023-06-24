import  { Request, Response } from "express";
const takeShortest = (req:Request, res:Response) => {
  try {
    let array:string[] = req.body.array;
    let shortestLength:number = +Infinity;
    let shortestString:string[] = [];
    for (const string of array) {
      if (string.length == shortestLength) {
        shortestString.push(string);
      }
      if (string.length < shortestLength) {
        shortestString = [];
        shortestLength = string.length;
        shortestString.push(string);
      }
    }
    let result = shortestString;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default takeShortest;
