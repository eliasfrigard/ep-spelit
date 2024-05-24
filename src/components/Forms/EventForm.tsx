import React from 'react'
import AnimateIn from '../AnimateIn'

import SubmitButton from './Fields/SubmitButton'

const Form = ({
  subtitle,
  eventType
} : {
  subtitle: string
  eventType: string
}) => {
  const [sending, setSending] = React.useState(false)
  const [formHasBeenSent, setFormHasBeenSent] = React.useState(false)
  const [formType, setFormType] = React.useState('06438a38-1d24-4343-91c5-7f2d6e5393c8')

  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [artist, setArtist] = React.useState('')
  const [website, setWebsite] = React.useState('')
  const [time, setTime] = React.useState('')
  const [info, setInfo] = React.useState('')
  const [sound, setSound] = React.useState('')

  const handleFormSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSending(true)

    const response = await fetch('/api/event', {
      method: 'POST',
      body: JSON.stringify({formType, eventType, firstName, lastName, email, phone, artist, website, time, info, sound}),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      setSending(false)
      setFormHasBeenSent(true)
      setFormType('06438a38-1d24-4343-91c5-7f2d6e5393c8')
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhone('')
      setArtist('')
      setWebsite('')
      setTime('')
      setInfo('')
      setSound('')
    }
  }

  return (
  <form className='container max-w-4xl flex flex-col gap-6 px-6 md:mb-4'>
    <AnimateIn className="">
      <h2 className="text-lg font-semibold leading-7 text-[#283740]/60">Ilmoittautumislomake</h2>
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

        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-sm font-bold leading-6 text-[#283740]/60">Sähköposti</label>
          <div className="mt-2">
            <input onChange={(e) => setEmail(e.target.value)} value={email} id="email" name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="phone" className="block text-sm font-bold leading-6 text-[#283740]/60">Puhelinnumero</label>
          <div className="mt-2">
            <input onChange={(e) => setPhone(e.target.value)} value={phone} id="phone" name="phone" type="tel" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-full">
          <label htmlFor="artist" className="block text-sm font-bold leading-6 text-[#283740]/60">Esiintyvän ryhmän nimi</label>
          <div className="mt-2">
            <input onChange={(e) => setArtist(e.target.value)} value={artist} id="artist" name="artist" type="text" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="sm:col-span-full">
          <label htmlFor="website" className="block text-sm font-bold leading-6 text-[#283740]/60">Esiintyvän ryhmän nettisivu</label>
          <div className="mt-2">
            <input onChange={(e) => setWebsite(e.target.value)} value={website} id="website" name="website" type="text" className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="time" className="block text-sm font-bold leading-6 text-[#283740]/60">Esiintymisaikatoive</label>
          <div className="mt-2">
            <textarea onChange={(e) => setTime(e.target.value)} value={time} id="time" name="time" rows={6} className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="info" className="block text-sm font-bold leading-6 text-[#283740]/60">Kerro ryhmästäsi</label>
          <div className="mt-2">
            <textarea onChange={(e) => setInfo(e.target.value)} value={info} id="info" name="info" rows={6} className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p className="mt-3 text-xs leading-6 text-gray-600">Luettelethan pelimannikortteja varten ryhmäsi jäsenten nimet. Kiitos.</p>
        </div>

        <div className="col-span-full">
          <label htmlFor="sound" className="block text-sm font-bold leading-6 text-[#283740]/60">Terveiset äänentoistolle</label>
          <div className="mt-2">
            <textarea onChange={(e) => setSound(e.target.value)} value={sound} id="sound" name="sound" rows={6} className="block w-full rounded-md border-0 py-1.5 text-[#283740]/60 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#283740]/60 sm:text-sm sm:leading-6"></textarea>
          </div>
          <p className="mt-3 text-xs leading-6 text-gray-600">Kirjoita tähän toiveet äänentoistosta.</p>
        </div>
      </div>
    </AnimateIn>
    
      <SubmitButton
        sending={sending}
        handleSubmit={handleFormSubmit}
        formHasBeenSent={formHasBeenSent}
      />
    </form>
  )
}

export default Form
