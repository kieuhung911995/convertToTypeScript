import  { Request, Response } from "express";

const sortAlphB = (req:Request, res:Response) => {
  try {
    let array:string[] = req.body.array;
    let result:string[] = array.sort();
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default sortAlphB;
