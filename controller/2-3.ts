
import  { Request, Response } from "express";
const takeLongestCommonSubsequence = (req:Request, res:Response) => {
  try {
    let array:string[] = req.body.array;
    let str1:string = array[0];
    let str2:string = array[1];
    if (str1 === "" || str2 === "") {
      return "No longest common subsequence found";
    }
    let C:string[] = [];
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
          let D:string = "";
          let m:number = i;
          let n:number = j;
          while (str1[m] === str2[n] && n < str2.length) {
            D = D.concat("", str1[m]);
            m++;
            n++;
          }
          C.push(D);
        }
      }
    }
    let lengthtArray:number[] = C.map((element) => element.length);
    let longestLenght:number = Math.max(...lengthtArray);
    let longestElement:string | undefined = C.find((element) => element.length == longestLenght);
    let result = longestElement;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default takeLongestCommonSubsequence;
