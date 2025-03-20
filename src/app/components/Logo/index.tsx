import logo from '@/assets/logo.png'
import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <Image src={logo} alt="Cloud and sun logo" width={80} height={30} />

      <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
        <span className="text-blue">WeatherMe</span>
      </h1>
    </div>
  )
}

export default Logo
