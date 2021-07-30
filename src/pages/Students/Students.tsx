import React, { FC } from 'react'

import Layout from '@components/entities/Layout'

import StudentsMenu from './StudentsMenu'
import StudentsList from './StudentsList'


const Students: FC = () => (
  <Layout>
    <StudentsMenu />
    <StudentsList />
  </Layout>
)

export default Students
