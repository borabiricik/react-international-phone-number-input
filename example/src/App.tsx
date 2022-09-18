import React from 'react'

import 'react-international-phone-input/dist/index.css'
import { PhoneInput } from 'react-international-phone-input'

const App = () => {
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
        onChange={(props) => {
          console.log(props)
        }}
        onInputChange={(values) => {
          console.log(values)
        }}
      />
    </div>
  )
}

export default App
