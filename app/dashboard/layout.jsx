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
    <div className="flex max-sm:flex-col w-screen h-screen">
  <div className="flex-[1] w-full max-sm:order-2 h-full max-sm:max-h-[10%]">
    <SideBar session={session} />
  </div>
  <div className="flex-[5] w-full pt-4 overflow-hidden">
    <div className="w-full p-4 h-full border-solid border-1 border-[#3a3a3b] rounded-md overflow-y-auto">
      {children}
    </div>
  </div>
</div>

  )
}

export default layout