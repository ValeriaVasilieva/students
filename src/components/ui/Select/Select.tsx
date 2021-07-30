import React, { forwardRef, useEffect, useState, useRef, InputHTMLAttributes, ReactElement } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { OptionProps } from '@consts/optionsValues'

import * as SC from './styled'


type Props = {
  label: string
  options: OptionProps[]
  onSelected(valueSelect: string): void
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const Select = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, options, placeholder, onSelected, error } = props

  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string>('')
  const [jsxElement, setJsxElement] = useState<ReactElement<'div'> | string>('')

  const counter = useRef(0 as number)

  //as HTMLDivElement[] вроде подходит но не до конца
  const optionsRefs = useRef([] as any)

  const onClickOpen = () => {
    setIsOpened(!isOpened)
  }

  const getSelectedValue = (value: string, jsx: ReactElement<'div'> | string = '') => {
    setJsxElement(jsx)
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

  const onKeyDownOptionHandler = (
    e: React.KeyboardEvent<HTMLDivElement>,
    value: string,
    id: number,
    jsx: ReactElement<'div'> | string = ''
  ) => {
    switch (e.code) {
      case 'Enter':
        {
          getSelectedValue(value, jsx)
        }
        break
    }
    onKeyDownSelectAndOptionHandler(e, id)
  }

  useEffect(() => {
    if (selectedValue !== '') {
      onSelected(selectedValue)
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
          {jsxElement || selectedValue || placeholder}
        </SC.Select>
        <SC.Options isOpen={isOpened}>
          {options.map((option, index) => {
            return (
              <SC.Option
                tabIndex={-1}
                key={index}
                data-value={option.value}
                onClick={() => getSelectedValue(option.value, option.renderValue)}
                onKeyDown={(e) => {
                  onKeyDownOptionHandler(e, option.value, option.id, option.renderValue)
                }}
                ref={el => (optionsRefs.current[option.id] = el)}
                isFlex={!!option.renderValue}
              >
                {option.renderValue || option.value}
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
