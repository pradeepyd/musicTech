"use client"
import { signIn } from "next-auth/react";


export default function SigninBtne(){
    return <div className="text-2xl font-normal flex justify-center p-4 mx-12">
        <button onClick={()=> signIn()}>Login</button>
    </div>
}