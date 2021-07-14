import React, { forwardRef } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import { FormValues } from '../../shared/RegistrationForm'

import * as SC from './styled'


type Props = {
  label: string
  id: string
  placeholder?: string
  type?: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, Props & ReturnType<UseFormRegister<FormValues>>>((props, ref) => {
  const { label, id, placeholder, type, error, ...inputProps } = props

  return (
    <SC.Base>
      <SC.Label as={'label'} htmlFor={id}>
        {label}
      </SC.Label>
      <SC.Input as={'input'} placeholder={placeholder} type={type || 'text'} {...inputProps} />
      <SC.ErrorMessage as="span">{error}</SC.ErrorMessage>
    </SC.Base>
  )
})

Input.displayName = 'Input'

export default Input
