import React from 'react'
import Card from "./components/card";
import Navbar from "./components/navbar";


const App = () => {

  const user = "Hrithik"
  const age = 22

  return (
    <div>
      <Card />
      <Navbar />
      <Card />
      <Navbar />
      <Card />
      <Navbar />
    </div>
  )
}

export default App