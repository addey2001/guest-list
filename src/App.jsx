import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const guests = [
  { name: "Alice", rsvp: true },
  { name: "Bob", rsvp: false },
  { name: "Charlie", rsvp: true }
];
return (
<>
<h1>Guest List</h1>
<p>{guests.name}</p>

<h2>RSVP Status</h2>
<ul>{guests.map((guest) => {
  <li> 
    {guest.name} - {guest.rsvp ? "Attending" : "Not Attending"}
</li>
}




)

}</ul>
</>





)}

export default App
