import React from 'react'

const Form = ({ 
    subtitle
  }:{
    subtitle: string
  }) => {
  return (
  <form className='container max-w-4xl flex flex-col gap-6 px-6'> 
    <div className="">
      <h2 className="text-lg font-semibold leading-7 text-[#283740]/60">Tilauslomake</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">{subtitle}</p>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-bold leading-6 text-[#283740]/60">Etunimi</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-bold leading-6 text-[#283740]/60">Sukunimi</label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-full">
          <label htmlFor="rating" className="block text-sm font-bold leading-6 text-[#283740]/60">Kappalemäärä</label>
          <div className="mt-2">
            <select name="rating" id="rating" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-sm font-bold leading-6 text-[#283740]/60">Sähköposti</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-sm font-bold leading-6 text-[#283740]/60">Puhelinnumero</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="about" className="block text-sm font-bold leading-6 text-[#283740]/60">Lähetysosoite</label>
          <div className="mt-2">
            <textarea id="about" name="about" rows={6} className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
      </div>
    </div>
    
    <button type="submit" className='cursor-pointer w-full h-12 bg-red-500/70 text-white rounded-lg font-bold tracking-wide hover:scale-105 duration-300 hover:bg-red-500/100'>Lähetä viesti</button>
  </form>
  
  )
}

export default Form
