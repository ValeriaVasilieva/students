import React, { forwardRef } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { StudentsForm } from '../../../models/EntityModels/EntityModels'

import * as SC from './styled'


type Props = {
  label: string
  id: string
  placeholder?: string
  type?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, Props & ReturnType<UseFormRegister<StudentsForm>>>((props, ref) => {
  const { label, id, placeholder, type, error, onChange, onBlur, name } = props

  return (
    <SC.Base>
      <SC.Label as={'label'} htmlFor={id}>
        {label}
      </SC.Label>
      <SC.Input
        ref={ref}
        id={id}
        as={'input'}
        placeholder={placeholder}
        type={type || 'text'}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
      />
      <SC.ErrorMessage as="span">{error}</SC.ErrorMessage>
    </SC.Base>
  )
})

Input.displayName = 'Input'

export default Input
