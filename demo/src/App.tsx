import { PhoneInput } from 'react-international-phone-number-input'

function App() {
  return (
    <div className='m-6'>
      <PhoneInput
        containerProps={{
          className: 'w-1/2',
          id: 'asd'
        }}
        dropdownButtonProps={{
          className: 'px-2 border-r-2'
        }}
      />
    </div>
  )
}

export default App
