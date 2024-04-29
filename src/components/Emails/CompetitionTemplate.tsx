import React from 'react'

const Template = ({ 
  firstName, 
  lastName, 
  email, 
  phone, 
  series,
  birthDate,
  competitionType
} : {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  amount: string
  series?: string
  birthDate?: string
  competitionType: string
}) => {
  return (
    <div>
      <h1>Uusi ilmoittautuminen kilpailuun!</h1>
      <p><b>{firstName} {lastName} on ilmoittautunut kilpailuun ({competitionType})!</b></p>
      <p><b>Kilpailu:</b> {competitionType}</p>
      {
        series && (
          <p><b>Sarja:</b> {series}</p>
        )
      }
      <p><b>Nimi:</b> {firstName} {lastName}</p>
      {
        birthDate && (
          <p><b>Syntymäaika:</b> {birthDate}</p>
        )
      }
      <p><b>Sähköposti:</b> {email}</p>
      <p><b>Puhelinnumero:</b> {phone}</p>
    </div>
  )
}

export default Template
