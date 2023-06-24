import  { Request, Response } from "express";

const takeUniq2 = (req:Request, res:Response) => {
  try {
    let array:any[] = req.body.array;
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        let isSame:boolean = true;
        const keys1:string[] = Object.keys(array[j]);
        const keys2:string[] = Object.keys(array[i]);
        if (keys1.length !== keys2.length) {
          isSame = false;
          continue;
        }
        for (let key of keys2) {
          if (array[j][key] !== array[i][key]) {
            isSame = false;
            continue;
          }
        }
        if (isSame) {
          array.splice(j, 1);
        }
      }
    }
    let result = array;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default takeUniq2;
