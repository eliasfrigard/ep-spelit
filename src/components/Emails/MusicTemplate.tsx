import React from 'react'

const Template = ({ 
  firstName, 
  lastName, 
  email, 
  phone, 
  address, 
  amount
} : {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  amount: string
}) => {
  return (
    <div>
      <h1>Uusi nuottivihon tilaus!</h1>
      <p><b>{firstName} {lastName} on tilannut {amount}kpl nuottivihkoa.</b></p>
      <p><b>Tuoteryhmä:</b> Nuotttivihko</p>
      <p><b>Nimi:</b> {firstName} {lastName}</p>
      <p><b>Kappalemäärä:</b> {amount}</p>
      <p><b>Sähköposti:</b> {email}</p>
      <p><b>Puhelinnumero:</b> {phone}</p>
      <p><b>Lähetysosoite:</b> {address}</p>
    </div>
  )
}

export default Template
