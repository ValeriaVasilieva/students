import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { Container } from '@components/styled/Container'
import TableRow from '@components/entities/TableRow'
import studentsStore from '@stores/StudentsStore'

import * as SC from './styled'


const StudentsList: FC = observer(() => {
  useEffect(() => {
    studentsStore.getStudents()
  }, [])

  const renderList = () => {
    if (studentsStore.filteredStudents.length === 0) {
      return <h1>Бесконечная пустота и одиночество</h1>
    } else {
      return studentsStore.filteredStudents.map(student => (
        <TableRow
          student={student}
          key={student.id}
          onClickDeleteStudent={e => studentsStore.removeStudent(e)}
        ></TableRow>
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
})

export default StudentsList
