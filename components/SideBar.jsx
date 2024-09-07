'use client';
import { Avatar } from '@nextui-org/avatar'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router';
import React, { useState } from 'react'
import { Ri24HoursFill, Ri4kFill } from 'react-icons/ri'

const Bar = () =>{

    const Router = useRouter()
    

    return (
        <Button onClick={()=>{Router.push("/dashboard/Calender")}} className='bg-transparent w-full justify-start items-center hover:bg-slate-500 p-0 pl-3'  startContent={<Ri24HoursFill size={15}/>}>
            <p className='max-sm:hidden'>Home</p>
        </Button>
    )
}



function SideBar({session}) {
    console.log(session?.user)
    const [open,setopen] = useState("hidden")
    const Router = useRouter()
  return (
    <div className='  w-full h-full flex p-4 flex-col gap-1'>
        <div className='hover:bg-[#46484b] rounded-xl p-3 flex flex-col  items-start 'onClick={()=>{
                if(open==="hidden"){
                    setopen("block")

                }else{
                    setopen("hidden")
                }
                
                ;console.log("sd")}}>
            <div className='flex  items-center' >
                <Avatar src={session?.user.image} radius='sm'></Avatar>
                    <div className='ml-4 max-sm:hidden'>
                        <h1>{session?.user.names}</h1>
                        <h1>jdsj</h1>
                    </div>
            </div>
            <div className={`${open} transition-all`}>
                <div>
                    <Button onClick={()=>{

                        signOut();
                        Router.push("/login")
                    }}>Logout</Button>
                </div>
            </div>
        </div>
        <Divider className='mt-4'/>
        <Bar/>
        <Bar/>
        <Bar/>

    </div>
  )
}

export default SideBar