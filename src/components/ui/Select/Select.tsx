import React, { forwardRef, useEffect, useState, useRef } from 'react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { StudentsForm } from '../../../models/EntityModels/EntityModels'
import { optionProps } from '../../../consts/optionsValues'

import * as SC from './styled'


type Props = {
  label: string
  options: optionProps[]
  placeholder: string
  id: 'prof' | 'sex' | 'group'
  setValue: UseFormSetValue<StudentsForm>
  error?: string
}

const Select = forwardRef<HTMLInputElement, Props & ReturnType<UseFormRegister<StudentsForm>>>((props, ref) => {
  const { label, options, placeholder, setValue, id, error } = props

  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string>('')

  const counter = useRef(0 as number)

  //as HTMLDivElement[] вроде подходит но не до конца
  const optionsRefs = useRef([] as any)

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

  const onKeyDownSelectAndOptionHandler = (e: React.KeyboardEvent<HTMLDivElement>, id: number) => {
    if (e.code === 'ArrowDown') {
      if (id >= options.length) {
        id = 0
      }
      const elDown = optionsRefs.current[id + 1]
      elDown.focus()
    }
    if (e.code === 'ArrowUp') {
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
        <SC.Select
          tabIndex={0}
          onClick={onClickOpen}
          hasValue={!!selectedValue}
          onKeyDown={(e) => {
            onKeyDownSelectHandler(e)
          }}
        >
          {selectedValue || placeholder}
        </SC.Select>
        <SC.Options isOpen={isOpened}>
          {options.map((option) => {
            return (
              <SC.Option
                tabIndex={-1}
                key={option.value}
                data-value={option.value}
                onClick={() => getSelectedValue(option.value)}
                onKeyDown={(e) => {
                  onKeyDownOptionHandler(e, option.value, option.id)
                }}
                ref={el => (optionsRefs.current[option.id] = el)}
              >
                {option.value}
              </SC.Option>
            )
          })}
        </SC.Options>
        <SC.Input ref={ref} />
        <SC.ErrorMessage as={'span'}>{error}</SC.ErrorMessage>
      </SC.Base>
    </ClickAwayListener>
  )
})
Select.displayName = 'Select'
export default Select
