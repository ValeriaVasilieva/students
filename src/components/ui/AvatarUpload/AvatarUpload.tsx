import React, { forwardRef, useState, InputHTMLAttributes, ChangeEventHandler } from 'react'

import * as SC from './styled'


type Props = {
  label: string
  onChange: ChangeEventHandler
} & InputHTMLAttributes<HTMLInputElement>

const AvatarUpload = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { onChange, label, id, ...inputAttributes } = props

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
      <SC.Label as={'label'} htmlFor={id}>
        {label}
      </SC.Label>
      <SC.InputFile
        id={id}
        type="file"
        accept=".jpg, .jpeg, .gif, .png"
        ref={ref}
        onChange={(e) => {
          onChange(e)
          handleChange(e)
        }}
        {...inputAttributes}
      />
    </SC.Base>
  )
})

AvatarUpload.displayName = 'AvatarUpload'

export default AvatarUpload
