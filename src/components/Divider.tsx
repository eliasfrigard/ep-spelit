import React from 'react'

const Divider = ({
  className,
} : {
  className?: string
}) => {
  return (
    <div className={`h-[1px] rounded-full opacity-20 bg-[#283740] ${className}`} />
  )
}

export default Divider
