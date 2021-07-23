import React from 'react'

import RegistrationForm from '../../components/widgets/RegistrationForm'
import BackButton from '../../components/ui/BackButton'
import { PATH_STUDENTS } from '../../consts/routes'
import Layout from '../../components/entities/Layout'


const AddStudent = () => {
  return (
    <Layout>
      <BackButton path={PATH_STUDENTS} text={'Назад к списку студентов'} />
      <RegistrationForm />
    </Layout>
  )
}

export default AddStudent
