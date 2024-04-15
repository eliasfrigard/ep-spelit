import React from 'react'

const Form = ({ 

  }:{

  }) => {
  return (
  <form className='container max-w-4xl my-8 flex flex-col gap-6 px-6'> 
    <div className="">
      <h2 className="text-lg font-semibold leading-7 text-gray-900">Yhteydenottolomake</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Etunimi</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Sukunimi</label>
          <div className="mt-2">
            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-full">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Sähköposti</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Viesti</label>
          <div className="mt-2">
            <textarea id="about" name="about" rows={6} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
        </div>
      </div>
    </div>
    
    <button type="submit" className='cursor-pointer w-full h-12 bg-red-500/70 text-white rounded-lg font-bold tracking-wide hover:scale-105 duration-300 hover:bg-red-500/100'>Lähetä viesti</button>
  </form>
  
  )
}

export default Form
