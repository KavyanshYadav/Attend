import SideBar from '@/components/SideBar'
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

async function layout({children}) {
  const session = await getServerSession(authOptions)
    console.log("name",session)

    if(session==null){
      redirect("/login")
    }
    
  return (
    <div className='flex w-screen h-screen '>
        <div className='flex-[1] max-sm:w-[20%] h-full '>
            <SideBar session={session}/>
        </div>
        <div className='flex-[5] pt-4 '>
          <div className='w-full p-4 h-full border-solid border-1 border-[#3a3a3b] rounded-md'>

          {children}
          </div>

        </div>
    </div>
  )
}

export default layout