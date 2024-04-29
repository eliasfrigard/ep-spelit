import React from 'react'
import AnimateIn from '../AnimateIn'

const Form = ({
    productType,
    subtitle
  }:{
    productType: string
    subtitle: string
  }) => {
    const [formType, setFormType] = React.useState('06438a38-1d24-4343-91c5-7f2d6e5393c8')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [amount, setAmount] = React.useState('1')

    const handleFormSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      let response

      if (productType === 'history') {
        response = await fetch('/api/history', {
          method: 'POST',
          body: JSON.stringify({formType, firstName, lastName, email, phone, address, amount}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      } else if (productType === 'music') {
        response = await fetch('/api/music', {
          method: 'POST',
          body: JSON.stringify({formType, firstName, lastName, email, phone, address, amount}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
    }

  return (
  <form className='container max-w-4xl flex flex-col gap-6 px-6 md:mb-4'> 
    <AnimateIn className="">
      <h2 className="text-lg font-semibold leading-7 text-[#283740]/60">Tilauskaavake</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">{subtitle}</p>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
        <div className="sm:col-span-full hidden">
          <label htmlFor="first-name" className="block text-sm font-bold leading-6 text-[#283740]/60">Form Type</label>
          <div className="mt-2">
            <input onChange={(e) => setFormType(e.target.value)} value={formType} type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-bold leading-6 text-[#283740]/60">Etunimi</label>
          <div className="mt-2">
            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm font-bold leading-6 text-[#283740]/60">Sukunimi</label>
          <div className="mt-2">
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-full">
          <label htmlFor="amount" className="block text-sm font-bold leading-6 text-[#283740]/60">Kappalemäärä</label>
          <div className="mt-2">
            <select onChange={(e) => setAmount(e.target.value)} value={amount} name="amount" id="amount" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6">
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
            <input onChange={(e) => setEmail(e.target.value)} value={email} id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="phone" className="block text-sm font-bold leading-6 text-[#283740]/60">Puhelinnumero</label>
          <div className="mt-2">
            <input onChange={(e) => setPhone(e.target.value)} value={phone} id="phone" name="phone" type="tel" autoComplete="phone" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="address" className="block text-sm font-bold leading-6 text-[#283740]/60">Lähetysosoite</label>
          <div className="mt-2">
            <textarea onChange={(e) => setAddress(e.target.value)} value={address} id="address" name="address" rows={6} className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
      </div>
    </AnimateIn>
    
    <button onClick={(e) => handleFormSubmit(e)} className='cursor-pointer w-full h-12 bg-red-500/70 text-white rounded-lg font-bold tracking-wide hover:scale-105 duration-300 hover:bg-red-500/100'>Lähetä viesti</button>
  </form>
  
  )
}

export default Form
