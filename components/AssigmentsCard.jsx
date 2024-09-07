import { CreateAssigment, getAssigments } from '@/lib/Firebase'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardHeader } from '@nextui-org/card'
import { Divider } from '@nextui-org/divider'
import React from 'react'

export const MCard = ({Name,Date}) =>{
    return(
        <Card className='w-[12rem] bg-transparent min-w-[12rem] border-2 border-[#1b232e]'>
            <CardHeader>{Name}</CardHeader>
            <Divider></Divider>
            <CardBody>ssjldasljdsjl</CardBody>
            <CardBody>
                <Button>Log</Button>
            </CardBody>

        </Card>
    )
}

async function AssigmentsCard() {
    const datarray = await getAssigments()
  return (
    <div
    className='flex overflow-x-scroll w-full gap-2 '
>
    {datarray.map((E)=>{
        return <MCard Name={E.Name}/>
    })}

    
</div>

  )
}

export default AssigmentsCard