import Image from 'next/image'
import React from 'react'
import logo from "../app/logo.png"
function Topbar() {
  return (
    <div className='flex  items-center pb-4'>
        <div>

        <h1 className='text-xl'>Hey , UssrName</h1>
        <h1 className='text-Csecondary'>Date Monday 12, oct</h1>
        </div>
        <div className='ml-auto w-40 h-max'>
            <Image src={logo}></Image>
        </div>
    </div>
  )
}

export default Topbar