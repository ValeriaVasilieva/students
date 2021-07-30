import React, { FC } from 'react'
import { lgbtCircle } from '@consts/colors'

import * as SC from './styled'


type Props = {
  color: string
}

const ColorBlock: FC<Props> = ({ color }) => {
  if (color === 'lgbt') {
    return (
      <SC.ColorBox>
        {lgbtCircle.map((color, index) => (
          <SC.ColorBlock key={index} blockColor={color} />
        ))}
      </SC.ColorBox>
    )
  } else {
    return <SC.ColorBox color={color}></SC.ColorBox>
  }
}

export default ColorBlock
