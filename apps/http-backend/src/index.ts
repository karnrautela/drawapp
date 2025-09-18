import express from "express";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "@repo/backend-common/config"
import {CreateUserSChema} from "@repo/common/types"
const app = express();


app.post('/signup',(req,res)=>{

    const data = CreateUserSChema.safeParse(req.body);
    if(!data.success){
        return res.json({
            message:"incorrect inputs"
        })
    }
})

app.post('/signin',(req,res)=>{
    const userId =1;
    const token = jwt.sign({userId},JWT_SECRET);

    res.json({token})
})

app.post('/room',(req,res)=>{

})


app.listen(3000)