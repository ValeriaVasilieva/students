import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import Header from '../../components/shared/Header'
import StudentsList from '../../components/shared/StudentsList'
import StudentsMenu from '../../components/shared/StudentsMenu'
import cloud from '../../store/Students'


const Students = observer(() => {
  useEffect(() => {
    cloud.setStudents()
  }, [])

  return (
    <>
      <Header />
      <StudentsMenu
        onChangeFilter={e => cloud.getFilterStudents(e)}
        onChangeSort={(value, text) => cloud.getSortedStudents(value, text)}
        sortValue={cloud.sortValue}
      />
      <StudentsList students={cloud.filteredStudents} onClickDeleteStudent={e => cloud.deleteStudent(e)} />
    </>
  )
})

export default Students
