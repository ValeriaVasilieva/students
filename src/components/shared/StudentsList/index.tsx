import React, { FC } from 'react'

import { Container } from '../../styled/Container'
import TableRow from '../TableRow'
import { Student } from '../../../models/types'

import * as SC from './styled'


type Props = {
  students: Student[]
  onClickDeleteStudent(id: number): void
}

const StudentsList: FC<Props> = (props) => {
  const { students, onClickDeleteStudent } = props

  function renderList() {
    if (students.length === 0) {
      return <h1>Нет нихуа</h1>
    } else {
      return students.map(student => (
        <TableRow student={student} key={student.id} onClickDeleteStudent={e => onClickDeleteStudent(e)}></TableRow>
      ))
    }
  }

  return (
    <SC.Base>
      <Container>
        <SC.GridHeader>
          <SC.GridCell></SC.GridCell>
          <SC.GridCell>ФИО</SC.GridCell>
          <SC.GridCell>Специальность</SC.GridCell>
          <SC.GridCell>Группа</SC.GridCell>
          <SC.GridCell>Возраст</SC.GridCell>
          <SC.GridCell>Рейтинг</SC.GridCell>
          <SC.GridCell></SC.GridCell>
        </SC.GridHeader>
        <SC.List>{renderList()}</SC.List>
      </Container>
    </SC.Base>
  )
}

export default StudentsList
