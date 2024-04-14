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
    <div className='w-full flex justify-center items-center'>
      <div className='container flex flex-col justify-center items-center'>
        <h2 className='text-5xl uppercase font-bold tracking-wide'>{name}</h2>
        <div className='h-[2px] rounded-full mb-4 mt-6 w-1/2 bg-primary-500 opacity-30'></div>

        <TextLayout text={textContent} className='text-primary-600' type='single' />
      </div>
    </div>
  )
}

export default Artist
