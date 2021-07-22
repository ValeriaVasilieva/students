import React, { forwardRef, useState, useEffect, useRef } from 'react'
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

  const counter = useRef(0 as number)
  const optionsRefs = useRef([] as any)

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

  const onKeyDownSelectAndOptionHandler = (e: React.KeyboardEvent<HTMLDivElement>, id: number) => {
    if (e.code === 'ArrowDown' || e.code === 'ArrowRight') {
      if (id >= options.length) {
        id = 0
      }
      const elDown = optionsRefs.current[id + 1]
      elDown.focus()
    }
    if (e.code === 'ArrowUp' || e.code === 'ArrowLeft') {
      if (id <= 1) {
        id = options.length + 1
      }
      const elUp = optionsRefs.current[id - 1]
      elUp.focus()
    }
    if (e.code === 'Tab') {
      if (isOpened) {
        e.preventDefault()
        setIsOpened(false)
      }
    }
  }

  const onKeyDownSelectHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.code) {
      case 'Enter':
        setIsOpened(!isOpened)
        break
      case 'ArrowRight':
        {
          if (counter.current > options.length - 1) {
            counter.current = 0
          }
          const elRight = optionsRefs.current[counter.current + 1]
          setSelectedValue(elRight.dataset.value || '')
          ++counter.current
        }
        break
      case 'ArrowLeft':
        {
          if (counter.current <= 1) {
            counter.current = options.length + 1
          }
          const elLeft = optionsRefs.current[counter.current - 1]
          setSelectedValue(elLeft.dataset.value || '')
          --counter.current
        }
        break
    }
    onKeyDownSelectAndOptionHandler(e, 0)
  }

  const onKeyDownOptionHandler = (e: React.KeyboardEvent<HTMLDivElement>, value: string, id: number) => {
    switch (e.code) {
      case 'Enter':
        {
          getSelectedValue(value)
        }
        break
    }
    onKeyDownSelectAndOptionHandler(e, id)
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
        <SC.Select tabIndex={0} onClick={onClickOpen} onKeyDown={e => onKeyDownSelectHandler(e)}>
          {setPlaceholder(selectedValue)}
        </SC.Select>
        <SC.Options isOpen={isOpened}>
          {options.map((option) => {
            if (option.value === 'lgbt') {
              return (
                <SC.Option
                  tabIndex={-1}
                  key={option.value}
                  onClick={() => getSelectedValue(option.color)}
                  color={option.value}
                  data-value={option.color}
                  ref={el => (optionsRefs.current[option.id] = el)}
                  onKeyDown={e => onKeyDownOptionHandler(e, option.color, option.id)}
                >
                  {colorCircle.map(color => (
                    <SC.ColorBlock key={color} blockColor={color} />
                  ))}
                </SC.Option>
              )
            } else {
              return (
                <SC.Option
                  tabIndex={-1}
                  key={option.value}
                  data-value={option.color}
                  onClick={() => getSelectedValue(option.color)}
                  color={option.value}
                  ref={el => (optionsRefs.current[option.id] = el)}
                  onKeyDown={e => onKeyDownOptionHandler(e, option.color, option.id)}
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
