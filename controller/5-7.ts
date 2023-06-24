import  { Request, Response } from "express";

const mapKey = (req:Request, res:Response) => {
  try {
    let array:any[] = req.body.array;
    let keys:string[] = req.body.keys;
    let A:any[] = [];
    array.map((element) => {
      let obj:object = {};
      for (let i = 0; i < keys.length; i++) {
        let key:string = keys[i];
        let singleValue:number = element[keys[i]];
        let singleObj:any = { singleKey: singleValue };
        singleObj[key] = singleObj["singleKey"];
        delete singleObj["singleKey"];
        obj = Object.assign(obj, singleObj);
      }
      A.push(obj);
    });
    let result = A;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default mapKey;
