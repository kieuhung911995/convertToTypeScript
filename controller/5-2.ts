import  { Request, Response } from "express";

const takeChunk = (req:Request, res:Response) => {
  try {
    let array:any[] = req.body.array;
    let chunk:number = req.body.chunk;
    let result:any
    if (chunk > array.length) {
      result= "chunk must less than or equal to array's length";
    }
    let j:number = 0;
    let newArray:any  = [];
    for (let i = 0; i < array.length; i += chunk) {
      j = j + chunk;
      newArray.push(array.slice(i, j));
    }
     result = newArray;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error); 
    res.status(500).send(error);
  }
};
export default takeChunk;
