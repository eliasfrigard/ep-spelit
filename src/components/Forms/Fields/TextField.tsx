import React from 'react';

const TextField = ({ 
  type='text',
  name,
  label,
  value,
  placeholder,
  handleChange,
  fullSize = false,
  className = '',
}: {
  type?: string,
  name: string,
  label: string,
  value: string,
  placeholder: string,
  handleChange: (value: string) => void,
  fullSize?: boolean,
  className?: string,
}) => {
  return (
    <div className={`${fullSize ? 'sm:col-span-full' : 'sm:col-span-3'} ${className}`}>
      <label htmlFor={name} className="block text-sm font-bold leading-6 text-[#283740]/60">{label}</label>
      <div className="mt-2">
        <input onChange={(e) => handleChange(e.target.value)} value={value} type={type} name={name} id={name} placeholder={placeholder} className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6" />
      </div>
    </div>
  )
}

export default TextField