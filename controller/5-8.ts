import  { Request, Response } from "express";

const switchOrder = (req:Request, res:Response) => {
  try {
    let arr:any[] = req.body.array;
    let switchId:number = req.body.switchId;
    let switchOrder:number = req.body.switchOrder;
    let t:number;
    for (const obj of arr) {
      if (obj.id === switchId) {
        t = obj.order;
        for (const obj of arr) {
          if (obj.order === switchOrder) {
            obj.order = t;
            break;
          }
        }
        obj.order = switchOrder;
        break;
      }
    }
    let result = arr;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default switchOrder;
