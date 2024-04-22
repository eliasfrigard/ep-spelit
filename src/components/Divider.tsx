import React from 'react'
import AnimateIn from './AnimateIn'

const Divider = ({
  className,
} : {
  className?: string
}) => {
  return (
    <AnimateIn className={`h-[1px] rounded-full opacity-20 bg-[#283740] ${className}`} />
  )
}

export default Divider
