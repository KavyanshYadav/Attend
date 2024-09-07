import Image from 'next/image'
import React from 'react'
import logo from "../logo.png"

function loading() {
  return (
    <div>
        <Image src={logo} width={400} height={200}></Image>
    </div>
  )
}

export default loading