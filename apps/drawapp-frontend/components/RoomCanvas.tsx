
"use client"
import { WS_URL } from "@/config";

import {  useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";


export function RoomCanvas({roomId}:{roomId : string}){

 const[socket,setSocket]=useState<WebSocket|null>(null);

 useEffect(()=>{
    const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5NTZlZWM5Ni01Y2U3LTQ0YmQtODY0Yi1kM2NhYjkwZjljNGUiLCJpYXQiOjE3NTg3MjkzMTZ9.LscJtQxhv9iW9hOUrE3buYNuUr-8p0HZeluOor2RnNc`)

    ws.onopen = () =>{
        setSocket(ws);
        ws.send(JSON.stringify({type:"join_room" , roomId}))
    }
 },[])



    if(!socket){
        <div>Connecting to  server...</div>
    }

     return (
    <div className=''>
        <Canvas roomId={roomId} socket={socket}/>
        </div>
    
  )
}