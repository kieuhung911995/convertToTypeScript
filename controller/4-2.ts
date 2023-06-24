import  { Request, Response } from "express";

function countDistinctSubsequences(req:Request, res:Response) {
  try {
    let nums:number[] = req.body.nums;
    let target:number = req.body.target;
    let count:number = 0;

    function backtrack(index:number, currentSum:number, chosen:number[]) {
      if (currentSum === target && chosen.length > 1) {
        count++;
        return;
      }

      if (index === nums.length || currentSum > target) {
        return;
      }

      for (let i = index; i < nums.length; i++) {
        if (i > index && nums[i] === nums[i - 1]) {
          continue; // Skip duplicates
        }

        chosen.push(nums[i]);
        backtrack(i + 1, currentSum + nums[i], chosen);
        chosen.pop();
      }
    }

    nums.sort((a, b) => a - b); // Sort the input array in ascending order
    backtrack(0, 0, []);
    let result = count;
    res.status(200).send(JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
export default countDistinctSubsequences;
