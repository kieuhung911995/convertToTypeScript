import  { Request, Response } from "express";

const postfix = (req:Request, res:Response) => {
  try {
    let input:string = req.body.input;
    const checkPriority:any = (x:string) => {
      if (x === "^") {
        return 3;
      }
      if (x === "*" || x === "/") {
        return 2;
      }
      if (x === "+" || x === "-") {
        return 1;
      }
      if (x === "(") {
        return 0;
      }
    };
    let expression:any = input.replace(/\s/g, "");
    let postfix:any[] = [];
    let stack:string[] = [];
    for (let i = 0; i < expression.length; i++) {
      if (!isNaN(expression[i])) {
        let stringNumb:string = "";
        while (!isNaN(expression[i])) {
          stringNumb = stringNumb.concat("", expression[i]);
          i++;
        }
        i--;
        postfix.push(stringNumb);
      }
      if (expression[i] === "(") {
        stack.push(expression[i]);
      }
      if (expression[i] === ")") {
        while (stack[stack.length - 1] !== "(") {
          postfix.push(stack.pop());
        }
        stack.pop();
      }
      if (
        isNaN(expression[i]) &&
        expression[i] !== "(" &&
        expression[i] !== ")"
      ) {
        while (
          stack.length != 0 &&
          checkPriority(expression[i]) <= checkPriority(stack[stack.length - 1])
        ) {
          postfix.push(stack.pop());
        }
        stack.push(expression[i]);
      }
    }
    while (stack.length != 0) {
      postfix.push(stack.pop());
    }
    let result = postfix;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default postfix;
