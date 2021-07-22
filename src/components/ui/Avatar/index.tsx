import React, { forwardRef, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { StudentsForm } from '../../../models/EntityModels/EntityModels'

import * as SC from './styled'


type Props = {
  label: string
}

const Avatar = forwardRef<HTMLInputElement, Props & ReturnType<UseFormRegister<StudentsForm>>>((props, ref) => {
  const { onChange, onBlur, name, label } = props

  const [avatarSrc, setAvatarSrc] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files && e.currentTarget.files[0]
    const reader = new FileReader()

    if (file) {
      reader.readAsDataURL(file)
      reader.onload = function () {
        if (reader.result !== null) {
          const binary = reader.result.toString()
          setAvatarSrc(binary)
        }
      }
      reader.onerror = function () {
        return console.warn('Файл не вижу')
      }
    }
  }

  return (
    <SC.Base>
      <SC.AvatarBox>
        <SC.NameAvatar visible={avatarSrc}>ФИ</SC.NameAvatar>
        <SC.Avatar src={avatarSrc} visible={avatarSrc} />
      </SC.AvatarBox>
      <SC.Label as={'label'} htmlFor="avatar">
        {label}
      </SC.Label>
      <SC.InputFile
        accept=".jpg, .jpeg, .gif, .png"
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

Avatar.displayName = 'Avatar'

export default Avatar
