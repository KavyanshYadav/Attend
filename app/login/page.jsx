

import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import LoginComponent from "@/components/LoginComponent"
import { redirect } from "next/navigation"


export default async function Login() {
    const session = await getServerSession(authOptions)
    console.log("name",session)
    if(session){
        redirect('/dashboard'); 
    }

    return(
        <div className="flex relative   w-full h-screen">
            <div className="absolute"></div>
            <div className="flex-1 max-sm:hidden w-full h-full">
            <video className="h-full" controls>
                <source src="../name.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
           <LoginComponent/>
        </div>
    )
}