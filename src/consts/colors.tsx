import React, { ReactElement } from 'react'

import ColorBlock from '@components/ui/ColorBlock'


export type ColorsType = {
  id: number
  renderValue: ReactElement<'div'>
  value: typeof ColorCell[number]
}

export const colors: ColorsType[] = [
  { id: 1, renderValue: <ColorBlock color={'#49C2E8'}></ColorBlock>, value: 'blue' },
  { id: 2, renderValue: <ColorBlock color={'#E25B5B'}></ColorBlock>, value: 'red' },
  { id: 3, renderValue: <ColorBlock color={'#83C872'}></ColorBlock>, value: 'green' },
  { id: 4, renderValue: <ColorBlock color={'#F7FB53'}></ColorBlock>, value: 'yellow' },
  { id: 5, renderValue: <ColorBlock color={'#000000'}></ColorBlock>, value: 'black' },
  { id: 6, renderValue: <ColorBlock color={'#EFA638'}></ColorBlock>, value: 'orange' },
  { id: 7, renderValue: <ColorBlock color={'lgbt'}></ColorBlock>, value: 'lgbt' }
]

export const lgbtCircle = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

export const ColorCell = ['blue', 'red', 'green', 'yellow', 'black', 'orange', 'lgbt'] as const
