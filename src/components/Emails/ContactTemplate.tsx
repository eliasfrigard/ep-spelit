import React from 'react'

const Template = ({ 
  firstName, 
  lastName, 
  email, 
  message
} : {
  firstName: string
  lastName: string
  email: string
  message: string
}) => {
  return (
    <div>
      <h1>Uusi yhteydenotto!</h1>
      <p><b>Nimi:</b> {firstName} {lastName}</p>
      <p><b>Sähköposti:</b> {email}</p>
      <p><b>Viesti:</b> {message}</p>
    </div>
  )
}

export default Template
