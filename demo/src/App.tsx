import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { PhoneInput } from 'react-international-phone-number-input'
import 'react-international-phone-number-input/dist/index.css'

function App() {
  const [deneme, setdeneme] = useState('')
  return (
    <div>
      <PhoneInput
        defaultCountry='KW'
        flagProps={{
          rounded: true
        }}
        onInputChange={(values) => {
          console.log(values)
        }}
      />
    </div>
  )
}

export default App
