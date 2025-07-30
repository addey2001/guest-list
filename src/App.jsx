import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  const guests = [
  { name: "Alice", rsvp: true },
  { name: "Bob", rsvp: false },
  { name: "Charlie", rsvp: true }
];



const App = () => {
return (
<>
<h1>Guest List</h1>
<h2>Currently attending: {guests.filter(guest => guest.rsvp).length}</h2>

<h2>RSVP Status</h2>
<ul>{guests.map(({name, rsvp}, idx) => {
  return (
 <li key={idx}> 
    {name} - {rsvp ? "Attending" : "Not Attending"}
</li>
  )
 
})

}</ul>
</>





)}

export default App
