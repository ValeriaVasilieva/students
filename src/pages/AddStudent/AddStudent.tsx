import React, { FC } from 'react'
import { PATH_STUDENTS } from '@consts/routes'
import AddStudentForm from '@pages/AddStudent/AddStudentForm'

import BackButton from '@components/ui/BackButton'
import Layout from '@components/entities/Layout'


const AddStudent: FC = () => (
  <Layout>
    <BackButton path={PATH_STUDENTS} text={'Назад к списку студентов'} />
    <AddStudentForm />
  </Layout>
)

export default AddStudent
