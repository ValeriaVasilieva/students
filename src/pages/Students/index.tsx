import React from 'react'

import StudentsList from '../../components/widgets/StudentsList'
import StudentsMenu from '../../components/entities/StudentsMenu'
import Layout from '../../components/entities/Layout'

import * as SC from './styled'


const Students = () => {
  return (
    <SC.Base>
      <Layout>
        <StudentsMenu />
        <StudentsList />
      </Layout>
    </SC.Base>
  )
}

export default Students
