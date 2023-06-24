import  { Request, Response } from "express";

const sortString2 = (req:Request, res:Response) => {
  try {
    let array:string[] = req.body.array;
    let sortArray:string[] = array.sort();
    let convertArray:string[] = sortArray.map((element) => element.replace(/\s/g, ""));
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (convertArray[j].length < convertArray[j + 1].length) {
          let t:string = convertArray[j];
          convertArray[j] = convertArray[j + 1];
          convertArray[j + 1] = t;
          let c:string = sortArray[j];
          sortArray[j] = sortArray[j + 1];
          sortArray[j + 1] = c;
        }
      }
    }
    let result = sortArray;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default sortString2;
