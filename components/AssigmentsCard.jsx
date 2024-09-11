import { CreateAssigment, getAssigments } from '@/lib/Firebase'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import React from 'react'
import { RiAccountBoxFill, RiAccountCircleFill } from 'react-icons/ri'

export const MCard = ({Name,Date}) =>{
    return(
        <Card className='max-sm:flex-row w-[12rem] bg-[#1C1E20] min-w-[12rem] border-2 border-[#1f2224]'>
            <CardBody>
                <div className='items-center flex max-sm:flex-row justify-around flex-col'>
                    <h1>Name</h1>
                    <Button></Button>
                </div>
                
            </CardBody>

        </Card>
    )
}

async function AssigmentsCard() {
    const datarray = await getAssigments()
  return (
    <div
    className='flex overflow-x-scroll p-2 w-full gap-2 '
>
    {datarray.map((E,index)=>{
        return <MCard Name={E.Name} key={index}/>
    })}

    
</div>

  )
}

export default AssigmentsCard