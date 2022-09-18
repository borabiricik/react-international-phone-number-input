import React, { useState } from 'react'
import './App.css'
import { PhoneInput } from 'react-international-phone-number-input'
import 'react-international-phone-number-input/dist/index.css'

function App() {
  const [deneme, setdeneme] = useState('')
  return (
    <div>
      <PhoneInput
        containerProps={{}}
        defaultCountry='KW'
        dropdownButtonProps={{
          // flagWidth: 30,
          // flagHeight: 30
          minWidth: 25
        }}
        disableCountrySelect={false}
        flagProps={{
          rounded: true
        }}
        inputProps={{}}
        onInputChange={(values) => {
          console.log(values)
        }}
      />
    </div>
  )
}

export default App
