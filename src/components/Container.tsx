import React from 'react'
import AnimateIn from './AnimateIn'

const Container = ({
  children,
  className
} : {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <AnimateIn className='w-full flex justify-center items-center px-3 md:px-0'>
      <div className={`w-full h-full container ${className}`}>
        {children}
      </div>
    </AnimateIn>
  )
}

export default Container
