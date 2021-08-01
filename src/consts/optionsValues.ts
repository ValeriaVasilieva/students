import React, { ReactElement } from 'react'


export type Option<T extends string = string> = {
  id: number
  value: T
  renderValue?: ReactElement<'div'>
}

export type SortStudentsOption<T extends string = string> = {
  id: number
  sortType: T
  text: string
}

export type SortTypes = 'name' | 'ageDown' | 'ageUp' | 'scoreDown' | 'scoreUp'

export type ProfTypes =
  | 'Информатика'
  | 'Банщик'
  | 'Мастер по маникюру'
  | 'Валеркин любимец'
  | 'Боец UFC перед игрой в класк'

export type SexTypes = 'Мальчик' | 'Мужчина' | 'Женщина'

export type GroupTypes = 'E-404' | 'E-420' | 'E-401' | 'E-228'

export const prof: Option<ProfTypes>[] = [
  { id: 1, value: 'Информатика' },
  { id: 2, value: 'Банщик' },
  { id: 3, value: 'Мастер по маникюру' },
  { id: 4, value: 'Валеркин любимец' },
  { id: 5, value: 'Боец UFC перед игрой в класк' }
]

export const sex: Option<SexTypes>[] = [
  { id: 1, value: 'Мальчик' },
  { id: 2, value: 'Мужчина' },
  { id: 3, value: 'Женщина' }
]

export const group: Option<GroupTypes>[] = [
  { id: 1, value: 'E-404' },
  { id: 2, value: 'E-420' },
  { id: 3, value: 'E-401' },
  { id: 4, value: 'E-228' }
]

export const sortStudents: SortStudentsOption<SortTypes>[] = [
  { id: 1, sortType: 'name', text: 'К порядку' },
  { id: 2, sortType: 'ageDown', text: 'Молодые' },
  { id: 3, sortType: 'ageUp', text: 'Старые' },
  { id: 4, sortType: 'scoreDown', text: 'Умные' },
  { id: 5, sortType: 'scoreUp', text: 'Глупые' }
]

// type test = {
//   [key in SortTypes]: string
// }
