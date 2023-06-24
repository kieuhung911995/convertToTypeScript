import  { Request, Response } from "express";
import jwt from "jsonwebtoken"
const login = (req:Request, res:Response) => {
  try {
    let { email, password } = req.body;
    const emailDB:string = "kieuhung@gmail";
    const passwordDB:string = "123456";
    const roleDB:string = "admin";
    if (email !== emailDB || password !== passwordDB) {
      res.status(401).send("user is not authenticate");
    } else {
      let role:string = roleDB;
      let privateKey:string = "asdasjda";
      jwt.sign(
        { email: email, password: password },
        privateKey,
        function (err:any, token:any) {
          if (err) {
            throw err;
          }
          console.log(token);
        }
      );
      if (role !== roleDB) {
        res.status(403).send("user does not have permission");
      } else {
        res.status(200).send("login success");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export default login;
