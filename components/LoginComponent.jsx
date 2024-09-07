"use client";

import { Button } from "@nextui-org/button"
import { Divider } from "@nextui-org/divider"
import { Input } from "@nextui-org/input"
import Image from "next/image"
import logo from "../app/logo.png"
import { RiUser3Fill } from "react-icons/ri";
import { RiDoorLockBoxLine } from "react-icons/ri";
import { signIn } from "next-auth/react";
function LoginComponent() {
  return (
    <div className="flex-1 flex  items-center flex-col h-max  w-max">
    <div className="mt-6 flex-1 ">
        <h1 className="text-6xl">
            <Image src={logo} width={200} height={200}></Image>
        </h1>
    </div>
    <div className="mt-[10%] flex-1  h-min max-sm:w-full w-[60%]  p-6">
        <div className="mb-3">
            <h1 className="text-4xl">Sigin in</h1>
            <h3>Sigin in here</h3>
        </div>
        <div>
            <div className="flex mb-3 items-center">
            <Input startContent={
            <RiUser3Fill size={20}/>

            } radius="sm" placeholder="Email"></Input>
            </div>
            <div className="flex mb-3 items-center">
            <Input type="password" startContent={
                <RiDoorLockBoxLine/>
            } radius="sm" placeholder="Password"></Input>
            </div>
            
        </div>
        <div className="flex gap-4">
            <Button color="secondary">Login</Button>
            <Button >Signup</Button>

        </div>
        <Divider className="mt-2"></Divider>
        <div className="flex justify-center mt-4 gap-3">
        <Button onClick={()=>{signIn("google")}}>Google</Button>
        <Button onClick={()=>{signIn("github")}}>Github</Button>

        </div>
        
    </div>
</div>
)
}

export default LoginComponent