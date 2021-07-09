import React, { FC, useState, useEffect } from 'react'

import * as SC from './styled'


type Props = {
  id: string
  name: string
  onFileSelect: (file: string) => void
  value: string
}

const UploadImage: FC<Props> = (props) => {
  const { id, name, onFileSelect, value } = props

  const [valueInput, setValueInput] = useState<string>(value)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const file = e?.target?.files?.[0]
    if (file) {
      const reader = new FileReader()

      reader.onloadend = () => {
        setValueInput(reader.result as string)
        onFileSelect(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  useEffect(() => {
    setValueInput(value)
  }, [value])

  return (
    // <SC.Base imagePreviewUrl={imagePreviewUrl}>
    //   <input id={id} name={name} type="file" onChange={handleImageChange} accept="image/*" />
    //   <SC.LabelContainer htmlFor={id}>
    //     <SC.ImageContainer imagePreviewUrl={imagePreviewUrl}>
    //       {imagePreviewUrl && (
    //         <>
    //           <SC.ImagePreview src={imagePreviewUrl} />
    //           <SC.EditIcon />
    //         </>
    //       )}
    //     </SC.ImageContainer>

    //   </SC.LabelContainer>
    // </SC.Base>

    <SC.Base>
      <SC.AvatarBox>
        ФИ
        <SC.Avatar src={valueInput} visibility={valueInput} />
      </SC.AvatarBox>
      <SC.Label as="label" htmlFor={id}>
        Сменить аватар
      </SC.Label>
      <SC.InputFile id={id} name={name} type="file" onChange={handleImageChange} accept="image/*" />
    </SC.Base>
  )
}

export default UploadImage
