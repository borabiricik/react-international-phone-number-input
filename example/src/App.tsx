import React, { useState } from 'react'

import 'react-international-phone-number-input/dist/index.css'
import { PhoneInput } from 'react-international-phone-number-input'

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
          minWidth: 20
        }}
        disableCountrySelect={false}
        flagProps={{
          rounded: true
        }}
        inputProps={{
          defaultValue: 'deneme',
          //@ts-ignore
          value: phoneNumber
        }}
        onInputChange={(values) => {
          console.log(values)
          setdialCode(values.dialCode)
          setphoneNumber(values.phoneNumber)
          setmergedNumber(values.dialCode + values.phoneNumber)
        }}
      />
      <p>Dial Code: {dialCode}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Dial Code merged to phone number: {mergedNumber}</p>
    </div>
  )
}

export default App
