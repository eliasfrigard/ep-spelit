import React from 'react'
import Image from 'next/image'

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
    <div className='relative h-[50vh] w-full'>
      <Image
        className={`object-cover`}
        alt={altText}
        src={url + '?w=3440'}
        fill
        sizes="(min-width: 768px) 80vw, 100vw"
        placeholder={blur ? 'blur' : 'empty'}
        blurDataURL={blur}
      />
    </div>
  )
}

export default Banner
