import React from 'react'
import Image from 'next/image'
import { ContentfulImage } from '@/types'

const Card = ({ 
    image,
    name, 
    role,
    location,
    className,
  }:{
    image?: ContentfulImage,
    name: string,
    role: string,
    location: string,
    className?: string
  }) => {
    const getInitials = (name: string): string => {
      const words: string[] = name.split(" ");
  
      // Get the first letter of each word and concatenate them
      return words.map(word => word[0].toUpperCase()).join("");
    }

  return (
    <div className={`flex flex-col justify-center text-center gap-4 items-center ${className}`}>
      {
        image ? (
          <div className='relative rounded-full overflow-hidden shadow-md h-20 w-20'>  
            <Image
              className={`object-cover`}
              alt={image.altText}
              src={image.url + '?w=3440'}
              fill
              sizes="(min-width: 768px) 80vw, 100vw"
              placeholder={image?.blur ? 'blur' : 'empty'}
              blurDataURL={image?.blur}
            />
          </div>
        ) : (
          <div className= 'shadow-xs bg-[#283740] text-white h-20 w-20 rounded-full flex justify-center items-center'>
            <p className='text-2xl font-bold tracking-wide'>{getInitials(name)}</p>
          </div>
        )
      }

      <div className='tracking-wide flex flex-col gap-1'>
        <p className='font-bold'>{name}</p>
        <p className='text-sm italic font-medium'>{role}, {location}</p>
      </div>
    </div>
  )
}

export default Card
