import Image from 'next/image';
import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <div className='max-w-6xl w-full bg-black mx-auto p-6 relative bottom-0  flex items-center justify-between py-4'>
        <p className='text-[12px]'>Copyright by Killua {currentYear}</p>
    </div>
  )
}

export default Footer