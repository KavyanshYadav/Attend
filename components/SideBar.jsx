import { Avatar } from '@nextui-org/avatar'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import React from 'react'
import { Ri24HoursFill, Ri4kFill } from 'react-icons/ri'


const Bar = () =>{
    return (
        <Button className='bg-transparent w-full justify-start items-center hover:bg-slate-500 p-0 pl-3'  startContent={<Ri24HoursFill size={15}/>}>
            <p className='max-sm:hidden'>Home</p>
        </Button>
    )
}



function SideBar() {
  return (
    <div className='w-full h-full flex p-4 flex-col gap-1'>
        <div className='flex items-center'>
           <Avatar radius='sm'></Avatar>
            <div className='ml-4 max-sm:hidden'>
                <h1>Name</h1>
                <h1>jdsj</h1>
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