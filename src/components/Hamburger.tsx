import React from 'react'

const Hamburger = ({ 
    active, 
    handleClick 
  }:{
    active: boolean,
    handleClick: () => void
  }) => {
  return (
    <div className='burger' onClick={handleClick}>
      <div className={`burgerLine duration-300 ${active ? 'bg-white transform rotate-45 translate-y-[4px]' : 'bg-black'}`}></div>
      <div className={`burgerLine duration-300 ${active ? 'hidden' : 'bg-black'}`}></div>
      <div className={`burgerLine duration-300 ${active ? 'bg-white transform -rotate-45 -translate-y-[5px]' : 'bg-black'}`}></div>
    </div>
  )
}

export default Hamburger
