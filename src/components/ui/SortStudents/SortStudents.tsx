import React, { FC, useState } from 'react'
import { SortStudentsProps } from '@consts/optionsValues'

import * as SC from './styled'


type Props = {
  sortOptions: Array<SortStudentsProps>
  placeholder: string
  onChangeSortList(value: string, text: string): void
  sortValue: string
}

const SortStudents: FC<Props> = (props) => {
  const { sortOptions, placeholder, sortValue, onChangeSortList } = props

  const [isOpened, setIsOpened] = useState<boolean>(false)

  //чисто показать второй вариант отличный от Select

  const onClickOpen = (e: React.MouseEvent): void => {
    setIsOpened(!isOpened)
    e.preventDefault()
  }

  const checkOpened = (e: MouseEvent): void => {
    if (e.defaultPrevented) return
    else setIsOpened(false)
  }

  document.addEventListener('click', checkOpened)

  return (
    <SC.Base>
      <SC.Select tabIndex={0} onClick={onClickOpen} colorValue={sortValue}>
        {sortValue || placeholder}
      </SC.Select>
      <SC.Options isOpen={isOpened}>
        {sortOptions.map(option => (
          <SC.Option key={option.id} onClick={() => onChangeSortList(option.value, option.text)}>
            {option.text}
          </SC.Option>
        ))}
      </SC.Options>
    </SC.Base>
  )
}

export default SortStudents
