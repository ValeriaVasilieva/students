import React, { useState, forwardRef, ForwardRefRenderFunction } from 'react'

import * as SC from './styled'


type Props = {
  id: string
  setValue(avatar: string, value: any): void
}

const File: ForwardRefRenderFunction<HTMLInputElement, Props> = (props, ref) => {
  const [valueInput, setValueInput] = useState<string>('')
  const [file, setFile] = useState('')
  const { setValue, ...register } = props

  function onChange(e: any) {
    const file = e.currentTarget.files[0]
    setFile(file) 
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function () {
      const value = reader.result?.toString()
      setValueInput(value || '')
      console.log(valueInput)
    }

    reader.onerror = function () {
      alert(reader.error)
    }

    setValue('avatar', file) //это я сейчас балуюсь
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
      <SC.InputFile ref={ref} {...register} onChange={onChange}/>
    </SC.Base>
  )
}

export default forwardRef(File)
