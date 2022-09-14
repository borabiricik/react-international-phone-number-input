import React from 'react'

import 'react-international-phone-input/dist/index.css'
import { PhoneInput } from 'react-international-phone-input'

const App = () => {
  return (
    <div className=''>
      <PhoneInput
        containerProps={{
          style: {}
        }}
        dropdownButtonProps={
          {
            // flagWidth: 30,
            // flagHeight: 30
          }
        }
      />
    </div>
  )
}

export default App
