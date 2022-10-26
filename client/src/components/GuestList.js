import React from 'react'
import GuestItem from './GuestItem'

const GuestList = ({guests, deleteBooking}) => {

    const guestList = guests.map((guest) => {
      return <GuestItem guest={guest} deleteBooking={deleteBooking} key={guest._id}/>
    })

  return (
    <div>{guestList}</div>
    
  )
}


export default GuestList