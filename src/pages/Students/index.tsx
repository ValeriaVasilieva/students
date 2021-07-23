import React from 'react'

import StudentsList from '../../components/widgets/StudentsList'
import StudentsMenu from '../../components/entities/StudentsMenu/StudentsMenu'
import Layout from '../../components/entities/Layout'


const Students = () => {
  return (
    <Layout>
      <StudentsMenu />
      <StudentsList />
    </Layout>
  )
}

export default Students
