import React from 'react'
import TextLayout from './TextLayout'
import { ContentfulImage } from '../types'
import Image from 'next/image'

const Artist = ({ 
  name,
  textContent,
  }:{
  name: string
  textContent: any
  }) => {
  return (
    <div className='w-full flex justify-center items-center px-3 lg:px-6'>
      <div className='max-w-5xl rounded-lg shadow-md border-opacity-35 lg:px-6 py-10 lg:py-12 lg:border-2 border-accent-500 container flex flex-col justify-center items-center'>
        <h2 className='text-5xl uppercase font-bold tracking-wide'>{name}</h2>
        <div className='h-[2px] rounded-full mb-4 mt-6 w-1/2 bg-primary-500 opacity-30'></div>

        <TextLayout text={textContent} className='text-primary-600 px-2' type='single' />
      </div>
    </div>
  )
}

export default Artist
