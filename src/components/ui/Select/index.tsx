import React, { forwardRef, ForwardRefRenderFunction, useState } from 'react'
import { FieldError } from 'react-hook-form'

import { optionProps } from '../../../consts/optionsValues'

import * as SC from './styled'


type SelectProps = {
  defaultValue: string
  label: string
  error?: FieldError
  options: Array<optionProps>
  id: string
  setValue(id: string, value: string): void
}

const Select: ForwardRefRenderFunction<HTMLInputElement, SelectProps> = (props, ref) => {
  const { defaultValue, label, error, options, setValue, id, ...register } = props

  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [selectValue, setMyValue] = useState<string>('')

  function onClickOpen() {
    setIsOpened(!isOpened)
  }

  function checkOpened() {
    setIsOpened(false)
  }

  document.addEventListener('click', checkOpened, true)

  function getValue(value: string) {
    setMyValue(value)
    setValue(id, value)
  }

  return (
    <SC.Base>
      <SC.Label>{label}</SC.Label>
      <SC.Select onClick={onClickOpen} ref={ref} {...register}>
        {selectValue || defaultValue}
      </SC.Select>
      <SC.Options isOpen={isOpened} onClick={(e: any) => getValue(e.target.dataset.value)}>
        {options.map(option => (
          <SC.Option key={option.id} data-value={option.value}>
            {option.value}
          </SC.Option>
        ))}
      </SC.Options>
      <SC.ErrorMessage as={'span'}>{error?.message}</SC.ErrorMessage>
    </SC.Base>
  )
}

export default forwardRef(Select)
