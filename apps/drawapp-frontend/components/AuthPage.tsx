"use client"

import Link from "next/link"

export function AuthPage({isSignIn}:{
    isSignIn: boolean
}){
    return <div className="w-screen h-screen  flex items-center justify-center">
        <div className="py-12 px-20 m-2 rounded border border-3 flex flex-col gap-4 rounded-xl">
            <input type="text" placeholder="email" className="outline-none border py-2 rounded-xl px-6" />
            <input type="text" placeholder="password" className="outline-none border py-2 rounded-xl px-6"/>
            
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                {isSignIn?"sign in" :"sign up" }
              </button>
              {isSignIn? <div><p className="text-sm">Create Account ? <Link href={"/signup"}> <span className="text-blue-600">SignUp</span></Link></p></div>:<div><p className="text-sm">Already have a account ? <Link href={"/signin"}> <span className="text-blue-600">SignIn</span></Link></p></div>}
        </div>

    </div>
}