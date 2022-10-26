import React from 'react'

const GuestItem = ({guest, deleteBooking}) => {

  return (
    <div>
    <h3>Name: {guest.name}</h3>
    <p>Email: {guest.email}</p>
    <p>Is Guest checked in?: {guest.isCheckedIn ? 'Checked in ✅' : 'Not yet checked in'} </p>
    <button onClick={()=>deleteBooking(guest._id)}> 🗑 </button>
    
    
    </div>
  )
}

export default GuestItem