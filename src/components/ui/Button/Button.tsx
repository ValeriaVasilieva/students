import React, { FC } from 'react'

import { ReactComponent as PlusIcon } from '@assets/icons/plus.svg'

import * as SC from './styled'


interface ButtonProps {
  buttonText: string
  icon?: true
  width?: string
}

const Button: FC<ButtonProps> = ({ buttonText, icon, width }) => (
  <SC.Base width={width}>
    <SC.Button icon={icon}>
      {icon && <PlusIcon className="icon" />}
      {buttonText}
    </SC.Button>
  </SC.Base>
)

export default Button
