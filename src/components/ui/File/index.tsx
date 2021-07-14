import React, { forwardRef, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { FormValues } from '../../shared/RegistrationForm'

import * as SC from './styled'


type Props = {
  label: string
}

const File = forwardRef<HTMLInputElement, Props & ReturnType<UseFormRegister<FormValues>>>((props, ref) => {
  const { onChange, onBlur, name, label } = props

  const [avatarSrc, setAvatarSrc] = useState('')

  const handleChange = (e: any) => {
    const file = e.currentTarget.files[0]
    console.log(file)

    const reader = new FileReader()

    const a = reader.readAsDataURL(file)

    reader.onload = function () {
      if (reader.result !== null) {
        const binary = reader.result.toString()
        console.log(typeof reader.result.toString())

        setAvatarSrc(binary)
      }
    }
    reader.onerror = function () {
      return alert(reader.error)
    }

    console.log(a)
  }

  return (
    <SC.Base>
      <SC.AvatarBox>
        ФИ
        <SC.Avatar src={avatarSrc} visible={avatarSrc} />
      </SC.AvatarBox>
      <SC.Label as={'label'} htmlFor="avatar">
        {label}
      </SC.Label>
      <SC.InputFile
        id="avatar"
        ref={ref}
        onChange={(e) => {
          onChange(e)
          handleChange(e)
        }}
        name={name}
        onBlur={onBlur}
      />
    </SC.Base>
  )
})

File.displayName = 'File'

export default File
