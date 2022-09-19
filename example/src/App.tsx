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
        containerProps={{
          //@ts-ignore
          borderColor: 'red'
        }}
        defaultCountry='KW'
        dropdownButtonProps={{
          // flagWidth: 30,
          // flagHeight: 30
          placeholder: 'Country',
          minWidth: 20,
          iconProps: {
            color: 'red',
            width: 16,
            height: 16
          },
          testId: 'example-test-id'
        }}
        disableCountrySelect={false}
        flagProps={{
          rounded: true
        }}
        inputProps={{
          defaultValue: 'deneme',
          //@ts-ignore
          value: phoneNumber,
          testId: 'example-test-id-2'
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
