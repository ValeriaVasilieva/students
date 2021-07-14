import React, { FC } from 'react'

import { Student } from '../../../models/types'
import { colorCircle } from '../../../consts/colors'

import * as SC from './styled'


type Props = {
  student: Student
  onClickDeleteStudent(id: number): void
}

const TableRow: FC<Props> = (props) => {
  const { student, onClickDeleteStudent } = props

  const drawCircle = (colorValue: string): any => {
    if (colorValue === 'lgbt') {
      return (
        <SC.Color>
          {colorCircle.map(color => (
            <SC.ColorBlock key={color} blockColor={color} />
          ))}
        </SC.Color>
      )
    }
    return <SC.Color color={colorValue} />
  }

  const drawAvatar = (avatar: string | null, name: string) => {
    if (!avatar) {
      const nameArr = name.split(' ')
      const firstLettersArr = nameArr.map(word => word.charAt(0))
      let newAvatar = '??'
      if (firstLettersArr.length === 1) {
        newAvatar = firstLettersArr.join('') + firstLettersArr.join('')
      }
      if (nameArr.length > 1) {
        const firstLetters = [firstLettersArr[0], firstLettersArr[1]]
        newAvatar = firstLetters.join('')
      }
      return <SC.AvatarWithoutPic>{newAvatar}</SC.AvatarWithoutPic>
    }
    return <SC.Avatar avatarSrc={student.avatar} />
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
        {drawCircle(student.color)}
        <SC.Button onClick={() => onClickDeleteStudent(student.id)} />
      </SC.GridRow>
    </SC.Base>
  )
}

export default TableRow
