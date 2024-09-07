import SideBar from '@/components/SideBar'
import React from 'react'

function layout({children}) {
  return (
    <div className='flex w-screen h-screen '>
        <div className='flex-[1] max-sm:w-[20%] h-full '>
            <SideBar/>
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