import { PhoneInput } from 'react-international-phone-number-input'

function App() {
  return (
    <div style={{ margin: 50 }}>
      <PhoneInput
        defaultCountry='TR'
        containerProps={{
          className: 'w-1/2',
          id: 'asd'
        }}
        dropdownButtonProps={{
          className: 'px-2 border-r-2'
        }}
        onChange={(props) => {
          console.log(props)
        }}
      />
    </div>
  )
}

export default App
