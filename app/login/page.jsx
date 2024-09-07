
import { Button } from "@nextui-org/button"
import { Divider } from "@nextui-org/divider"
import { Input } from "@nextui-org/input"
import Image from "next/image"
import React from "react"
import logo from "../logo.png"
import { RiUser3Fill } from "react-icons/ri";
import { RiDoorLockBoxLine } from "react-icons/ri";



export default function Login() {
    return(
        <div className="flex relative w-full h-screen">
            <div className="absolute"></div>
            <div className="flex-1 max-sm:hidden w-full h-full">
            <video className="h-full" controls>
                <source src="../name.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>
            <div className="flex-1 flex  items-center flex-col h-full w-full">
                <div className="mt-6">
                    <h1 className="text-6xl">
                        <Image src={logo} width={200} height={200}></Image>
                    </h1>
                </div>
                <div className="mt-[10%]  h-min w-[60%] p-6">
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
                    <Button>Google</Button>
                    <Button>Github</Button>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}