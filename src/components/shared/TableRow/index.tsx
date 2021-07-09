import React, {FC} from 'react'

import {Student} from '../../../models/types'

import * as SC from './styled'


type Props = {
  student: Student
  onClickDeleteStudent(id: number): void
}

const TableRow: FC<Props> = (props) => {

  const {student, onClickDeleteStudent} = props

  return (
    <SC.Base>
      <SC.GridRow>
        {/* сделать img */}
        <SC.GridCell avatar={student.avatar} ></SC.GridCell> 
        <SC.GridCell>{student.name}</SC.GridCell>
        <SC.GridCell>{student.prof}</SC.GridCell>
        <SC.GridCell>{student.group}</SC.GridCell>
        <SC.GridCell>{student.age}</SC.GridCell>
        <SC.GridCell>{student.score}</SC.GridCell>
        <SC.Color color={student.color}/>
        <SC.Button onClick={() => onClickDeleteStudent(student.id)}/>
      </SC.GridRow>
    </SC.Base>
  )
}

export default TableRow
