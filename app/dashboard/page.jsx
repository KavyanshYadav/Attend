import Topbar from "@/components/Topbar"
import React from "react"


function getData(){
  return new Promise((res,reject)=>{
    setTimeout(()=>{res(90)},4000)
  })
}

export default async function Page() {
    return (
      <div>
        <Topbar/>
      </div>
    )
  }