import  { Request, Response } from "express";

function findLargestOverlap(req:Request, res:Response) {
  try {
    let arr:string[] = req.body.array;
    const arrSet:Set<string>[] = arr.map((element) => new Set(element.split("")));
    const convertArrSet:string[][] = arrSet.map((element) => Array.from(element));
    let result:string[] = [];
    let resultArray:string[][] = [];
    let maxSameChar = 0;
    for (let i = 0; i < convertArrSet.length - 1; i++) {
      for (let j = i + 1; j < convertArrSet.length; j++) {
        let countSameChar:number = 0;
        for (const element of convertArrSet[j]) {
          if (convertArrSet[i].includes(element)) {
            countSameChar++;
          }
        }
        if (maxSameChar == countSameChar) {
          result = [arr[i], arr[j]];
          resultArray.push(result);
        }
        if (maxSameChar < countSameChar) {
          resultArray = [];
          result = [arr[i], arr[j]];
          maxSameChar = countSameChar;
          resultArray.push(result);
        }
      }
    }
    res.status(200).send(JSON.stringify(resultArray));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
export default findLargestOverlap;
