import React from 'react'

const Template = ({
  eventType,
  firstName, 
  lastName, 
  email, 
  phone,
  artist,
  time,
  info,
  sound,
} : {
  eventType: string
  firstName: string
  lastName: string
  email: string
  phone: string
  artist: string
  time: string
  info: string
  sound: string
}) => {
  return (
    <div>
      <h1>Uusi ilmoittautuminen ({eventType})!</h1>
      <p><b>Nimi:</b> {firstName} {lastName}</p>
      <p><b>Sähköposti:</b> {email}</p>
      <p><b>Puhelinnumero:</b> {phone}</p>
      <p><b>Esiintyvän ryhmän nimi:</b> {artist}</p>
      <p><b>Esiintymisaikatoive:</b> {time}</p>
      <p><b>Kerro ryhmästäsi:</b> {info}</p>
      <p><b>Terveiset äänentoistolle:</b> {sound}</p>
    </div>
  )
}

export default Template
