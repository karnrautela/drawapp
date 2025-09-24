import express from "express";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "@repo/backend-common/config"
import {CreateRoom, CreateUserSChema, SigninSchema} from "@repo/common/types"
import { prismaClient } from "@repo/db/client";
import { middleware } from "./middleware";

const app = express();
app.use(express.json());

app.post("/signup",async(req,res)=>{
    
    const parsedData = CreateUserSChema.safeParse(req.body);
    if(!parsedData.success){
        console.log(parsedData.error)
        return res.json({
            message:"incorrect inputs"
        })
    }
    try{
         const user = await prismaClient.user.create({
        data:{
            email: parsedData.data?.username,
            password: parsedData.data?.password,
            name: parsedData.data?.name
        }
       
})
res.json({
   userId: user.id
})
    }catch(e){
        return res.json({message:"user already exists"})
    }
})


app.post('/signin',async(req,res)=>{
    
     const parsedData = SigninSchema.safeParse(req.body);

     if(!parsedData.success){
        return res.json({
            message:"incorrect inputs"
        })
     }

     const user = await prismaClient.user.findFirst({
        where:{
            email:parsedData.data?.username,
            password:parsedData.data?.password
        }
     })

     if(!user){
        return res.status(403).json({
            message:"no user found"
        })
     }
     
     const token = jwt.sign({userId:user?.id},JWT_SECRET)
     res.json({
            token:token
        })
})

app.post('/room',middleware,async(req,res)=>{

      const parsedData = CreateRoom.safeParse(req.body);
     if(!parsedData.success){
       return res.json({
            message:"incorrect inputs"
        })
     }

     //@ts-ignore
    const userId = req.userId;

    const room = await prismaClient.room.create({
        data:{
            slug :parsedData.data?.name,
            adminId:userId
        }
    })

    res.json({
        roomId : room.id
    })
})


app.listen(3001,()=>{
    console.log("serverlistening")
})

