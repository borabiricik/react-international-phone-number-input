import React from 'react'

import 'react-international-phone-input/dist/index.css'
import { PhoneInput } from 'react-international-phone-input'

const App = () => {
  return (
    <div className=''>
      <PhoneInput
        containerProps={{}}
        // defaultCountry='TR'
        dropdownButtonProps={{
          // flagWidth: 30,
          // flagHeight: 30
          minWidth: 25
        }}
        onChange={(props) => {
          console.log(props)
        }}
      />
    </div>
  )
}

export default App
