import React from 'react'
import {useState} from "react";
import { postBooking } from './GuestsService';


const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({})

    const onChange = (e) => {
      formData[e.target.id] = e.target.value
      setFormData(formData)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newFormData = {}
        newFormData["name"] = formData.name;
        newFormData["email"] = formData.email;
        newFormData["isCheckedIn"] = false
        postBooking(newFormData).then((data) => {
          addBooking(data)
        })
      
    }

  return (
    <form className='form' onSubmit={handleSubmit} method="post">

    <label htmlFor='name'>Name:</label>
    <input onChange={onChange} type="text" id='name' v-model='name' required/>

    <label htmlFor='email'>Email:</label>
    <input onChange={onChange} type="text" id='email' v-model='email' required/>

    <input type='submit' value="Save" id='save'/>
    </form>
  )
}

export default BookingForm