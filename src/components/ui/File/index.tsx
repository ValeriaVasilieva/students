import React, { useState, forwardRef, ForwardRefRenderFunction } from 'react'

import * as SC from './styled'


type Props = {
  id: string
}

const File: ForwardRefRenderFunction<HTMLInputElement, Props> = (props, ref) => {
  const [valueInput, setValueInput] = useState<string>('')
  const { ...register } = props

  function onChange(e: any) {
    const file = e.currentTarget.files[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function () {
      const value = reader.result?.toString()
      setValueInput(value || '')
    }

    reader.onerror = function () {
      alert(reader.error)
    }
  }

  return (
    <SC.Base>
      <SC.AvatarBox>
        ФИ
        <SC.Avatar src={valueInput} visibility={valueInput} />
      </SC.AvatarBox>
      <SC.Label as={'label'} htmlFor="avatar">
        Сменить аватар
      </SC.Label>
      <SC.InputFile ref={ref} {...register} onChange={onChange} />
    </SC.Base>
  )
}

export default forwardRef(File)
