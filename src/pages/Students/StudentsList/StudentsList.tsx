import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { Container } from '@components/styled/Container'
import studentsStore from '@stores/StudentsStore'

import TableRow from './TableRow'
import * as SC from './styled'


const StudentsList: FC = observer(() => {
  useEffect(() => {
    studentsStore.getStudents()
  }, [])

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
        <SC.List>
          {studentsStore.filteredStudents.length === 0 ? (
            <h1>Бесконечная пустота и одиночество</h1>
          ) : (
            studentsStore.filteredStudents.map(student => (
              <TableRow
                student={student}
                key={student.id}
                onClickDeleteStudent={e => studentsStore.removeStudent(e)}
              ></TableRow>
            ))
          )}
        </SC.List>
      </Container>
    </SC.Base>
  )
})

export default StudentsList
