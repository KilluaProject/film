import Image from 'next/image';
import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <div className='max-w-6xl bg-black mx-auto relative bottom-0  flex items-center justify-between py-4'>
        <p className='text-[12px]'>Copyright by Killua {currentYear}</p>
    </div>
  )
}

export default Footer