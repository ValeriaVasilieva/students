import React, { FC, useState } from 'react'

import { optionProps } from '../../../consts/optionsValues'

import * as SC from './styled'


type Props = {
  options: Array<optionProps>
  placeholder: string
  onChangeSort(value: string, text: string): void
  sortValue: string
}

const SortStudents: FC<Props> = (props) => {
  const { options, placeholder, sortValue, onChangeSort } = props
  
  const [isOpened, setIsOpened] = useState<boolean>(false)

  function onClickOpen(e: React.MouseEvent): void {
    setIsOpened(!isOpened)
    e.preventDefault()
  }

  function checkOpened(e: MouseEvent): void {
    if (e.defaultPrevented) return
    else setIsOpened(false)
  }

  document.addEventListener('click', checkOpened)

  return (
    <SC.Base >
      <SC.Select tabIndex={0} onClick={onClickOpen} colorValue={sortValue}>
        {sortValue || placeholder}
      </SC.Select>
      <SC.Options isOpen={isOpened}>
        {options.map(option => (
          <SC.Option
            key={option.id}
            onClick={e => onChangeSort(e.currentTarget.dataset.value || '', e.currentTarget.dataset.text || '')}
            data-value={option.value}
            data-text={option.text}
          >
            {option.text}
          </SC.Option>
        ))}
      </SC.Options>
    </SC.Base>
  )
}

export default SortStudents
