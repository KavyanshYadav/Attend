import { Button } from '@nextui-org/button'
import { Input, Textarea } from '@nextui-org/input'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='flex w-screen h-screen items-center flex-col'>
        <div className='flex flex-col items-center border-1 w-[70%] max-sm:w-[90%] h-full'>
            <div className='p-3 mt-40  max-sm:w-full w-[100%]'>
                <div className='flex  max-sm:flex-col flex-row'>

                    <div className='flex'>
                        <img 
                        className='max-sm:w-full rounded-xl w-[17rem] h-[15rem]'
                        width={200} height={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-V60P4f_c5jNgCpiIRubR2kjveE0rgmJ6A&s"/>
                    </div>
                    <div className=' ml-5 flex-1 flex flex-col'>
                        <div><h1 className='text-xl font-bold'>Create A new Assigment</h1></div>
                        <div>
                            <Input className='bg-transparent' size={100}  placeholder='Event Name'></Input>

                        </div>
                        <div className='mt-3'>
                            <Textarea placeholder='Desc'></Textarea>
                        </div>
                        <div className='flex gap-4 mt-3'>
                            <div className='flex gap-2'>
                                <Button>Stat</Button>
                                <Button>Stat</Button>
                            </div>
                            <div>
                                <Button>Dsdk</Button>
                            </div>
             
                        </div>
                        <Button color='secondary' className='mt-3'>Create</Button>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default page