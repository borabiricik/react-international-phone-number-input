import React, { useState } from 'react'

import 'react-international-phone-input/dist/index.css'
import { PhoneInput } from 'react-international-phone-input'

const App = () => {
  const [dialCode, setdialCode] = useState('')
  const [phoneNumber, setphoneNumber] = useState('')
  const [mergedNumber, setmergedNumber] = useState('')
  return (
    <div style={{ margin: 50, fontSize: 12, width: '330px' }}>
      <PhoneInput
        containerProps={{}}
        defaultCountry='KW'
        dropdownButtonProps={{
          // flagWidth: 30,
          // flagHeight: 30
          minWidth: 25
        }}
        flagProps={{
          rounded: true
        }}
        onInputChange={(values) => {
          console.log(values)
          setdialCode(values.dialCode)
          setphoneNumber(values.phoneNumber)
          setmergedNumber(values.dialCode + values.phoneNumber)
        }}
      />
      <p>Dial Code: {dialCode}</p>
      <p>Dial Code: {phoneNumber}</p>
      <p>Dial Code: {mergedNumber}</p>
    </div>
  )
}

export default App
