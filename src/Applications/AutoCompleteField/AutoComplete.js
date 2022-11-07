// @ts-nocheck
import React, { useState } from 'react'
import SimpleDate from '../../Components/ComponentBlock/SimpleDate'
import SimpleHeading from '../../Components/ComponentBlock/SimpleHeading'
import Field from './Field'




const AutoComplete = () => {
  const title = 'AutoComplete TextBox'
  const [input, setinput] = useState('');

  return (
    <React.Fragment>
      <SimpleHeading title={title}></SimpleHeading>
    <Field input={input} setinput={setinput} ></Field>
      <SimpleDate></SimpleDate>
    </React.Fragment>
  )
}

export default AutoComplete