import  { Request, Response } from "express";
const takeLongestWord = (req:Request, res:Response) => {
  try {
    let array:string[] = req.body.array;
    let longestWord:string = "";
    let longestWordArray:string[] = [];
    let convertArray:string[][] = array.map((element) => element.split(" "));
    convertArray.map((element) => {
      for (const child of element) {
        if (longestWord.length == child.length) {
          longestWordArray.push(child);
        }
        if (longestWord.length < child.length) {
          longestWordArray = [];
          longestWord = child;
          longestWordArray.push(child);
        }
      }
    });
    let result = longestWordArray;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default takeLongestWord;
