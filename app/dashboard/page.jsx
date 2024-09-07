import AssigmentsCard, { MCard } from "@/components/AssigmentsCard"
import Topbar from "@/components/Topbar"
import { Button } from "@nextui-org/button"
import React from "react"
import { RiCloseCircleFill } from "react-icons/ri"


function getData(){
  return new Promise((res,reject)=>{
    setTimeout(()=>{res(90)},4000)
  })
}

export default async function Page() {
    return (
      <div className="w-full">
  <Topbar />
  <div className="flex">
  <h1 className="text-2xl">Assignments</h1>
    <Button className="ml-auto" endContent={<RiCloseCircleFill/>}>Create Assigment</Button>
  </div>
  <div className="w-full">
    <AssigmentsCard/>
  </div>
</div>


    )
  }