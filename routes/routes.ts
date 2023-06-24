import express from "express";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });

import takeSum from "../controller/1-1";
import takeLength from "../controller/1-2"
import takeSquare from "../controller/1-3"
import takeMax from "../controller/1-4"
import takeShortest from "../controller/1-5"
import sortAsc from "../controller/1-6"
import sortAlphB from "../controller/1-7"
import takeMedian from "../controller/1-8"
import takeNumbOfWords from "../controller/1-9"
import takeNumbOfString from "../controller/1-10"
import take2ndLargest from "../controller/2-1"
import takeLongestWord from "../controller/2-2"
import takeLongestCommonSubsequence from "../controller/2-3"
import takeSumDivisible3and5 from "../controller/2-4"
import maxSubArraySum from "../controller/2-5"
import take2ndSmallest from "../controller/3-1"
import takeMaximumDifference from "../controller/3-2"
import takeLongestSubsequence from "../controller/3-3"
import findLargestOverlap from "../controller/3-4"
import findSmallest from "../controller/3-5"
import takeMedian2 from "../controller/3-6"
import findLongestPalidrome from "../controller/3-7"
import sortString from "../controller/3-10"
import bubbleSort from "../controller/4-1"
import countDistinctSubsequences from "../controller/4-2"
import takeLongestSubString from "../controller/4-3"
import maximumProduct from "../controller/4-6"
import sortString2 from "../controller/4-7"
import takeLongestIncreasing from "../controller/4-9"
import findLargestOverlap2 from "../controller/4-10"
import reverseArray from "../controller/5-1"
import takeChunk from "../controller/5-2"
import takeUniq from "../controller/5-3"
import takeUniq2 from "../controller/5-4"
import groupBy from "../controller/5-5"
import trimString from "../controller/5-6"
import mapKey from "../controller/5-7"
import switchOrder from "../controller/5-8"
import takeSumOfKey from "../controller/5-9"
import showDataFile from "../controller/5-10"
import analyst from "../controller/analyst"
import calculatePostfix from "../controller/calculatePostfix"
import postfix from "../controller/postfix"
import login from "../controller/login"


router.post("/1-1", takeSum);
router.post("/1-2",takeLength)
router.post("/1-3",takeSquare)
router.post("/1-4",takeMax)
router.post("/1-5",takeShortest)
router.post("/1-6",sortAsc)
router.post("/1-7",sortAlphB)
router.post("/1-8",takeMedian)
router.post("/1-9",takeNumbOfWords)
router.post("/1-10",takeNumbOfString)
router.post("/2-1",take2ndLargest)
router.post("/2-2",takeLongestWord)
router.post("/2-3",takeLongestCommonSubsequence)
router.post("/2-4",takeSumDivisible3and5)
router.post("/2-5",maxSubArraySum)
router.post("/3-1",take2ndSmallest)
router.post("/3-2",takeMaximumDifference)
router.post("/3-3",takeLongestSubsequence)
router.post("/3-4",findLargestOverlap)
router.post("/3-5",findSmallest)
router.post("/3-6",takeMedian2)
router.post("/3-7",findLongestPalidrome)
router.post("/3-10",sortString)
router.post("/4-1",bubbleSort)
router.post("/4-2",countDistinctSubsequences)
router.post("/4-3",takeLongestSubString)
router.post("/4-6",maximumProduct)
router.post("/4-7",sortString2)
router.post("/4-9",takeLongestIncreasing)
router.post("/4-9",takeLongestIncreasing)
router.post("/4-10",findLargestOverlap2)
router.post("/5-1",reverseArray)
router.post("/5-2",takeChunk)
router.post("/5-3",takeUniq)
router.post("/5-4",takeUniq2)
router.post("/5-5",groupBy)
router.post("/5-6",trimString)
router.post("/5-7",mapKey)
router.post("/5-8",switchOrder)
router.post("/5-9",takeSumOfKey)
router.post("/5-10",upload.single("template"),showDataFile)
router.post("/analyst",upload.single("BangCong"),analyst)
router.post("/calculatePostfix",calculatePostfix)
router.post("/postfix",postfix)
router.post("/login",login)


export default router;
