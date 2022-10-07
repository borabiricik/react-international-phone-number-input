import React, { useState } from 'react'
import './App.css'
import { PhoneInput } from 'react-international-phone-number-input'
import 'react-international-phone-number-input/dist/index.css'

function App() {
  const [deneme, setdeneme] = useState('')
  return (
    <div style={{ width: 300 }}>
      <PhoneInput
        containerProps={{}}
        defaultCountry='KW'
        dropdownButtonProps={{
          // flagWidth: 30,
          // flagHeight: 30
          minWidth: 25,
          className: 'bg-red-200'
        }}
        disableCountrySelect
        flagProps={{
          rounded: true
        }}
        inputProps={{}}
        onInputChange={(values) => {
          console.log(values)
        }}
        prepend={<div>asdasdadasd</div>}
      />
    </div>
  )
}

export default App
