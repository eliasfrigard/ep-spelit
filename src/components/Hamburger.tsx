import React from 'react'

const Hamburger = ({ 
    active,
    scrolled,
    handleClick 
  }:{
    active: boolean,
    scrolled: boolean,
    handleClick: () => void
  }) => {
  return (
    <div className='burger' onClick={handleClick}>
      <div className={`burgerLine duration-300 ${scrolled || active ? 'bg-white' : 'bg-black'} ${active && 'transform rotate-45 translate-y-[4px]'}`}></div>
      <div className={`burgerLine duration-300 ${scrolled ? 'bg-white' : 'bg-black'} ${active && 'hidden'}`}></div>
      <div className={`burgerLine duration-300 ${scrolled || active ? 'bg-white' : 'bg-black'} ${active && 'transform -rotate-45 -translate-y-[5px]'}`}></div>
    </div>
  )
}

export default Hamburger
