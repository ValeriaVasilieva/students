import React, { forwardRef, useEffect, useState } from 'react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { FormValues } from '../../shared/RegistrationForm'
import { optionProps } from '../../../consts/optionsValues'

import * as SC from './styled'


type Props = {
  label: string
  options: optionProps[]
  placeholder: string
  id: 'prof' | 'sex' | 'group'
  setValue: UseFormSetValue<FormValues>
  error?: string
}

const Select = forwardRef<HTMLInputElement, Props & ReturnType<UseFormRegister<FormValues>>>((props, ref) => {
  const { label, options, placeholder, setValue, id, error } = props

  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string>('')

  const onClickOpen = () => {
    setIsOpened(!isOpened)
  }

  const getSelectedValue = (value: string) => {
    setSelectedValue(value)
    setIsOpened(false)
  }

  const handleClickAway = () => {
    setIsOpened(false)
  }

  useEffect(() => {
    if (selectedValue !== '') {
      setValue(id, selectedValue || '', { shouldValidate: true })
    }
  }, [selectedValue])

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <SC.Base>
        <SC.Label>{label}</SC.Label>
        <SC.Select tabIndex={0} onClick={onClickOpen} hasValue={!!selectedValue}>
          {selectedValue || placeholder}
        </SC.Select>
        <SC.Options isOpen={isOpened}>
          {options.map(option => (
            <SC.Option key={option.value} onClick={() => getSelectedValue(option.value)}>
              {option.value}
            </SC.Option>
          ))}
        </SC.Options>
        <SC.Input ref={ref} />
        <SC.ErrorMessage as={'span'}>{error}</SC.ErrorMessage>
      </SC.Base>
    </ClickAwayListener>
  )
})
Select.displayName = 'Select'
export default Select
