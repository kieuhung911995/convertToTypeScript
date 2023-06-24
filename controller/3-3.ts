import  { Request, Response } from "express";

const takeLongestSubsequence = (req:Request, res:Response) => {
  try {
    let array:number[] = req.body.array;
    let longestSubsequence:number = 0;
    for (let i = 0; i < array.length; i++) {
      let A:number[] = [];
      let check:number = -Infinity;
      let m:number = i;
      while (m < array.length) {
        if (array[m] > check) {
          check = array[m];
          A.push(array[m]);
          m++;
        }
        if (array[m] <= check) {
          let n:number = m;
          let B:number[] = [...A];
          while (n < array.length) {
            if (array[n] > check) {
              check = array[n];
              B.push(array[n]);
            }
            n++;
          }
          if (B.length > longestSubsequence) {
            longestSubsequence = B.length;
          }
          if (A.length == 1 || m == array.length - 1) {
            check = A[A.length - 1];
            m++;
          } else {
            A.pop();
            check = A[A.length - 1];
          }
        }
        if (A.length > longestSubsequence) {
          longestSubsequence = A.length;
        }
      }
    }
    let result = longestSubsequence;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export default takeLongestSubsequence;
