import  { NextFunction, Request, Response } from "express";
import fs from "fs"

const showDataFile = (req:Request, res:Response, next:NextFunction) => {
  try {
    let result:unknown;
    let param:any = req.query;
    let file:any = req.file;
    let filePath:string = file.path;
    let nameOfFile:string = file.originalname;
    if (nameOfFile.includes(".txt")) {
      const data:any = fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });
      let replace:string = data.replace("{{name}}", param.name);
      fs.appendFileSync("documents/result.txt", "");
      fs.writeFileSync("./documents/result.txt", replace);
      const newData:string = fs.readFileSync("./documents/result.txt", {
        encoding: "utf8",
        flag: "r",
      });
      result = newData;
    }
    if (nameOfFile.includes(".html")) {
      const data:any = fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });
      let replaceObj:any = {
        "{{title}}": param.title,
        "{{pageTitle}}": param.pageTitle,
        "{{content}}": param.content,
      };
      let replace:any = data.replace(
        /{{title}}|{{pageTitle}}|{{content}}/gi,
        function (matched:any) {
          return replaceObj[matched];
        }
      );
      fs.appendFileSync("documents/result.html", "");
      fs.writeFileSync("./documents/result.html", replace);
      const newData:any = fs.readFileSync("./documents/result.html", {
        encoding: "utf8",
        flag: "r",
      });
      result = newData;
    }
    res.status(200).send(result);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
export default showDataFile;
