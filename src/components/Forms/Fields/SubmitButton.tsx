import React from 'react'
import { ArrowPathIcon } from "@heroicons/react/24/solid"

const TextField = ({ 
  sending,
  handleSubmit,
  formHasBeenSent,
}: {
  sending: boolean
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void,
  formHasBeenSent: boolean,
}) => {
  return (
    <>
      {
        sending ? (
          <div onClick={(e) => e.preventDefault()} className='flex justify-center items-center cursor-pointer w-full h-12 bg-red-500/70 text-white rounded-lg font-bold tracking-wide duration-300'>
            {React.createElement(ArrowPathIcon, {
              strokeWidth: 2,
              className: "h-7 text-white animate-spin",
            })}
          </div>
        ) : (
          formHasBeenSent ? (
            <button onClick={(e) => e.preventDefault()} className='w-full cursor-default h-12 bg-green-500/70 text-white rounded-lg font-bold tracking-wide'>Viestisi on lähetetty!</button>
          ) : (
            <button onClick={(e) => handleSubmit(e)} className='cursor-pointer w-full h-12 bg-red-500/70 text-white rounded-lg font-bold tracking-wide hover:scale-105 duration-300 hover:bg-red-500/100'>Lähetä viesti</button>
          )
        )
      }
    </>
  )
}

export default TextField