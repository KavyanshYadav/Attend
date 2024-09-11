"use client"
import AssigmentsCard, { MCard } from "@/components/AssigmentsCard"
import Topbar from "@/components/Topbar"
import { Button } from "@nextui-org/button"
import { useRouter } from "next/navigation"
import { Router } from "next/router"
import React, { useEffect, useRef, useState } from "react"
import { RiCloseCircleFill } from "react-icons/ri"


function getData(){
  return new Promise((res,reject)=>{
    setTimeout(()=>{res(90)},4000)
  })
}

export default async function Page() {

  const TopBarRef = useRef();
  const [isFixed, setIsFixed] = useState("");
  const router = useRouter()


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed("fixed");
        console.log("anmd",isFixed)
      },
      { threshold: 0.7 } // Trigger when the element fully goes out of view
    );

    if (TopBarRef.current) {
      observer.observe(TopBarRef.current);
    }

    return () => {
      if (TopBarRef.current) {
        observer.unobserve(TopBarRef.current);
      }
    };
  }, []);
  

    return (
      <div className="w-full">
        <div ref={TopBarRef} className={`w-full  z-30`}>
          <Topbar />
        </div>
  <div className="flex">
  <h1 className="text-2xl">Assignments</h1>
    <Button onClick={()=>{router.push("/create")}} className="ml-auto" endContent={<RiCloseCircleFill/>}>Create Assigment</Button>
  </div>
  <div className="w-full">
    <AssigmentsCard/>
    <AssigmentsCard/>
    <AssigmentsCard/>
    <AssigmentsCard/>

  </div>
</div>


    )
  }