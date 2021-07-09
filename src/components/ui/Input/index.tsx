import React, { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

import * as SC from './styled'


type InputProps = {
  label?: string
  placeholder?: string
  error?: FieldError
  type?: string
  id: string
  max?: number
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (props, ref) => {
  const { label, type, error, id, max, ...register } = props

  return (
    <SC.Base>
      <SC.Label as={'label'} htmlFor={id}>
        {label}
      </SC.Label>
      <SC.Input
        as={'input'}
        ref={ref}
        id={id}
        type={type || 'text'}
        {...register}
        maxLength={max || 35}
      />
      <SC.ErrorMessage as="span">{error?.message}</SC.ErrorMessage>
    </SC.Base>
  )
}

export default forwardRef(Input)
