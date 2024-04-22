import React from 'react'
import TextLayout from './TextLayout'
import Divider from './Divider'
import AnimateIn from './AnimateIn'

const Artist = ({ 
  name,
  textContent,
  }:{
  name: string
  textContent: any
  }) => {
  return (
    <AnimateIn className='w-full flex justify-center items-center px-3 lg:px-6'>
      <div className='max-w-5xl rounded-lg shadow-xs border-opacity-40 lg:px-6 py-10 lg:py-12 lg:border-[1px] border-[#283740] container flex flex-col justify-center items-center'>
        <h2 className='text-5xl uppercase font-bold tracking-wide'>{name}</h2>
        <Divider className='w-1/2 mb-4 mt-6' />
        <TextLayout text={textContent} className='text-primary-600 px-2' type='single' />
      </div>
    </AnimateIn>
  )
}

export default Artist
