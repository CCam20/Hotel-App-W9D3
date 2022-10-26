import React, { useEffect, useState } from 'react'
import BookingForm from '../components/BookingForm'
import GuestList from '../components/GuestList'
import { deleteBooking as apiDeleteBooking} from '../components/GuestsService'


const GuestsContainer = () => {

    const [guests, setGuests] = useState([])
    
    useEffect(()=>{
        fetchGuests()
      },[]);
    
      const fetchGuests = () => {
        fetch('http://localhost:9000/api/bookings')
          .then(response => response.json())
          .then(guest => setGuests(guest));
      }
      const addBooking = ((booking) => {
        let temp = guests.map(g => g)
        temp.push(booking)
        setGuests(temp)
      })
      const deleteBooking = (id) => {
        apiDeleteBooking(id).then(()=>{
          let temp = guests.map(g=>g);
          const toDel = guests.map(g =>g._id).indexOf(id);
          temp.splice(toDel, 1);
          setGuests(temp);
        })
    }

  return (
    <>
    <GuestList guests={guests} deleteBooking={deleteBooking}/>
    <BookingForm addBooking={addBooking} />
    </>
  )
}

export default GuestsContainer