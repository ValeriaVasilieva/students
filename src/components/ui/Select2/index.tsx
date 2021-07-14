import React, { FC, useState } from 'react'
import { ControllerRenderProps } from 'react-hook-form'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { FormValues } from '../../shared/RegistrationForm'
import { optionProps } from '../../../consts/optionsValues'

import * as SC from './styled'


type Props = {
  label: string
  options: optionProps[]
  field: ControllerRenderProps<FormValues>
  placeholder?: string
  id?: 'prof' | 'sex' | 'group'
  error?: string
}

const Select2: FC<Props> = (props) => {
  const { field, label, options, placeholder, error } = props
  const { onChange, onBlur, value, name } = field

  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string>('')

  const onClickOpen = (e: any) => {
    setIsOpened(!isOpened)
  }

  const getSelectedValue = (e: React.SyntheticEvent<HTMLDivElement>) => {
    //нельзя задать тип event c dataset, eсли он не берется из currentTarget
    const selectedValue = e.currentTarget.dataset.value
    setSelectedValue(selectedValue || '')
    setIsOpened(false)
  }

  const handleClickAway = () => {
    setIsOpened(false)
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <SC.Base>
        <SC.Label>{label}</SC.Label>
        <SC.Select tabIndex={0} onClick={onClickOpen}>
          {selectedValue || placeholder}
        </SC.Select>
        <SC.Options isOpen={isOpened}>
          {options.map(option => (
            <SC.Option key={option.id} data-value={option.value} onClick={getSelectedValue}>
              {option.value}
            </SC.Option>
          ))}
        </SC.Options>
        <SC.Input
          onChange={(e: any) => onChange(selectedValue, console.log(value))}
          onBlur={onBlur}
          name={name}
          value={selectedValue}
        />
        <SC.ErrorMessage as={'span'}>{error}</SC.ErrorMessage>
      </SC.Base>
    </ClickAwayListener>
  )
}

export default Select2
