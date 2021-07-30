import React, { forwardRef, InputHTMLAttributes } from 'react'

import * as SC from './styled'


type Props = {
  label: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { id, label, error, type = 'text', ...inputAttributes } = props

  return (
    <SC.Base>
      <SC.Label as={'label'} htmlFor={id}>
        {label}
      </SC.Label>
      <SC.Input id={id} ref={ref} as={'input'} type={type} {...inputAttributes} />
      <SC.ErrorMessage as="span">{error}</SC.ErrorMessage>
    </SC.Base>
  )
})

Input.displayName = 'Input'

export default Input
