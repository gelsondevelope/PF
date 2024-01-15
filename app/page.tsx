"use client"
import Image from 'next/image'
import { Bunner } from './Components/Bunner/page'
import Footer from './Components/Footer/page'
import { Navbar } from './Components/Header/navbar'
import HumanizingBrands from './HumanizingBrands'
import { ContainerImage } from './Components/ContainerImage/Container'
import MainContainer from './Components/ContainerImage/maincontainer'
import { Modal } from './Components/User/Modal/page'
import { useState } from 'react'


export default function Home() {
  const [open,setopen]=useState<boolean>(false)
  function isOpen(){
      setopen(true)
  }
  function isClose(){
    setopen(!true)
}
  return (
    <>
   <Navbar/>
      <Bunner/>

      <MainContainer children1='yyyyyyy' children2='sssssssss'>
      
      
       </MainContainer>
       <button onClick={isOpen}>Abrir</button>
       <Modal isOpen={open} onClose={isClose}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia repellat molestiae, reiciendis molestias, ut corrupti eum quis ex aliquam consectetur tenetur alias maxime accusamus commodi eius dolorem! Eius, iste alias.
       </Modal>
    
    </>
  )
}
