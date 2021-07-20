import React, { forwardRef, useState, useEffect } from 'react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { StudentsForm } from '../../../models/EntityModels/EntityModels'
import { ColorsType, colorCircle } from '../../../consts/colors'

import * as SC from './styled'


type Props = {
  label: string
  options: ColorsType[]
  placeholder: string
  id: 'color'
  setValue: UseFormSetValue<StudentsForm>
  error?: string
}

const SelectColor = forwardRef<HTMLInputElement, Props & ReturnType<UseFormRegister<StudentsForm>>>((props, ref) => {
  const { onChange, onBlur, name, label, options, placeholder, setValue, id, error } = props

  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string>('')

  const onClickOpen = () => {
    setIsOpened(!isOpened)
  }

  const getSelectedValue = (value: string) => {
    const selectedValue = value
    setSelectedValue(selectedValue || '')
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

  const setPlaceholder = (selectedValue: string): JSX.Element | string => {
    if (selectedValue === 'lgbt') {
      return (
        <SC.OptionLgbt>
          {colorCircle.map(color => (
            <SC.ColorBlock key={color} blockColor={color} />
          ))}
        </SC.OptionLgbt>
      )
    } else if (selectedValue) {
      return <SC.Option color={options.find(option => option.color === selectedValue)?.value} />
    } else return placeholder
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <SC.Base>
        <SC.Label>{label}</SC.Label>
        <SC.Select tabIndex={0} onClick={onClickOpen}>
          {setPlaceholder(selectedValue)}
        </SC.Select>
        <SC.Options isOpen={isOpened}>
          {options.map((option) => {
            if (option.value === 'lgbt') {
              return (
                <SC.Option key={option.value} onClick={() => getSelectedValue(option.color)} color={option.value}>
                  {colorCircle.map(color => (
                    <SC.ColorBlock key={color} blockColor={color} />
                  ))}
                </SC.Option>
              )
            } else {
              return (
                <SC.Option
                  key={option.value}
                  onClick={() => getSelectedValue(option.color)}
                  color={option.value}
                ></SC.Option>
              )
            }
          })}
        </SC.Options>
        <SC.Input ref={ref} onChange={onChange} onBlur={onBlur} name={name} />
        <SC.ErrorMessage as={'span'}>{error}</SC.ErrorMessage>
      </SC.Base>
    </ClickAwayListener>
  )
})
SelectColor.displayName = 'SelectColor'
export default SelectColor
