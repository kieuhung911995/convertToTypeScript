import  { Request, Response } from "express";

const calculatePostfix = (req:Request, res:Response) => {
  try {
    let postfix:any = req.body.postfix;
    const calculator = (x:string, a:number, b:number) => {
      if (x === "^") {
        return b ** a;
      }
      if (x === "*") {
        return b * a;
      }
      if (x === "/") {
        return b / a;
      }
      if (x === "+") {
        return b + a;
      }
      if (x === "-") {
        return b - a;
      }
    };
    let stack:any[] = [];
    for (let i = 0; i < postfix.length; i++) {
      if (!isNaN(postfix[i])) {
        stack.push(Number(postfix[i]));
      }
      if (isNaN(postfix[i])) {
        let a:number = stack.pop();
        let b:number = stack.pop();
        let c:number|undefined = calculator(postfix[i], a, b);
        stack.push(c);
      }
    }
    let result:number = stack[0];
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default calculatePostfix;
