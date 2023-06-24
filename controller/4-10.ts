import  { Request, Response } from "express";

function findLargestOverlap2(req:Request, res:Response) {
  try {
    let arr:string[] = req.body.array;
    let k:number = req.body.k;
    const arrSet:Set<string>[] = arr.map((element) => new Set(element.split("")));
    const convertArrSet:string[][] = arrSet.map((element) => Array.from(element));
    let result:any;
    let resultArray:string[][] = [];
    let maxSameChar:number = 0;
    let atLeastSameChar:number = k;
    for (let i = 0; i < convertArrSet.length - 1; i++) {
      for (let j = i + 1; j < convertArrSet.length; j++) {
        let countSameChar:number = 0;
        for (const element of convertArrSet[j]) {
          if (convertArrSet[i].includes(element)) {
            countSameChar++;
          }
        }
        if (maxSameChar == countSameChar && countSameChar >= atLeastSameChar) {
          result = [arr[i], arr[j]];
          resultArray.push(result);
        }
        if (maxSameChar < countSameChar && countSameChar >= atLeastSameChar) {
          resultArray = [];
          result = [arr[i], arr[j]];
          resultArray.push(result);
          maxSameChar = countSameChar;
        }
      }
    }
    if (resultArray.length != 0) {
      result = resultArray;
    } else {
      result = "no result";
    }
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
export default findLargestOverlap2;
