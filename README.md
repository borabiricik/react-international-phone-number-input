
# React International Phone Number Input




You can access the basic example from that [CodeSandbox Link](https://codesandbox.io/s/j6yuey?file=/src/App.tsx)


## Install 

npm:
```bash 
npm install react-international-phone-number-input --save
```

yarn:
```bash 
yarn add react-international-phone-number-input
```

and add CSS file to your app:
```bash 
import 'react-international-phone-number-input/dist/index.css'
```


    
## Usage

```javascript
import React, { Component } from 'react'
import { PhoneInput } from 'react-international-phone-number-input'
import 'react-international-phone-number-input/dist/index.css'

class Example extends Component {
  render() {
    return (
    <PhoneInput
        containerProps={{
            //...props here
        }}
        defaultCountry='KW'
        dropdownButtonProps={{
        //...props here
        }}
        disableCountrySelect
        flagProps={{
        //...props here
        }}
        inputProps={{
        //...props here
        }}
        onInputChange={(values) => {
          console.log(values)
        }}
        prepend={
            <div>
        // prepend react element here
        </div>
        }
      />)
  }
}
```



  
## Base Features

- RTL Support
- Open Source
- Prepend element for use cases
- CRA & Next.js support

  
## Support

Feel free to contact me via borabiriciksoftware@gmail.com for any purposes.

  
### TO-DO

- [x]  Will add 