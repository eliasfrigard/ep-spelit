import React from 'react';

const TextField = ({ 
  name,
  label,
  value,
  options,
  handleChange,
  fullSize = false,
}: {
  name: string,
  label: string,
  value: string,
  options: string[],
  handleChange: (value: string) => void,
  fullSize?: boolean,
}) => {
  return (
    <div className={`${fullSize ? 'sm:col-span-full' : 'sm:col-span-3'}`}>
      <label htmlFor={name} className="block text-sm font-bold leading-6 text-[#283740]/60">{label}</label>
      <div className="mt-2">
        <select onChange={(e) => handleChange(e.target.value)} value={value} name={name} id={name} className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6">
          {
            options.map((value, index) => (
              <option key={index} value={value}>{value}</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default TextField