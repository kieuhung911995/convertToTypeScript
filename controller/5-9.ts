import  { Request, Response } from "express";

const takeSumOfKey = (req:Request, res:Response) => {
  try {
    let arr:any[] = req.body.array;
    let mergeObj:any = arr.reduce(
      (accumulator, currentValue) => Object.assign(accumulator, currentValue),
      {}
    );
    let arrayKeys:string[] = Object.keys(mergeObj);
    for (const key of arrayKeys) {
      let sum:number = 0;
      for (let i = 0; i < arr.length; i++) {
        if (!arr[i][key]) {
          arr[i][key] = 0;
        }
        sum = sum + arr[i][key];
      }
      mergeObj[key] = sum;
    }
    let result = mergeObj;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default takeSumOfKey;
