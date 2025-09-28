import { useEffect, useState } from "react";
import { WS_URL } from "../config";

export function useSocket(){
    const [loading,setLoading]= useState(true);
    const [socket,setSocket]=useState<WebSocket>();

    useEffect(()=>{
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5NTZlZWM5Ni01Y2U3LTQ0YmQtODY0Yi1kM2NhYjkwZjljNGUiLCJpYXQiOjE3NTg3MjkzMTZ9.LscJtQxhv9iW9hOUrE3buYNuUr-8p0HZeluOor2RnNc`);
        ws.onopen = () =>{
            setLoading(false);
            setSocket(ws)

        }
    },[])
    return{
        socket,
        loading
    }
}