import React from 'react'
import Image from 'next/image'
import AnimateIn from './AnimateIn'

const Banner = ({ 
    url,
    altText,
    blur,
  }:{
    url: string,
    altText: string,
    blur?: string,
  }) => {
  return (
    <AnimateIn className='relative h-[50vh] w-full'>
      <Image
        className={`object-cover`}
        alt={altText}
        src={url + '?w=3440'}
        fill
        sizes="(min-width: 768px) 80vw, 100vw"
        placeholder={blur ? 'blur' : 'empty'}
        blurDataURL={blur}
      />
    </AnimateIn>
  )
}

export default Banner
