import React from "react"


function getData(){
  return new Promise((res,reject)=>{
    setTimeout(()=>{res(90)},4000)
  })
}

export default async function Page() {
    const f = await getData()
    return <h1>Hello, Home page!{f}</h1>
  }