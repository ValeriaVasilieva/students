import React, { FC, PropsWithChildren, useState } from 'react'
import { SortStudentsOption } from '@consts/optionsValues'

import * as SC from './styled'


type Props<T extends string = string> = {
  sortOptions: Array<SortStudentsOption<T>>
  placeholder: string
  onChangeSortList(option: SortStudentsOption<T>): void
  sortValue: string
}

const SortStudents = <T extends string = string>(props: PropsWithChildren<Props<T>>) => {
  const { sortOptions, placeholder, sortValue, onChangeSortList } = props

  const [isOpened, setIsOpened] = useState<boolean>(false)

  //чисто показать второй вариант отличный от Select

  const onClickOpen = (e: React.MouseEvent): void => {
    setIsOpened(!isOpened)
    e.preventDefault()
  }

  const closeFilterSelect = (e: MouseEvent): void => {
    if (e.defaultPrevented) return
    else setIsOpened(false)
  }

  document.addEventListener('click', closeFilterSelect)

  return (
    <SC.Base>
      <SC.Select tabIndex={0} onClick={onClickOpen} colorValue={sortValue}>
        {sortValue || placeholder}
      </SC.Select>
      <SC.Options isOpen={isOpened}>
        {sortOptions.map(option => (
          <SC.Option key={option.id} onClick={() => onChangeSortList(option)}>
            {option.text}
          </SC.Option>
        ))}
      </SC.Options>
    </SC.Base>
  )
}

export default SortStudents
