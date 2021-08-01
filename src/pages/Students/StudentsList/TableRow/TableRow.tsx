import React, { FC } from 'react'
import { colors } from '@consts/colors'

import { Student } from '@models/Students/EntityModels/Students'

import * as SC from './styled'


type Props = {
  student: Student
  onClickDeleteStudent(student: Student): void
}

const TableRow: FC<Props> = (props) => {
  const { student, onClickDeleteStudent } = props

  const drawAvatar = (avatar: string | null, name: string) => {
    if (!avatar) {
      const nameArr = name.split(' ')
      const firstLettersArr = nameArr.map(word => word.charAt(0))
      let newAvatar = '??'
      if (firstLettersArr.length === 1) {
        newAvatar = firstLettersArr.join('')
      }
      if (nameArr.length > 1) {
        const firstLetters = [firstLettersArr[0], firstLettersArr[1]]
        newAvatar = firstLetters.join('')
      }
      return <SC.AvatarWithoutPic>{newAvatar}</SC.AvatarWithoutPic>
    }
    return (
      <SC.Avatar avatarSrc={student.avatar}>
        <SC.AvatarBorder />
      </SC.Avatar>
    )
  }

  return (
    <SC.Base>
      <SC.GridRow>
        <SC.GridCell>{drawAvatar(student.avatar, student.name)}</SC.GridCell>
        <SC.GridCell>{student.name}</SC.GridCell>
        <SC.GridCell>{student.prof}</SC.GridCell>
        <SC.GridCell>{student.group}</SC.GridCell>
        <SC.GridCell>{student.age}</SC.GridCell>
        <SC.GridCell>{student.score}</SC.GridCell>
        {colors.map((colorName) => {
          if (colorName.value === student.color) {
            return colorName.renderValue
          }
        })}
        <SC.VerticalLine />
        <SC.Button onClick={() => onClickDeleteStudent(student)} />
      </SC.GridRow>
    </SC.Base>
  )
}

export default TableRow
