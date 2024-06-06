import React from 'react'
import AnimateIn from '../AnimateIn'

import TextField from './Fields/TextField'
import DropdownField from './Fields/DropdownField'
import SubmitButton from './Fields/SubmitButton'

const Form = ({ 
    subtitle = 'Tästä voit ilmoittautua spelien soittokilpailuun!'
  }:{
    subtitle?: string
  }) => {
    const [sending, setSending] = React.useState(false)
    const [formHasBeenSent, setFormHasBeenSent] = React.useState(false)
    const [formType, setFormType] = React.useState('06438a38-1d24-4343-91c5-7f2d6e5393c8')

    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [competitionType, setCompetitionType] = React.useState('')
    const [series, setSeries] = React.useState('')
    const [birthDate, setBirthDate] = React.useState('')

    const competitionTypes = [
      'mandoliininsoiton SM kilpailu',
      'huuliharpunsoiton SM kilpailu',
      '1-rivinen haitari Spelimestaruuskilpailu',
      '2-rivinen haitari Spelimestaruuskilpailu',
      'yhtyeet'
    ]

    const oneRowSeriesValues = [
      'yleinen', 'yli 50 v.'
    ]

    const twoRowSeriesValues = [
      'Alle 8 vuotiaat', 'Alle 12 vuotiaat', 'Alle 15 vuotiaat', 'Alle 18 vuotiaat', 'yleinen', 'yli 50 v.'
    ]
      
    React.useEffect(() => {
      setSeries('yleinen')
    }, [competitionType])

    const handleFormSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      setSending(true)
  
      const response = await fetch('/api/competition', {
        method: 'POST',
        body: JSON.stringify({ formType, firstName, lastName, email, phone, competitionType, series, birthDate }),
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
        setCompetitionType('')
        setSeries('')
        setBirthDate('')
      }
    }  

  return (
  <form className='container max-w-4xl flex flex-col gap-6 px-6 md:mb-4'> 
    <AnimateIn className="">
      <h2 className="text-lg font-semibold leading-7 text-[#283740]/60">Ilmoittautumislomake</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">{subtitle}</p>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
        <TextField
          type="text"
          name="form-type"
          label="Form Type"
          value={formType}
          placeholder="Form Type"
          handleChange={setFormType}
          className='hidden'
          fullSize
        />

        <DropdownField
          name="competition-type"
          label="Kilpailulaji"
          value={competitionType}
          options={competitionTypes}
          handleChange={setCompetitionType}
          fullSize
        />

        {
          competitionType === '1-rivinen haitari Spelimestaruuskilpailu' && (
            <DropdownField
              name="series"
              label="Sarja"
              value={series}
              options={oneRowSeriesValues}
              handleChange={setSeries}
              fullSize
            />
          )
        }

        {
          competitionType === '2-rivinen haitari Spelimestaruuskilpailu' && (
            <DropdownField
              name="series"
              label="Sarja"
              value={series}
              options={twoRowSeriesValues}
              handleChange={setSeries}
              fullSize
            />
          )
        }

        {
          (
            series === 'Alle 8 vuotiaat' || 
            series === 'Alle 12 vuotiaat' || 
            series === 'Alle 15 vuotiaat' || 
            series === 'Alle 18 vuotiaat'
          ) && (
            <TextField
              type="date"
              name="birthDate"
              label="Syntymäaika"
              value={birthDate}
              placeholder="Syntymäaika"
              handleChange={setBirthDate}
              fullSize
            />
          )
        }

        <TextField
          type="text"
          name="first-name"
          label="Etunimi"
          value={firstName}
          placeholder="Etunimi"
          handleChange={setFirstName}
        />

        <TextField
          type="text"
          name="last-name"
          label="Sukunimi"
          value={lastName}
          placeholder="Sukunimi"
          handleChange={setLastName}
        />

        <TextField
          type="email"
          name="email"
          label="Sähköposti"
          value={email}
          placeholder="Sähköposti"
          handleChange={setEmail}
        />

        <TextField
          type="tel"
          name="phone"
          label="Puhelinnumero"
          value={phone}
          placeholder="Puhelinnumero"
          handleChange={setPhone}
        />
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
