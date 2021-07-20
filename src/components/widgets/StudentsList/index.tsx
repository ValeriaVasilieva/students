import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { Container } from '../../styled/Container'
import TableRow from '../../entities/TableRow'
import studentsStore from '../../../store/Students'

import * as SC from './styled'


const StudentsList = observer(() => {
  useEffect(() => {
    studentsStore.setStudents()
  }, [])

  function renderList() {
    if (studentsStore.filteredStudents.length === 0) {
      return <h1>Бесконечная пустота и одиночество</h1>
    } else {
      return studentsStore.filteredStudents.map(student => (
        <TableRow
          student={student}
          key={student.id}
          onClickDeleteStudent={e => studentsStore.deleteStudent(e)}
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
